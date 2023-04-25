import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from "express";

dotenv.config()

const app = express();

const api = process.env.API_URL

app.listen(3000, () => {
	console.log("Server is listening on http://localhost:3000");
});

app.get('/', (req, res) => res.send('First'))