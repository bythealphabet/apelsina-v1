import express from "express";
import auth from "../controllers/auth.controller";

const router = express.Router();

router.route("/auth/signin").post(auth.signin);
router.route("/auth/signout").get(auth.signout);
router.route("/auth/google-signin").post(auth.googleSignin);
router.route("/auth/facebook-signin").post(auth.facebookSignin);
router.route("/auth/google").get(auth.googleKey);
router.route("/auth/facebook").get(auth.facebookKey);

export default router;
