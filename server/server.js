import app from "./express";
import mongoose from "mongoose";
import config from "../config/config";
import dotenv from 'dotenv'

dotenv.config()

mongoose
	.connect(config.mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(result => {
		app.listen(config.port);
		console.log("Server is listening on PORT:", config.port);
	})
	.catch(err => {
		console.log("Error Mongoose Connection:", err);
	});
