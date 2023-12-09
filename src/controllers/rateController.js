import { respsonseData } from "../config/response.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";

let model = initModels(sequelize);

export const addRate = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;
    const checkUser = await model.rate_res.findOne({
      where: {
        user_id,
        res_id,
      },
    });
    if (checkUser) {
      respsonseData(res, "Bạn đã đánh giá nhà hàng này trước đó !", "", 400);
      return;
    }
    let newRate = {
      user_id,
      res_id,
      amount,
      date_rate: new Date(),
    };
    await model.rate_res.create(newRate);
    respsonseData(res, "Success", true, 200);
  } catch {
    respsonseData(res, "lỗi...", "", 500);
  }
};

export const getListRateByRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    let data = await model.rate_res.findAll({
      where: {
        res_id,
      },
      include: ["user", "re"],
    });
    respsonseData(res, "Thành công", data, 200);
  } catch {
    respsonseData(res, "Lỗi...", "", 500);
  }
};
