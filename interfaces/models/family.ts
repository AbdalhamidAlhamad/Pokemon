import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

interface FamilyModel
  extends Model<
    InferAttributes<FamilyModel>,
    InferCreationAttributes<FamilyModel>
  > {
  id: CreationOptional<number>;
  name: string;
}

export default FamilyModel;
