import path from "path";
import fs from "fs";
import crypto from "crypto";

import User from "../models/user.model";

import errorHandler from "../helpers/dbErrorHandler";
import { uploadImages, updateImgUpload, deleteImages } from "../aws/aws";

import formidable from "formidable";
import _ from "lodash";
import jwt from "jsonwebtoken";
import config from "../../config/config";
import sgMail from "@sendgrid/mail";
import { v4 as uuidv4 } from "uuid";

import profileImage from "../../client/assets/img/egg.png";
import confirmationMail from "../../client/assets/confirmationMail";
import resetPasswordMail from "../../client/assets/resetPasswordMail";

const noSpaceStrings = (string) => string.replace(/\s/g, "");
sgMail.setApiKey(config.sendGridKey);

const development = config.env === "development";

const create = (req, res, next) => {
	const { name, email, password } = req.body;

	User.findOne({ email }).exec((err, user) => {
		if (user) {
			return res.status(400).json({ error: "Email is taken" });
		}

		const token = jwt.sign(
			{ name, email, password },
			config.jwtAcountActivation,
			{ expiresIn: "10m" }
		);

		const mailOptions = {
			from: "lucas@bythealphabet.com",
			to: email,
			subject: "Account activation link",
			html: confirmationMail(token, development),
		};

		sgMail
			.send(mailOptions)
			.then((sent) => {
				return res.json({
					message: `An Email has been sent to ${email}. Follow the instruction to activate your account`,
				});
			})
			.catch((error) => {
				return res
					.status(400)
					.json({ error: errorHandler.getErrorMessage(error) });
			});
	});
};

const list = (req, res, next) => {
	User.find()
		.select("name email updated created")
		.then((users) => res.json(users))
		.catch((error) =>
			res.status(400).json({ error: errorHandler.getErrorMessage(err) })
		);
};

const userByID = (req, res, next, id) => {
	User.findById(id).exec((error, user) => {
		if (error || !user) {
			return res.status(400).json({ error: "User Not Found" });
		}
		req.profile = user;
		next();
	});
};

const read = (req, res, next) => {
	req.profile.hashed_password = undefined;
	req.profile.salt = undefined;
	req.profile.resetPasswordLink = undefined;
	res.json(req.profile);
};

const update = (req, res, next) => {
	const form = new formidable.IncomingForm();

	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res
				.status(400)
				.json({ error: "Photo could not be uploaded" });
		}

		let user = req.profile;

		user = _.extend(user, fields);
		user.updated = Date.now();

		if (!files.photo) {
			return user
				.save()
				.then((result) => {
					res.status(200).json(result);
				})
				.catch(function createShopWithNoImageError(err) {
					res.status(400).json({
						error: errorHandler.getErrorMessage(err),
					});
				});
		}

		const userFolderPath = `${noSpaceStrings(user.imgId)}/user-photo`;

		updateImgUpload(files.photo, user.photo, userFolderPath, {
			width: 180,
			height: 180,
		})
			.then((data) => {
				user.photo = data;
				return user.save();
			})
			.then((updatedUser) => {
				return res.status(200).json(updatedUser);
			})
			.catch(function userCreateError(err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err),
				});
			});
	});
};

const remove = (req, res, next) => {
	let user = req.profile;
	deleteImages(user.photo)
		.then(function removeUserFromDb() {
			return user.remove();
		})
		.then(function afterRemoveUser(deletedUser) {
			deletedUser.hashed_password = undefined;
			deletedUser.salt = undefined;
			return res.json(deletedUser);
		})
		.then(function nowDeleteShop() {
			console.log("delete Shop now:");
		})
		.catch((err) => {
			return res.status(400).json({
				error: errorHandler.getErrorMessage(err),
			});
		});
};

const isSeller = (req, res, next) => {
	const isSeller = req.profile && req.profile.seller;
	if (!isSeller) {
		return res.status("403").json({
			error: "User is not a seller",
		});
	}
	next();
};

const confirmation = (req, res, next) => {
	const { token } = req.body;

	if (token) {
		jwt.verify(token, config.jwtAcountActivation, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					error: "This acount activation link had expired",
				});
			}

			const { name, email, password } = jwt.decode(token);
			User.findOne(
				{
					email: email,
				},
				(err, user) => {
					if (err)
						return res.status("401").json({
							error: "Someting went wrong please try again",
						});

					if (!user) {
						const newUser = new User({
							name,
							email,
							password,
							isVerified: true,
							imgId: uuidv4(),
						});
						newUser
							.save()
							.then(() =>
								res.status(200).json({
									message:
										"Your Acount is Successfully Activated Please Sign in",
								})
							)
							.catch((error) =>
								res.status(400).json({
									error: errorHandler.getErrorMessage(error),
								})
							);

						return "";
					}

					if (user.isVerified) {
						return res.status(400).send({
							message:
								"This Email has already been verified, Sign In",
						});
					}
				}
			);
		});
	} else {
		return res
			.status(401)
			.json({ error: "Someting went wrong please try again" });
	}
};

const forgotPassword = (req, res, next) => {
	const { email } = req.body;

	User.findOne(
		{
			email: req.body.email,
		},
		(err, user) => {
			if (err || !user)
				return res.status("400").json({
					error: "User with that email does not exsist",
				});

			const token = jwt.sign({ _id: user._id }, config.jwtResetPassword, {
				expiresIn: "10m",
			});

			const mailOptions = {
				from: "lucas@bythealphabet.com",
				to: email,
				subject: "Password Reset Link",
				html: resetPasswordMail(token, development),
			};

			return user.updateOne(
				{ resetPasswordLink: token },
				(err, succes) => {
					if (err) {
						return res.status(400).json({
							error:
								"Database connection error on user password forgot request",
						});
					} else {
						sgMail
							.send(mailOptions)
							.then((sent) => {
								return res.json({
									message: `Email has been sent to ${email}. Follow the instruction to reset your password`,
								});
							})
							.catch((error) => {
								return res
									.status(400)
									.json({ error: error.message });
							});
					}
				}
			);
		}
	);
};

const resetPassword = (req, res, next) => {
	const { password, token } = req.body;
	if (token) {
		jwt.verify(token, config.jwtResetPassword, (err, decoded) => {
			if (err) {
				return res
					.status(401)
					.json({ error: "this password reset link had expired" });
			}

			User.findOne(
				{
					resetPasswordLink: token,
				},
				(err, user) => {
					if (err || !user) {
						return res.status("401").json({
							error: "Someting went wrong please try again",
						});
					}

					const updatedFields = {
						password: password,
						resetPasswordLink: "",
					};

					user = _.extend(user, updatedFields);
					user.save((err, result) => {
						if (err) {
							return res.status(400).json({
								error: errorHandler.getErrorMessage(err),
							});
						}

						res.json({
							message:
								"Great! now you can login with you new password",
						});
					});
				}
			);
		});
	}
};

export default {
	create,
	list,
	userByID,
	read,
	update,
	remove,
	isSeller,
	confirmation,
	forgotPassword,
	resetPassword,
};
