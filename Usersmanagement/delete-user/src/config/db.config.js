// Usersmanagement/delete-user/config/db.config.js
require("dotenv").config();
const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    dialect: "postgres",
    logging: console.log,
  }
);