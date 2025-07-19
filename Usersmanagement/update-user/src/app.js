// app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db.config");
const userRoutes = require("./routes/user.routes");
const User = require("./models/user.model");

const app = express();

// ✅ CORS personalizado
const corsOptions = {
  origin: '*', // Cambia a un dominio específico si lo necesitas
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Authorization', 'Content-Type', 'Accept'],
};
app.use(cors(corsOptions));

// ✅ Permitir que Express responda a solicitudes OPTIONS
app.options('*', cors(corsOptions));

// Middleware para JSON
app.use(express.json());

// ✅ Rutas
app.use("/api", userRoutes);

// Conexión y arranque del servidor
sequelize.sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced");
    const port = parseInt(process.env.PORT, 10) || 3001;
    app.listen(port, () => {
      console.log(`✅ Update User Microservice running on http://0.0.0.0:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error syncing database:", err.message);
    process.exit(1);
  });
