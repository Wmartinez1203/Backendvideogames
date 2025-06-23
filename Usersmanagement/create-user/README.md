# Microservicio: Crear Usuario Test 3

Este microservicio permite crear usuarios internos en la base de datos PostgreSQL. Las tablas se autogeneran con Sequelize.

## Tecnologías
- Node.js + Express
- Sequelize ORM
- PostgreSQL
- JWT (implementación básica)
- Docker-ready

## Endpoints

- `POST /api/usuarios` → Crear un nuevo usuario

## Variables de entorno (.env)
```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_clave
DB_NAME=usuarios_db
DB_PORT=5432
JWT_SECRET=clave_secreta_segura
````

````

---

## 🗂️ `/src` subcarpetas

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
````

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
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const existente = await User.findOne({ where: { correo } });
    if (existente) {
      return res.status(409).json({ error: "El correo ya está registrado" });
    }

    const nuevoUsuario = await User.create({ nombre, correo, contraseña });

    res.status(201).json({
      message: "Usuario creado exitosamente",
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

### ✅ `src/middleware/auth.js` (básico)

```js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token)
    return res.status(403).json({ error: "Token no proporcionado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
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

sequelize.sync({ alter: true }) // Autogenera tablas si no existen
  .then(() => {
    console.log("🟢 Base de datos sincronizada correctamente");
    app.listen(3000, () => {
      console.log("🚀 Microservicio Crear Usuario corriendo en http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("🔴 Error al sincronizar base de datos:", err.message);
  });
```

---

### ✅ Cómo correr el microservicio

1. Instala dependencias:

```bash
npm install
```

2. Asegúrate de tener PostgreSQL corriendo con los datos de `.env`.

3. Corre la app:

```bash
npm start
```

4. Haz un `POST` a:

```
http://localhost:3000/api/usuarios
```

Con JSON:

```json
{
  "nombre": "Carlos Mendoza",
  "correo": "carlos@dominio.com",
  "contraseña": "secreta123"
}
```

---

