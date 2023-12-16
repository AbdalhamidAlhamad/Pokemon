import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

interface EvolutionStageModel
  extends Model<
    InferAttributes<EvolutionStageModel>,
    InferCreationAttributes<EvolutionStageModel>
  > {
  id: CreationOptional<number>;
  name: string;
}

export default EvolutionStageModel;
