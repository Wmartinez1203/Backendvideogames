const { generateToken } = require("../services/jwt.service");
const redisClient = require("../config/redis.config");
const User = require("../models/user.model");

const resolvers = {
  Mutation: {
    loginUser: async (_, { correo, contrasena }) => {
      // Intentar obtener usuario cacheado en Redis
      const cachedUser = await redisClient.hGetAll(`user:${correo}`);

      if (cachedUser && Object.keys(cachedUser).length) {
        if (cachedUser.contraseña !== contrasena) {
          throw new Error("Invalid password");
        }
        const token = generateToken({ id: cachedUser.id, correo: cachedUser.correo });
        return { token, message: "Login successful (from cache)" };
      }

      // Buscar usuario en Postgres usando Sequelize
      const user = await User.findOne({ where: { correo } });

      if (!user) {
        throw new Error("User not found");
      }

      if (user.contraseña !== contrasena) {
        throw new Error("Invalid password");
      }

      // Guardar usuario en Redis para cache
      await redisClient.hSet(`user:${correo}`, {
        id: user.id,
        correo: user.correo,
        contraseña: user.contraseña,
      });

      // Generar token
      const token = generateToken({ id: user.id, correo: user.correo });

      return { token, message: "Login successful" };
    },
  },
};

module.exports = resolvers;
