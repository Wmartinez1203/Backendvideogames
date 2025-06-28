// config/db.config.js
require("dotenv").config();
const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,      // nombre de la base de datos
  process.env.DB_USER,      // usuario
  process.env.DB_PASSWORD,  // contraseña
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    dialect: "postgres",
    logging: console.log,
  }
);