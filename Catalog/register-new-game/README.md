# Register New Game Microservice

This microservice is responsible for registering new games in the catalog system.

## Features

- Register new games with required details
- Validate game data before saving
- Integrate with the main catalog database

## Endpoints

- `POST /games/register`  
    Register a new game with the provided information.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your chosen database)

## Setup

1. Clone the repository.
2. Install dependencies:
     ```bash
     npm install
     ```
3. Configure environment variables as needed.
4. Start the service:
     ```bash
     npm start
     ```

## Environment Variables

- `PORT`: Port number for the service
- `DB_URI`: Database connection string

## License

This project is licensed under the MIT License.