import User from "../models/user.model";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import { OAuth2Client } from "google-auth-library";
import fetch from "node-fetch";
import uuidv4 from "uuid/v4";
import config from "../../config/config";
require("dotenv").config();

const googleClientId = config.googleClientId;
const facebookAppId = config.facebookAppId;

const client = new OAuth2Client(googleClientId);

const signin = (req, res) => {
	User.findOne(
		{
			email: req.body.email,
		},
		(err, user) => {
			if (err || !user)
				return res.status("401").json({
					error: "Email and password don't match.",
				});

			if (!user.authenticate(req.body.password)) {
				return res.status("401").send({
					error: "Email and password don't match.",
				});
			}

			const token = jwt.sign(
				{
					_id: user._id,
				},
				config.jwtSecret,
				{ expiresIn: "7d" }
			);

			const { _id, photo, email, name, seller } = user;

			return res.json({
				token,
				user: { _id, photo, email, name, seller },
			});
		}
	);
};

const facebookKey = (req, res) =>
	res.status("200").json({
		api: facebookAppId,
	});

const facebookSignin = (req, res) => {
	const { userID, accessToken } = req.body;

	const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

	return fetch(url, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((response) => {
			const { email, name } = response;

			User.findOne(
				{
					email,
				},
				(err, user) => {
					if (user) {
						const token = jwt.sign(
							{
								_id: user._id,
							},
							config.jwtSecret,
							{ expiresIn: "7d" }
						);

						const { _id, photo, email, name, seller } = user;

						return res.json({
							token,
							user: { _id, photo, email, name, seller },
						});
					} else {
						let password = uuidv4();
						let imgId = uuidv4();
						const newUser = new User({
							name,
							email,
							password,
							imgId,
						});

						newUser
							.save()
							.then((facebookUser) => {
								const token = jwt.sign(
									{
										_id: facebookUser._id,
									},
									config.jwtSecret,
									{ expiresIn: "7d" }
								);

								const {
									_id,
									photo,
									email,
									name,
									seller,
								} = facebookUser;
								return res.json({
									token,
									user: { _id, photo, email, name, seller },
								});
							})
							.catch((error) =>
								res.status(400).json({
									error: "FaceBook login failed.",
								})
							);
					}
				}
			);
		})
		.catch((err) => {
			return res.status(400).json({
				error: "FaceBook login failed, try again.",
			});
		});
};

const googleKey = (req, res) =>
	res.status("200").json({
		api: googleClientId,
	});

const googleSignin = (req, res) => {
	const { idToken } = req.body;

	client
		.verifyIdToken({
			idToken,
			audience: googleClientId,
		})
		.then((response) => {
			const { email_verified, name, email } = response.payload;

			if (email_verified) {
				User.findOne(
					{
						email,
					},
					(err, user) => {
						if (user) {
							const token = jwt.sign(
								{
									_id: user._id,
								},
								config.jwtSecret,
								{ expiresIn: "7d" }
							);

							const { _id, photo, email, name, seller } = user;

							return res.json({
								token,
								user: { _id, photo, email, name, seller },
							});
						} else {
							let password = uuidv4();
							let imgId = uuidv4();
							const newUser = new User({
								name,
								email,
								password,
								imgId,
							});

							newUser
								.save()
								.then((googleUser) => {
									const token = jwt.sign(
										{
											_id: googleUser._id,
										},
										config.jwtSecret,
										{ expiresIn: "7d" }
									);
									const {
										_id,
										photo,
										email,
										name,
										seller,
									} = googleUser;
									return res.json({
										token,
										user: {
											_id,
											photo,
											email,
											name,
											seller,
										},
									});
								})
								.catch((error) =>
									res.status(400).json({
										error: "Google login failed.",
									})
								);
						}
					}
				);
			} else {
				return res.status(400).json({
					error: "Google login failed, try again.",
				});
			}
		});
};

const signout = (req, res) => {
	res.clearCookie("t");
	return res.status("200").json({
		message: "signed out",
	});
};

const requireSignin = expressJwt({
	secret: config.jwtSecret,
	userProperty: "auth",
});

const hasAuthorization = (req, res, next) => {
	const authorized =
		req.profile && req.auth && req.profile._id == req.auth._id;
	if (!authorized) {
		return res.status("403").json({
			error: "User is not authorized",
		});
	}
	next();
};

export default {
	signin,
	signout,
	requireSignin,
	hasAuthorization,
	googleSignin,
	facebookSignin,
	facebookKey,
	googleKey,
};
