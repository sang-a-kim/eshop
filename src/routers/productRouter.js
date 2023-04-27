import express from "express";
import { deleteProduct, getAllProduct, getAllProductCount, getFeaturedProducts, getProduct, saveNewProduct, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.route('/').get(getAllProduct).post(saveNewProduct);
productRouter.route('/:id([0-9a-f]{24})').get(getProduct).put(updateProduct).delete(deleteProduct);
productRouter.route('/count').get(getAllProductCount);
productRouter.route('/featured/:count').get(getFeaturedProducts);

export default productRouter