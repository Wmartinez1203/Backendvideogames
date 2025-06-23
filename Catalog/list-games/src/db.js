const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("game_catalog_db");
    console.log("Connected to MongoDB");
  }
  return db;
}

async function getGamesCollection() {
  const database = await connectDB();
  return database.collection("games");  // atención: aquí se usa "games"
}

module.exports = {
  getGamesCollection,
};
