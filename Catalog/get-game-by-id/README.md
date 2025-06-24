# Get Game By ID Microservice

This microservice provides an API endpoint to retrieve detailed information about a video game by its unique identifier.

## Features

- Fetch game details by ID
- Returns data in JSON format
- Error handling for invalid or non-existent IDs

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your chosen database)

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd Catalog/get-game-by-id
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

Start the microservice:
```bash
npm start
```

### API Endpoint

- **GET** `/games/:id`

#### Example Request

```
GET /games/12345
```

#### Example Response

```json
{
  "id": "12345",
  "title": "Game Title",
  "genre": "Action",
  "releaseDate": "2023-01-01",
  "developer": "Developer Name"
}
```

## Environment Variables

- `PORT`: Port number for the server (default: 3000)
- `DB_URI`: Database connection string

## License

This project is licensed under the MIT License.