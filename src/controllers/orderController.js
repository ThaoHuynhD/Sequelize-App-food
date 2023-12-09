import { respsonseData } from "../config/response.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

export const addOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount } = req.body;
    let newData = {
      user_id,
      food_id,
      amount,
      code: "",
      arr_sub_id: "",
    };
    await model.orderr.create(newData);
    respsonseData(res, "Đặt món thành công", true, 200);
  } catch {
    respsonseData(res, "lỗi...", "", 500);
  }
};
