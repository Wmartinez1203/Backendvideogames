require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db.config");
const userRoutes = require("./routes/user.routes");
const User = require("./models/user.model");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

sequelize.sync({ alter: true }) // autogenera y actualiza tablas
  .then(() => {
    console.log("Base de datos sincronizada.");
    app.listen(3000, () => {
      console.log("Microservicio Crear Usuario corriendo en puerto 3000");
    });
  })
  .catch((err) => {
    console.error("Error al sincronizar la base de datos:", err);
  });
