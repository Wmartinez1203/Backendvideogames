const express = require("express");
const router = express.Router();
const { eliminarUsuario } = require("../controllers/user.controller");
const verificarToken = require("../middleware/auth");

router.delete("/usuarios/delete/:id", eliminarUsuario);

module.exports = router;
