# Password Change Microservice

This microservice handles password change operations for user accounts in the system. It is designed to be secure, scalable, and easy to integrate with other services.

## Features

- Secure password update functionality
- Validation of current and new passwords
- Integration-ready RESTful API endpoints
- Error handling and informative responses
- Logging for audit and debugging

## Technologies Used

- Node.js / Express (or specify your stack)
- JWT for authentication
- bcrypt for password hashing
- MongoDB / PostgreSQL (or your database)

## API Endpoints

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| POST   | `/change-password` | Change user's password     |

### Request Example

```json
{
    "userId": "string",
    "currentPassword": "string",
    "newPassword": "string"
}
```

### Response Example

```json
{
    "message": "Password updated successfully."
}
```

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Configure environment variables.
4. Start the service: `npm start`

## Environment Variables

- `DB_URI` - Database connection string
- `JWT_SECRET` - Secret for JWT verification
- `PORT` - Service port

## Security Considerations

- Passwords are never stored or logged in plain text.
- All endpoints require authentication.
- Rate limiting and brute-force protection recommended.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact the development team.