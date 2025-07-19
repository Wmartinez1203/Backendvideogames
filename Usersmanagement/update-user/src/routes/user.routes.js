const express = require("express");
const router = express.Router();
const { modificarUsuario } = require("../controllers/user.controller");

router.put("/usuarios/update/:id", modificarUsuario);

module.exports = router;
