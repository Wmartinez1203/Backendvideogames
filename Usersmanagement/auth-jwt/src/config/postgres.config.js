const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PG_HOST || "localhost",
  user: process.env.PG_USER || "tu_usuario",
  password: process.env.PG_PASSWORD || "tu_password",
  database: process.env.PG_DATABASE || "tu_basedatos",
  port: process.env.PG_PORT || 5432,
});

module.exports = pool;
