import mongoose from "mongoose";
import "dotenv/config"

// Connect Datatabse
mongoose
	.connect(process.env.DB_URL)
	.then(() => console.log("Database connection is ready 🚀"))
	.catch((e) => console.log("Database connection has error ❌", e));
