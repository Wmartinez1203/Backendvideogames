const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db.config");
const userRoutes = require("./routes/user.routes");
const User = require("./models/user.model");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced");
    app.listen(3002, () => {
      console.log("🧹 Delete User Microservice running on http://localhost:3002");
    });
  })
  .catch((err) => {
    console.error("❌ Error syncing database:", err.message);
  });
