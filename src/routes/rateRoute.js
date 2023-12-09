import express from "express";
import { addRate, getListRateByRes } from "../controllers/rateController.js";

const rateRoute = express.Router();

rateRoute.post("/addRate", addRate);
rateRoute.get("/getListRate/:res_id", getListRateByRes);

export default rateRoute;
