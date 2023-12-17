import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

interface TypeModel
  extends Model<
    InferAttributes<TypeModel>,
    InferCreationAttributes<TypeModel>
  > {
  id: CreationOptional<number>;
  name: string;
}

export default TypeModel;
