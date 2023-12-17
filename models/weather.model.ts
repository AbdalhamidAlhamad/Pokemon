import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import WeatherModel from "../interfaces/models/weather";
import weatherData from "../data/weather.json";
const Weather = sequelize.define<WeatherModel>("weather", {
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
    const count = await Weather.count();
    if (count === 0 && process.env.ENVIRONMENT !== "test") {
      await Weather.bulkCreate(weatherData);
    }
  } catch (error) {
    console.error('Error seeding Weather data:', error);
  }
});

export default Weather;
