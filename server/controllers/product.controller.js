import path from "path";
import fs from "fs";
import errorHandler from "../helpers/dbErrorHandler";
import Product from "../models/product.model";
import formidable from "formidable";

import _ from "lodash";
import { uploadImages, deleteImages } from "../aws/aws";

const noSpaceStrings = (string) => string.replace(/\s/g, "");

const create = (req, res, next) => {
  const form = new formidable.IncomingForm();

  form.multiples = true;
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Image could not be uploaded",
      });
    }

    let product = new Product(fields);
    product.shop = req.shop;

    const photosName = Object.values(files);

    if (photosName.length == 0) {
      return product
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

    const allPhotos = photosName.map((photo, index) => {
      if (index == 0) {
        return uploadImages(
          {
            filePath: photo.path,
            path: `${req.shop.owner.imgId}/shops/${noSpaceStrings(
              req.shop.name
            )}/products/${noSpaceStrings(product.name)}`,
          },
          { width: 800 }
        ).then((data) => {
          product.thumbnail = data;
          product.photos.push(data);
          return;
        });
      }

      return uploadImages(
        {
          filePath: photo.path,
          path: `${req.shop.owner.imgId}/shops/${noSpaceStrings(
            req.shop.name
          )}/products/${noSpaceStrings(product.name)}`,
        },
        { width: 800 }
      ).then((data) => product.photos.push(data));
    });

    Promise.all(allPhotos)
      .then(() => {
        return product.save();
      })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err),
        });
      });
  });
};

const update = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Photo could not be uploaded",
      });
    }

    let product = req.product;

    product = _.extend(product, fields);
    product.updated = Date.now();

    const photosName = Object.values(files);

    if (fields.removedImages) {
      const removedImagesArray = fields.removedImages.split(",");
      const updatedArray = product.photos;

      const filteredArray = updatedArray.filter((name, index) => {
        return !removedImagesArray[index];
      });
      product.photos = filteredArray;
      product.thumbnail = product.photos[0];

      Promise.all(removedImagesArray.map((i) => deleteImages(i)));
    }

    if (photosName.length == 0) {
      return product
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

    const allPhotos = photosName.map((photo, index) => {
      return uploadImages(
        {
          filePath: photo.path,
          path: `${req.shop.owner.imgId}/shops/${noSpaceStrings(
            req.shop.name
          )}/products/${noSpaceStrings(product.name)}`,
        },
        { width: 800 }
      ).then((data) => product.photos.push(data));
    });

    Promise.all(allPhotos)
      .then(() => (product.thumbnail = product.photos[0]))
      .then(() => {
        return product.save();
      })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err),
        });
      });
  });
};

const listByShop = (req, res) => {
  Product.find({ shop: req.shop._id }, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(products);
  })
    .populate("shop", "_id name")
    .select("-image");
};

const productByID = (req, res, next, id) => {
  Product.findById(id)
    .populate("shop", "_id name logo")
    .exec((err, product) => {
      if (err || !product)
        return res.status("400").json({
          error: "product not found",
        });
      req.product = product;
      next();
    });
};

const read = (req, res) => {
  req.product.image = undefined;
  return res.json(req.product);
};

const remove = (req, res, next) => {
  let product = req.product;

  deleteImages(product.photo)
    .then(function removeProductFromDb() {
      return product.remove();
    })
    .then(function afterRemovingProduct(deletedproduct) {
      res.json(deletedproduct);
    })
    .catch((err) => {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    });
};

const listLatest = (req, res) => {
  Product.find({})
    .sort("-created")
    .limit(5)
    .populate("shop", "_id name")
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err),
        });
      }
      res.json(products);
    });
};

const listRelated = (req, res) => {
  Product.find({ _id: { $ne: req.product }, category: req.product.category })
    .limit(5)
    .populate("shop", "_id name")
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err),
        });
      }
      res.json(products);
    });
};

const listCategories = (req, res) => {
  Product.distinct("category", {}, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(products);
  });
};

const list = (req, res) => {
  const query = {};
  if (req.query.search)
    query.name = { $regex: req.query.search, $options: "i" };
  if (req.query.category && req.query.category != "All")
    query.category = req.query.category;
  Product.find(query, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(products);
  })
    .populate("shop", "_id name")
    .select("-image");
};

const photo = (req, res, next) => {
  res.set("Content-Type", req.product.image.contentType);
  return res.send(req.product.image.data);
};

export default {
  create,
  listByShop,
  photo,
  productByID,
  listLatest,
  listRelated,
  read,
  update,
  remove,
  list,
  listCategories,
};
