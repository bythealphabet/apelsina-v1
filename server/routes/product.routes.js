import express from "express";
import authCtrl from "../controllers/auth.controller";
import shopCtrl from "../controllers/shop.controller";
import productCtrl from "../controllers/product.controller";

const router = express.Router();

router
	.route("/api/product/:shopId/:productId")
	.put(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.update)
	.delete(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.remove);

router.route("/api/products").get(productCtrl.list);

router.route("/api/products/categories").get(productCtrl.listCategories);
router.route("/api/products/latest").get(productCtrl.listLatest);
router.route("/api/products/:productId").get(productCtrl.read);

router.route("/api/products/photo/:productId").get(productCtrl.photo);

router.route("/api/products/related/:productId").get(productCtrl.listRelated);

router
	.route("/api/products/by/:shopId")
	.get(productCtrl.listByShop)
	.post(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.create);

router.param("shopId", shopCtrl.shopByID);
router.param("productId", productCtrl.productByID);

export default router;
