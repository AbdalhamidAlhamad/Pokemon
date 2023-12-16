import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import FamilyModel from "../interfaces/models/family";

const Family = sequelize.define<FamilyModel>("family", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
});

export default Family;
