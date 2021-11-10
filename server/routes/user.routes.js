import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";
import { userCreateValidator } from "../validators/auth";
import { runValidation } from "../validators";

const router = express.Router();

router
	.route("/api/users")
	.post(userCreateValidator, runValidation, userCtrl.create)
	.get(userCtrl.list);

router
	.route("/api/users/:userId")
	.get(authCtrl.requireSignin, userCtrl.read)
	.put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
	.delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

router.route("/api/confirmation").post(userCtrl.confirmation);
router.route("/api/forgot-password").put(userCtrl.forgotPassword);
router.route("/api/reset-password").put(userCtrl.resetPassword);

router.param("userId", userCtrl.userByID);

export default router;
