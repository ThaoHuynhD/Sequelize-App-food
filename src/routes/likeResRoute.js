import express from "express";
import {
  addLike,
  deleteLike,
  getListLikeByUserAndRes,
} from "../controllers/likeController.js";

const likeResRoute = express.Router();

likeResRoute.post("/addLike", addLike);
likeResRoute.get("/getListLike/:res_id", getListLikeByUserAndRes);
likeResRoute.delete("/deleleLike", deleteLike);
export default likeResRoute;
