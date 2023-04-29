import express from "express";
import { login } from '../controllers/userController.js';

const routeRouter = express.Router();

routeRouter.route("/login").post(login);

export default routeRouter;
