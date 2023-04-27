import express from "express";
import { getAllOrderList } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.route("/").get(getAllOrderList);

export default orderRouter;
