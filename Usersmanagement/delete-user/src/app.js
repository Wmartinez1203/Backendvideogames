// Usersmanagement/delete-user/src/app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db.config");
const User = require("./models/user.model"); // tu modelo Sequelize

const app = express();
app.use(cors());
app.use(express.json());

// DELETE /api/usuarios/:id
app.delete("/api/usuarios/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const rows = await User.destroy({ where: { id } });
    if (rows) {
      return res.json({ message: "Usuario eliminado", id });
    } else {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    console.error("Error deleting user:", err);
    return res.status(500).json({ message: "Error interno" });
  }
});

sequelize.sync()
  .then(() => {
    console.log("✅ Database synced");
    const port = parseInt(process.env.PORT, 10) || 3002;
    app.listen(port, () => {
      console.log(`Delete User Microservice running on http://0.0.0.0:${port}`);
    });
  })
  .catch(err => {
    console.error("Error syncing database:", err);
    process.exit(1);
  });
