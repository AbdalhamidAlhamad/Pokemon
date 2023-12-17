import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import EvolutionStageModel from "../interfaces/models/evolutionStage";
import stagesData from "../data/stages.json";
const EvolutionStage = sequelize.define<EvolutionStageModel>("evolutionStage", {
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
    const count = await EvolutionStage.count();
    if (count === 0 && process.env.ENVIRONMENT !== "test") {
      await EvolutionStage.bulkCreate(stagesData);
    }
  } catch (error) {
    console.error("Error seeding EvolutionStage data:", error);
  }
});
export default EvolutionStage;
