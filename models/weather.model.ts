import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import WeatherModel from "../interfaces/models/weather";

const Weather = sequelize.define<WeatherModel>("weather", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
});

export default Weather;
