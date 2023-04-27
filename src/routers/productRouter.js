import express from "express";
import { getAllProduct, saveNewProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.route('/').get(getAllProduct).post(saveNewProduct);

export default productRouter