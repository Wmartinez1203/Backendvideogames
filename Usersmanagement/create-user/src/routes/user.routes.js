const express = require("express");
const router = express.Router();
const { crearUsuario } = require("../controllers/user.controller");

router.post("/usuarios", crearUsuario);

module.exports = router;
