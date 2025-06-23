const { gql } = require("apollo-server-express");
const { getGamesCollection } = require("./db");
const { ObjectId } = require("mongodb");

// Definición del esquema GraphQL
const typeDefs = gql`
  type Game {
    id: ID!
    title: String!
    genre: String     # ✅ Ya no es obligatorio
    price: Float!
    description: String
  }

  type Query {
    listGames: [Game!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    listGames: async () => {
      const collection = await getGamesCollection();
      const games = await collection.find({}).toArray();

      // Mapear _id a id y limpiar campos innecesarios como _class
      return games.map(game => ({
        id: game._id.toString(),
        title: game.title,
        genre: game.genre || null,         // ✅ Evitar undefined
        price: game.price,
        description: game.description || null,
      }));
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};