import express from "express";
import morgan from "morgan";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import routeRouter from "./routers/routeRouter.js";

const api = process.env.API_URL;

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

// Routers
app.use(`${api}/`, routeRouter);
app.use(`${api}/products`, productRouter);
app.use(`${api}/users`, userRouter);
app.use(`${api}/orders`, orderRouter);
app.use(`${api}/categories`, categoryRouter);

export default app;
