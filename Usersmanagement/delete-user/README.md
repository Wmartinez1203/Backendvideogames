# Delete User Microservice

This microservice is responsible for handling user deletion operations within the system. It is a part of the User Management suite in the distributed backend for the video games project.

## Features

- Delete user accounts by unique identifier.
- Validation and error handling for deletion requests.
- Integration-ready with other microservices via RESTful API.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your chosen database)
- Docker (optional for containerization)

## API Endpoints

| Method | Endpoint         | Description         |
|--------|-----------------|---------------------|
| DELETE | `/users/:id`    | Delete user by ID   |

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

- `PORT`: Port number for the service.
- `DB_URI`: Database connection string.

## Error Handling

Returns appropriate HTTP status codes and error messages for invalid requests or failures.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.