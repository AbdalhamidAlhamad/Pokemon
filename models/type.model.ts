import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import TypeModel from "../interfaces/models/types";

const Type = sequelize.define<TypeModel>("type", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
});


export default Type;
