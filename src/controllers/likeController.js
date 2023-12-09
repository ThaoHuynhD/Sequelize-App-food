import { respsonseData } from "../config/response.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";
let model = initModels(sequelize);
let Op = Sequelize.Op;

export const addLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    const isLike = await model.like_res.findOne({
      where: {
        user_id,
        res_id,
      },
    });
    if (isLike) {
      respsonseData(res, "Người dùng đã like nhà hàng này trước đó.", false, 400);
      return;
    }
    let newData = {
      user_id,
      res_id,
      date_like: new Date(),
    };
    await model.like_res.create(newData);
    respsonseData(res, "Success", true, 200);
  } catch {
    respsonseData(res, "lỗi...", "", 500);
  }
};
export const getListLikeByUserAndRes = async (req, res) => {
  try {
    let { res_id } = req.params;

    let data = await model.like_res.findAll({
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
export const deleteLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    await model.like_res.destroy({
      where: {
        [Op.and]: {
          user_id,
          res_id,
        },
      },
    });
    respsonseData(res, "Success", "", 200);
  } catch {
    respsonseData(res, "Lỗi...", "", 500);
  }
};
