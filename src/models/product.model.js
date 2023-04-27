import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
	name: String,
	image: String,
	countInStock: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
