require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/auth.schema");
const resolvers = require("./resolvers/auth.resolver");
const sequelize = require("./config/db.config");

async function startServer() {
  const app = express();

  try {
    await sequelize.authenticate();
    console.log("Connection to PostgreSQL established successfully.");
    // await sequelize.sync({ alter: true }); // solo si quieres sincronizar tablas
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
