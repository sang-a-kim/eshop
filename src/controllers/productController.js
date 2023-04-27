import Category from "../models/category.js";
import Product from "../models/product.js";
import mongoose from "mongoose";

export const getAllProduct = async (req, res) => {
	const {
		query: { categories },
	} = req;

	const filter = categories ? { category: categories.split(",") } : {};

	try {
		const productList = await Product.find(filter)  
			.select("name image id category")
			.populate("category");

		res.send(productList);
	} catch (e) {
		res.status(500).json({
			error: e,
			success: false,
		});
	}
};

export const getProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id).populate("category");
		res.send(product);
	} catch (e) {
		res.status(500).json({
			error: e,
			success: false,
		});
	}
};

export const saveNewProduct = async (req, res) => {
	const {
		name,
		description,
		richDescription,
		image,
		images,
		brand,
		price,
		category,
		countInStock,
		rating,
		numReviews,
		isFeatured,
		dateCreated,
	} = req.body;

	const isCategory = await Category.findById(category);
	if (!isCategory) return res.status(400).send("Invalid Category");

	try {
		const newProduct = await Product.create({
			name,
			description,
			richDescription,
			image,
			images,
			brand,
			price,
			category,
			countInStock,
			rating,
			numReviews,
			isFeatured,
			dateCreated,
		});
    console.log(newProduct.toObject())
		res.status(201).json(newProduct);
	} catch (e) {
		res.status(500).json({
			error: e,
			success: false,
		});
	}
};

export const updateProduct = async (req, res) => {
	const {
		params: { id },
		body: {
			name,
			description,
			richDescription,
			image,
			images,
			brand,
			price,
			category,
			countInStock,
			rating,
			numReviews,
			isFeatured,
			dateCreated,
		},
	} = req;

	if (!mongoose.isValidObjectId(id)) {
		return res.status(400).send("Invalid Id");
	}

	const isCategory = await Category.findById(category);
	if (!isCategory) return res.status(400).send("Invalid Category");

	try {
		const productUpdated = await Product.findByIdAndUpdate(
			id,
			{
				name,
				description,
				richDescription,
				image,
				images,
				brand,
				price,
				category,
				countInStock,
				rating,
				numReviews,
				isFeatured,
				dateCreated,
			},
			{ new: true }
		);

		if (!productUpdated) {
			res.status(404).json({
				success: false,
				message: "Product is not found",
			});
		}

		res.status(200).send(productUpdated);
	} catch (e) {
		res.status(500).json({
			success: false,
			error: e,
		});
	}
};

export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.isValidObjectId(id)) {
		return res.status(400).send("Invalid Id");
	}

	try {
		const prodcut = await Product.findByIdAndDelete(id);
		if (!prodcut) {
			res.status(404).json({
				success: false,
				message: "Product is not foud",
			});
		}

		res.status(200).send("Product is deleted");
	} catch (e) {
		res.status(500).json({
			success: false,
			error: e,
		});
	}
};

export const getAllProductCount = async (req, res) => {
	try {
		const count = await Product.estimatedDocumentCount();
		res.status(200).send(count);
	} catch (e) {
		res.status(500).json({
			success: false,
			error: e,
		});
	}
};

export const getFeaturedProducts = async (req, res) => {
	const count = req.params.count ?? 0;

	try {
		const featuredProductList = await Product.find({
			isFeatured: true,
		}).limit(count);
		res.status(200).send(featuredProductList);
	} catch (e) {
		res.status(500).json({
			success: false,
			error: e,
		});
	}
};
