import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {
	const product = {
		id: 1,
		name: "hair dresser",
		image: "some_url",
	};

	res.send(product);
});

app.post(`${api}/products`, (req, res) => {
	const newProduct = req.body;
	res.send(newProduct);
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
