# User Activity Service

The **User Activity Service** is a microservice designed to track and manage user activities within the gaming platform. It provides RESTful APIs for recording, retrieving, and analyzing user actions, supporting enhanced user engagement and analytics.

## Features

- Record user activities (logins, gameplay, achievements, etc.)
- Retrieve activity history by user
- Aggregate and analyze activity data
- Scalable and stateless architecture

## Technologies Used

- Language: `Node.js` / `TypeScript` (update if different)
- Framework: `Express.js` (update if different)
- Database: `MongoDB` (update if different)
- Dockerized for easy deployment

## Getting Started

### Prerequisites

- Node.js >= 16.x
- MongoDB instance
- Docker (optional)

### Installation

```bash
git clone https://github.com/your-org/user-activity-service.git
cd user-activity-service
npm install
```

### Configuration

Create a `.env` file based on `.env.example` and set the required environment variables.

### Running the Service

```bash
npm start
```

Or with Docker:

```bash
docker-compose up --build
```

## API Documentation

The service exposes the following endpoints:

- `POST /activities` — Record a new user activity
- `GET /activities/:userId` — Get activities for a specific user
- `GET /activities/summary` — Get aggregated activity data

Refer to the [API documentation](./docs/api.md) for detailed request/response formats.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## License

This project is licensed under the MIT License.
