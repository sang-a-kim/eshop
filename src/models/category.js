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

categorySchema.virtual("id").get(function () {
	return this._id.toHexString();
});
categorySchema.set("toJson", { virtuals: true });

const Category = mongoose.model("Category", categorySchema);

export default Category;
