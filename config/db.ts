import { Sequelize } from "sequelize";
import { config } from "dotenv";

config({ path: process.env.NODE_ENV === "test" ? ".env.test" : ".env" });


export const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false,
  
});