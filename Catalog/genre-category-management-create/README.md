# 🎮 Genre & Category Management Microservice

This is a standalone microservice for managing **genres** and **categories** of video games.  
It is part of the **Digital Video Game Store** project, within the **Catalog** domain.

---

## 🛠️ Tech Stack

- ✅ Language: **Go**
- ✅ Framework: **net/http (standard lib)**
- ✅ Architecture: **REST**
- ✅ Database: **MySQL**
- ✅ Type: **Relational DB**
- ✅ Port: `3016`

---

## 🧱 Project Structure

```

genre-category-management/
├── Dockerfile
├── go.mod
├── go.sum
├── main.go
├── .env
├── README.md
├── handlers/
│   └── genre\_handler.go
├── models/
│   └── genre.go
├── config/
│   └── db.go
├── routes/
│   └── routes.go


## ⚙️ Environment Variables (`.env`)

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=example
DB_NAME=genre_category_db
````

> 💡 Make sure the database and table exist in MySQL.

---

## 🚀 Running Locally

```bash
go mod tidy
go run main.go
```

Visit: `http://localhost:3016/api/genres`

---

## 🐳 Docker Usage

### Build Docker image

```bash
docker build -t genre-category-management .
```

### Run Docker container

```bash
docker run -d -p 3016:3016 --env-file .env genre-category-management
```

---

## 📬 API Endpoints

### GET /api/genres

Retrieve all genres.

### POST /api/genres

Create a new genre.
**Body Example:**

```json
{
  "name": "Action"
}
```

---

## 👨‍💻 Author

Proyecto desarrollado por Nando Martinez – *Distribuited Systems Project*

---

## 🧩 Related Microservices

* `get-game-by-id`
* `edit-game`
* `list-games`
* `register-new-game`
* `genre-category-management` ✅ (you are here)
