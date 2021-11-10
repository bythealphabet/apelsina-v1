import path from "path";
import fs from "fs";
import errorHandler from "../helpers/dbErrorHandler";
import Shop from "../models/shop.model";
import formidable from "formidable";
import _ from "lodash";
import { uploadImages, updateImgUpload, deleteImages } from "../aws/aws";

const noSpaceStrings = string => string.replace(/\s/g, "");

const list = (req, res) => {
	Shop.find((err, shops) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler.getErrorMessage(err)
			});
		}
		res.json(shops);
	});
};

const listByOwner = (req, res) => {
	Shop.find({ owner: req.profile._id }, (err, shops) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler.getErrorMessage(err)
			});
		}
		res.json(shops);
	}).populate("owner", "_id name");
};

const create = (req, res, next) => {
	const form = new formidable.IncomingForm();

	form.keepExtensions = true;
	form.parse(req, function createShop(err, fields, files) {
		if (err) {
			return res.status(400).json({
				message: "Image could not be uploaded"
			});
		}

		let shop = new Shop(fields);
		shop.owner = req.profile;

		if (!files.logo && !files.banner) {
			return shop
				.save()
				.then(result => {
					res.status(200).json(result);
				})
				.catch(function createShopWithNoImageError(err) {
					res.status(400).json({
						error: errorHandler.getErrorMessage(err)
					});
				});
		}

		const logoFolderPath = `${req.profile.imgId}/shops/${noSpaceStrings(
			shop.name
		)}/logo`;

		const bannerFolderPath = `${req.profile.imgId}/shops/${noSpaceStrings(
			shop.name
		)}/banner`;

		uploadImages(
			{
				filePath: files.logo.path,
				path: logoFolderPath
			},
			{ width: 180, height: 180 }
		)
			.then(data => (shop.logo = data))
			.then(() =>
				uploadImages(
					{
						filePath: files.banner.path,
						path: bannerFolderPath
					},
					{ width: 1200, height: 628 }
				)
			)
			.then(data => (shop.banner = data))
			.then(() => shop.save())
			.then(newShop => res.status(200).json(newShop))
			.catch(err =>
				res.status(400).json({
					error: errorHandler.getErrorMessage(err)
				})
			);
	});
};

const update = (req, res, next) => {
	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, function updateShop(err, fields, files) {
		if (err) {
			return res.status(400).json({
				message: "Photo could not be uploaded"
			});
		}

		let shop = req.shop;

		shop = _.extend(shop, fields);
		shop.updated = Date.now();

		if (!files.logo)
			if (!files.banner) {
				return shop
					.save()
					.then(result => {
						return res.status(200).json(result);
					})
					.catch(function createShopWithNoImageError(err) {
						res.status(400).json({
							error: errorHandler.getErrorMessage(err)
						});
					});
			}

		const logoFolderPath = `${req.shop.owner.imgId}/shops/${noSpaceStrings(
			shop.name
		)}/logo`;

		const bannerFolderPath = `${
			req.shop.owner.imgId
		}/shops/${noSpaceStrings(shop.name)}/banner`;

		updateImgUpload(files.logo, shop.logo, logoFolderPath, {
			width: 180,
			height: 180
		})
			.then(data => (data ? (shop.logo = data) : null))
			.then(() =>
				updateImgUpload(files.banner, shop.banner, bannerFolderPath, {
					width: 1200,
					height: 628
				})
			)
			.then(data => (data ? (shop.banner = data) : null))
			.then(() => shop.save())
			.then(updatedShop => res.status(200).json(updatedShop))
			.catch(function shopUpdateError(err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err)
				});
			});
	});
};

const shopByID = (req, res, next, id) => {
	Shop.findById(id)
		.populate("owner", "_id name imgId")
		.exec((err, shop) => {
			if (err || !shop)
				return res.status("400").json({
					error: "shop not found"
				});
			req.shop = shop;
			next();
		});
};

const read = (req, res) => {
	return res.json(req.shop);
};

const isOwner = (req, res, next) => {
	const isOwner = req.shop && req.auth && req.shop.owner._id == req.auth._id;
	if (!isOwner) {
		return res.status("403").json({
			error: "User is not authorized"
		});
	}
	next();
};

const remove = (req, res, next) => {
	let shop = req.shop;

	deleteImages(shop.logo)
		.then(() => deleteImages(shop.banner))
		.then(function removeShopFromDb() {
			return shop.remove();
		})

		.then(function afterRemoveShop(deletedShop) {
			res.json(deletedShop);
		})
		.catch(err => {
			return res.status(400).json({
				error: errorHandler.getErrorMessage(err)
			});
		});
};

export default {
	create,
	list,
	shopByID,
	listByOwner,
	read,
	isOwner,
	update,
	remove
};
