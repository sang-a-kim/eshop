import express from "express";
import { addUser, getAllUserList } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route('/').get(getAllUserList).post(addUser);

export default userRouter;
