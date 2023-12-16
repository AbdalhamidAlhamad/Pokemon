import Joi from "joi";
import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";

const Type = sequelize.define("type", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
});

export const validateType = (obj: any) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });
  return schema.validate(obj);
};

export default Type;
