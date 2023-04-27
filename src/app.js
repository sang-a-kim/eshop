import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import Product from "./models/product.model.js";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

const api = process.env.API_URL;

app.get(`${api}/products`, async (req, res) => {
	try {
		const productList = await Product.find({});

		res.send(productList);
	} catch (e) {
		res.status(500).json({
			error: e,
			success: false
		})
	}
});

app.post(`${api}/products`, async (req, res) => {
	const { name, image, countInStock } = req.body;

	try {
		const newProduct = await Product.create({
			name,
			image,
			countInStock,
		});
		res.status(201).json(newProduct);
	} catch (e) {
		res.status(500).json({
			error: e,
			success: false,
		});
	}
});

// Connect Datatabse
mongoose
	.connect(process.env.DB_URL)
	.then(() => {
		console.log("Database conneciton is ready 🚀");
	})
	.catch((e) => console.log(e));

// Listen the app
app.listen(3000, () => {
	console.log("Server is listening on http://localhost:3000 🚀");
});
