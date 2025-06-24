# Edit Game Microservice

This microservice is part of the Video Game Catalog system. It is responsible for handling all operations related to editing existing game entries in the catalog.

## Features

- Update game details (title, description, genre, etc.)
- Validate input data before updating
- Handle partial updates
- Return appropriate status codes and error messages

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- Docker (optional)

## Endpoints

| Method | Endpoint         | Description           |
|--------|-----------------|-----------------------|
| PUT    | `/games/:id`    | Update a game by ID   |
| PATCH  | `/games/:id`    | Partially update game |

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `PORT`: Port number for the service

## Running Locally

```bash
npm install
npm start
```

## Docker

```bash
docker build -t edit-game-service .
docker run -p 3000:3000 --env-file .env edit-game-service
```

## License

MIT