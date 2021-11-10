import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import config from "../config/config";
import morgan from "morgan";

import devBundle from "./../config/devBundle";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import shopRoutes from "./routes/shop.routes";
import productRoutes from "./routes/product.routes";

import template from "./../template";

const app = express();
const development = process.env.NODE_ENV === "development";

if (development) {
	devBundle.compile(app);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", shopRoutes);
app.use("/", productRoutes);

app.get("*", (req, res, next) => {
	res.status(200).send(template(development));
});

export default app;