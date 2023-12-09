import express from "express";
import likeResRoute from "./likeResRoute.js";
import rateRoute from "./rateRoute.js";
import orderRoute from "./orderRoute.js";

const rootRoute = express.Router();
rootRoute.use("/like", likeResRoute);
rootRoute.use("/rate", rateRoute);
rootRoute.use("/order",orderRoute)

export default rootRoute;
