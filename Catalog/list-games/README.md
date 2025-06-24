# List Games Microservice

This microservice is part of the distributed video game catalog system. It is responsible for managing and providing information about available games.

## Features

- List all games in the catalog
- Retrieve details for a specific game
- Filter games by genre, platform, or other criteria

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Getting Started

### Prerequisites

- Node.js >= 16.x
- MongoDB

### Installation

```bash
git clone <repository-url>
cd list-games
npm install
```

### Running the Service

```bash
npm start
```

The service will be available at `http://localhost:3000`.

## API Endpoints

- `GET /games` - List all games
- `GET /games/:id` - Get details of a specific game
- `GET /games?genre=...&platform=...` - Filter games

## Environment Variables

- `PORT`: Port number (default: 3000)
- `MONGODB_URI`: MongoDB connection string

## License

This project is licensed under the MIT License.
