import Category from "../models/category.js";

export const getAllCategoryList = async (req, res) => {
	const categoryList = await Category.find({});

	if (!categoryList) {
		res.status(500).json({
			success: false,
		});
	}

	res.status(200).send(categoryList);
};

export const getCategory = async (req, res) => {
	const { id } = req.params;

	const category = await Category.findById(id);

	if (!category) {
		res.status(500).json({
			success: false,
		});
	}

	res.status(200).send(category);
};

export const updateCategory = async (req, res) => {
	const {
		params: { id },
		body: { name, icon, color },
	} = req;

	console.log(name, icon, color);

	const category = await Category.findByIdAndUpdate(
		id,
		{
			name,
			icon,
			color,
		},
		{ new: true }
	);

	if (!category) {
		res.status(404).json({
			success: false,
			message: "Category is not found",
		});
	}

	res.status(200).send(category);
};

export const addCategory = async (req, res) => {
	const { name, icon, color } = req.body;

	const newCategory = await Category.create({
		name,
		icon,
		color,
	});

	if (!newCategory) {
		res.status(404).send("Category cannot be created!");
	}

	res.send(newCategory);
};

export const deleteCategory = async (req, res) => {
	const { id } = req.params;

	try {
		const category = await Category.findByIdAndDelete(id);

		if (!category) {
			res.status(404).send("Category is not found!");
		}

		res.status(200).json({
			success: true,
			message: "The category is deleted",
		});
	} catch (e) {
		res.status(500).json({
			success: false,
			error: e,
		});
	}
};
