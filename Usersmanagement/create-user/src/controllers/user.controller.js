const User = require("../models/user.model");

const crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    const usuario = await User.create({ nombre, correo, contraseña });
    return res.status(201).json({ message: "Usuario creado", usuario });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { crearUsuario };
