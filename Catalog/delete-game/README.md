# Delete Game Microservice

This microservice is responsible for handling the deletion of games from the catalog in the distributed video game backend system.

## Features

- Delete a game by its unique identifier.
- Validates requests and handles errors gracefully.
- Integrates with the main catalog database.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your chosen database)
- Docker (optional)

## Endpoints

| Method | Endpoint         | Description           |
|--------|-----------------|-----------------------|
| DELETE | `/games/:id`    | Deletes a game by ID  |

## Usage

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

- `DB_URI`: Database connection string.
- `PORT`: Port for the microservice.

## Example Request

```http
DELETE /games/12345
```

## License

This project is licensed under the MIT License.