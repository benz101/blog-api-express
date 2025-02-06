import { Sequelize } from "sequelize-typescript";
import { Article } from "../models/Article";

export const sequelize = new Sequelize({
  database: 'blog_db',
  username: 'root',
  password:'',
  host: 'localhost',
  dialect: 'mysql',
  models: [Article],
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await sequelize.sync({ alter: true }); // Update schema if needed
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};
