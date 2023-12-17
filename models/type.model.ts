import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import TypeModel from "../interfaces/models/types";
import typesData from "../data/types.json";
const Type = sequelize.define<TypeModel>("type", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
});


sequelize.addHook('afterBulkSync', async () => {
  try {
    const count = await Type.count();
    if (count === 0 && process.env.NODE_ENV !== "test") {
      await Type.bulkCreate(typesData);
    }
  }
  catch (error) {
    console.error('Error seeding Type data:', error);
  }
  
});

export default Type;
