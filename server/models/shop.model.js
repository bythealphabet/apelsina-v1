import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: "Name is required",
		},
		description: {
			type: String,
			trim: true,
		},
		logo: {
			type: String,
			trim: true,
		},
		banner: {
			type: String,
			trim: true,
		},
		owner: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Shop", ShopSchema);
