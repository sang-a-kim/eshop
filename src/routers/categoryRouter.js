import express from "express";
import { getAllCategoryList } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.route("/").get(getAllCategoryList);

export default categoryRouter;
