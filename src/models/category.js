import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({});

const Category = mongoose.model("Category", categorySchema);

export default Category;
