const User = require("../models/user.model");

const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await User.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "User not found" });
    }

    await usuario.destroy();
    res.json({ message: "User deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { eliminarUsuario };
