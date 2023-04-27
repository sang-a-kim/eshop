import express from "express";
import { getAllUserList } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get(getAllUserList);

export default userRouter;
