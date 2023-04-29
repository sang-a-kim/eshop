import User from "../models/user.js";
import bcrypt from "bcrypt";

export const getAllUserList = async (req, res) => {
	const userList = await User.find({});

	if (!userList) {
		res.status(500).json({
			success: false,
		});
	}

	res.send(userList);
};

export const addUser = async (req, res) => {
	const saltRounds = 10;
	const {
		name,
		email,
		password,
		phone,
		isAdmin,
		street,
		apartment,
		zip,
		city,
		country,
	} = req.body;

	try {
		const newUser = await User.create({
			name,
			email,
			passwordHash: bcrypt.hashSync(password, saltRounds),
			phone,
			isAdmin,
			street,
			apartment,
			zip,
			city,
			country,
		});

		if (!newUser) {
			res.status(404).send("User cannot be created!");
		}

		res.send(newUser);
	} catch (e) {
		res.status(500).json({
			error: e,
			success: false,
		});
	}
};
