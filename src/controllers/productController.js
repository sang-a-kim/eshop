import Product from '../models/product.js';

export const getAllProduct = async (req, res) => {
	try {
		const productList = await Product.find({});

		res.send(productList);
	} catch (e) {
		res.status(500).json({
			error: e,
			success: false,
		});
	}
};

export const saveNewProduct = async (req, res) => {
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
};
