import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: "Name is required"
		},
		description: {
			type: String,
			trim: true
		},
		photos: [{type:String, trim: true}],
		thumbnail:{
			type: String,
			trim: true
		},
		category: {
			type: String,
			required: "Select a Category"
		},
		quantity: {
			type: Number,
			required: "Quantity is required"
		},
		price: {
			type: Number,
			required: "Price is required"
		},
		shop: {
			type: mongoose.Schema.ObjectId,
			ref: "Shop"
		}
	},
	{ timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
