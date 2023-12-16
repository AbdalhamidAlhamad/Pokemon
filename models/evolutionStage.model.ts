import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import EvolutionStageModel from "../interfaces/models/evolutionStage";

const EvolutionStage = sequelize.define<EvolutionStageModel>("evolutionStage", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
});

export default EvolutionStage;
