# Microservice: Create User Test 2

This microservice allows you to create internal users in a PostgreSQL database. Tables are auto-generated with Sequelize.

## Technologies
- Node.js + Express
- Sequelize ORM
- PostgreSQL
- JWT (basic implementation)
- Docker-ready

## Endpoints

- `POST /api/usuarios` → Create a new user

## Environment Variables (.env)
```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=usuarios_db
DB_PORT=5432
JWT_SECRET=secure_secret_key
```

---

## 🗂️ `/src` subfolders

### ✅ `src/config/db.config.js`

```js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false
  }
);

module.exports = sequelize;
```

---

### ✅ `src/models/user.model.js`

```js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = User;
```

---

### ✅ `src/controllers/user.controller.js`

```js
const User = require("../models/user.model");

const crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    if (!nombre || !correo || !contraseña) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existente = await User.findOne({ where: { correo } });
    if (existente) {
      return res.status(409).json({ error: "Email is already registered" });
    }

    const nuevoUsuario = await User.create({ nombre, correo, contraseña });

    res.status(201).json({
      message: "User created successfully",
      usuario: {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearUsuario };
```

---

### ✅ `src/routes/user.routes.js`

```js
const express = require("express");
const router = express.Router();
const { crearUsuario } = require("../controllers/user.controller");

router.post("/usuarios", crearUsuario);

module.exports = router;
```

---

### ✅ `src/middleware/auth.js` (basic)

```js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token)
    return res.status(403).json({ error: "Token not provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verificarToken;
```

---

### ✅ `src/app.js`

```js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db.config");
const userRoutes = require("./routes/user.routes");
const User = require("./models/user.model");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

sequelize.sync({ alter: true }) // Auto-generates tables if they do not exist
  .then(() => {
    console.log("🟢 Database synchronized successfully");
    app.listen(3000, () => {
      console.log("🚀 Create User Microservice running at http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("🔴 Error synchronizing database:", err.message);
  });
```

---

### ✅ How to run the microservice

1. Install dependencies:

```bash
npm install
```

2. Make sure PostgreSQL is running with the data from `.env`.

3. Run the app:

```bash
npm start
```

4. Make a `POST` request to:

```
http://localhost:3000/api/usuarios
```

With JSON:

```json
{
  "nombre": "Carlos Mendoza",
  "correo": "carlos@dominio.com",
  "contraseña": "secreta123"
}
```

---
