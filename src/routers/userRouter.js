import express from "express";
import {
	addUser,
	getAllUserList,
	getUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route("/").get(getAllUserList).post(addUser);
userRouter.route("/:id([0-9a-f]{24})").get(getUser);

export default userRouter;
