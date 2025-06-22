const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    // Verificar si el correo ya está en uso
    const usuarioExistente = await User.findOne({ where: { correo } });
    if (usuarioExistente) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    // ✅ Hashear la contraseña
    const contraseñaHasheada = await bcrypt.hash(contraseña, 10);

    // Crear usuario
    const usuario = await User.create({
      nombre,
      correo,
      contraseña: contraseñaHasheada
    });

    return res.status(201).json({ message: "Usuario creado", usuario });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { crearUsuario };
