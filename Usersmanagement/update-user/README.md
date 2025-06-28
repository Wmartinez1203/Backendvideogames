# Update User Microservice Test 1

This microservice is responsible for updating user information within the system. It is part of the Users Management module in the distributed backend for the video games project.

## Features

- Update user profile data (name, email, etc.)
- Validate input data before updating
- Handle errors and provide meaningful responses
- Integrate with authentication and authorization mechanisms

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the microservice directory:
    ```bash
    cd Usersmanagement/update-user
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the service:
    ```bash
    npm start
    ```
2. The service will run on the configured port (default: `3000`).

## API Endpoints

| Method | Endpoint        | Description           |
|--------|----------------|-----------------------|
| PUT    | `/users/:id`   | Update user by ID     |

### Example Request

```http
PUT /users/12345
Content-Type: application/json

{
  "name": "New Name",
  "email": "newemail@example.com"
}
```

## Environment Variables

- `PORT`: Service port
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT authentication

## License

This project is licensed under the MIT License.

## Authors

- [Your Name]
- [Contributors]
