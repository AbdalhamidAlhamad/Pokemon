import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import FamilyModel from "../interfaces/models/family";
import familiesData from "../data/families.json";
const Family = sequelize.define<FamilyModel>("family", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
});

sequelize.addHook("afterBulkSync", async () => {
  try {
    const count = await Family.count();
    if (count === 0 && process.env.ENVIRONMENT !== "test") {
      await Family.bulkCreate(familiesData);
    }
  } catch (error) {
    console.error("Error seeding Family data:", error);
  }
});
export default Family;
