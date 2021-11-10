import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";
import shopCtrl from "../controllers/shop.controller.js";

const router = express.Router();

router.route("/api/shops").get(shopCtrl.list);

router
	.route("/api/shop/:shopId")
	.get(shopCtrl.read)
	.put(authCtrl.requireSignin, shopCtrl.isOwner, shopCtrl.update)
	.delete(authCtrl.requireSignin, shopCtrl.isOwner, shopCtrl.remove)

router
	.route("/api/shops/by/:userId")
	.get(
		authCtrl.requireSignin,
		authCtrl.hasAuthorization,
		shopCtrl.listByOwner
	)
	.post(
		authCtrl.requireSignin,
		authCtrl.hasAuthorization,
		userCtrl.isSeller,
		shopCtrl.create
	);

router.param("userId", userCtrl.userByID);
router.param("shopId", shopCtrl.shopByID);

export default router;
