# Auth-JWT Microservice

This microservice handles user authentication and authorization using JWT (JSON Web Tokens).

## Features

- User registration and login
- JWT-based authentication
- Token validation and refresh
- Secure password hashing

## Technologies

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcrypt

## Getting Started

### Prerequisites

- Node.js >= 14.x
- MongoDB

### Installation

```bash
git clone <repository-url>
cd auth-jwt
npm install
```

### Configuration

Create a `.env` file with the following variables:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/authdb
JWT_SECRET=your_jwt_secret
```

### Running the Service

```bash
npm start
```

## API Endpoints

- `POST /register` - Register a new user
- `POST /login` - Authenticate user and receive JWT
- `GET /profile` - Get user profile (requires JWT)
- `POST /token/refresh` - Refresh JWT token

## License

MIT
