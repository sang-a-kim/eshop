import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String
  },
  color: {
    type: String
  }
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
