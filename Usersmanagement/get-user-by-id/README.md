# 📘 Get User by ID Microservice Test 4

Microservice to obtain user information by ID using GraphQL.
Part of the distributed digital game sales system.

---

## 🚀 Features

* Retrieve user details by UUID
* FastAPI with Strawberry GraphQL integration
* Async PostgreSQL with SQLAlchemy ORM
* JWT authentication support
* Auto database migration on startup
* CORS enabled for all origins
* Dockerized for easy deployment

---

## 📁 Project Structure

```
get-user-by-id-ms/
├── app/
│   ├── auth.py           # JWT authentication logic
│   ├── db.py             # Database configuration and session
│   ├── main.py           # FastAPI app entry point
│   ├── models.py         # SQLAlchemy models
│   └── schema.py         # GraphQL schema and resolvers
├── .env                  # Environment variables
├── Dockerfile            # Docker container definition
├── .gitignore            # Git ignore rules
├── requirements.txt      # Python dependencies
└── README.md             # This documentation
```

---

## ⚙️ Environment Variables

Create a `.env` file with:

```env
DATABASE_URL=postgresql+asyncpg://postgres:your_password@localhost:5432/usuarios_db
JWT_SECRET=supersecretkey
```

---

## 📦 Installation & Run

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

## 📡 GraphQL API Reference

### Endpoint

```
POST /graphql
```

---

### Example Query to Get User by ID

```graphql
query {
  getUserById(id: "your-user-uuid") {
    id
    nombre
    correo
  }
}
```

---

### Headers

* `Authorization: Bearer <your_jwt_token>`

---

### Response Example

```json
{
  "data": {
    "getUserById": {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "nombre": "John Doe",
      "correo": "john@example.com"
    }
  }
}
```

---

## 🐳 Docker

Build and run container:

```bash
docker build -t get-user-by-id-ms .
docker run -p 8000:8000 --env-file .env get-user-by-id-ms
```

---

## ⚙️ Technologies

* Python 3.11
* FastAPI
* Strawberry GraphQL
* PostgreSQL
* SQLAlchemy
* JWT Authentication
* Docker

---

## 📄 License

MIT

---
