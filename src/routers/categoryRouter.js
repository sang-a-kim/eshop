import express from "express";
import { addCategory, deleteCategory, getAllCategoryList, getCategory, updateCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.route("/").get(getAllCategoryList).post(addCategory);
categoryRouter.route("/:id").get(getCategory).delete(deleteCategory).put(updateCategory);

export default categoryRouter;
