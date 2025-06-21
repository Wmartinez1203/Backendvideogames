const User = require("../models/user.model");

const modificarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, contraseña } = req.body;

  try {
    const usuario = await User.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "User not found" });
    }

    usuario.nombre = nombre ?? usuario.nombre;
    usuario.correo = correo ?? usuario.correo;
    usuario.contraseña = contraseña ?? usuario.contraseña;

    await usuario.save();

    res.json({
      message: "User updated successfully",
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { modificarUsuario };
