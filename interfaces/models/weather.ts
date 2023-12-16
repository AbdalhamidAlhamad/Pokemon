import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

interface WeatherModel
  extends Model<
    InferAttributes<WeatherModel>,
    InferCreationAttributes<WeatherModel>
  > {
  id: CreationOptional<number>;
  name: string;
}

export default WeatherModel;
