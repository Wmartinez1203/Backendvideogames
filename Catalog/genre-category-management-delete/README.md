# Genre Category Management Delete Microservice

This microservice is responsible for handling the deletion of genre-category associations in the video game catalog system.

## Features

- Delete associations between genres and categories.
- Ensures data consistency and integrity.
- Provides RESTful API endpoints for deletion operations.

## Technologies Used

- .NET Core / ASP.NET Core
- Entity Framework Core
- SQL Server (or your preferred database)
- Docker (optional)

## Endpoints

| Method | Endpoint                      | Description                       |
|--------|-------------------------------|-----------------------------------|
| DELETE | `/api/genre-category/{id}`    | Deletes a genre-category relation |

## Setup

1. Clone the repository.
2. Restore dependencies:  
  `dotnet restore`
3. Update database connection string in `appsettings.json`.
4. Run migrations (if needed):  
  `dotnet ef database update`
5. Start the service:  
  `dotnet run`

## Environment Variables

- `ConnectionStrings:DefaultConnection` - Database connection string.

## Usage

Send a DELETE request to the appropriate endpoint with the ID of the genre-category association to remove.

## License

This project is licensed under the MIT License.
