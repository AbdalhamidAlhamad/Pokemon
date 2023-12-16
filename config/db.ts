import { Sequelize } from "sequelize";
import { config } from "dotenv";

config({ path: process.env.ENVIRONMENT === "test" ? ".env.test" : ".env" });


export const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false,
  
});

const connectToDatabase = async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};

export default connectToDatabase;
