# Genre Category Management Microservice

This microservice is responsible for managing genres and categories within the video game catalog system.

## Features

- Create, update, delete, and retrieve genres and categories
- RESTful API endpoints
- Data validation and error handling

## Technologies Used

- .NET / ASP.NET Core
- Entity Framework Core
- SQL Server (or your preferred database)
- Docker (optional)

## Getting Started

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server) or another supported database

### Installation

1. Clone the repository:
  ```bash
  git clone <repository-url>
  ```
2. Navigate to the project directory:
  ```bash
  cd genre-category-management-create
  ```
3. Restore dependencies:
  ```bash
  dotnet restore
  ```
4. Update the database connection string in `appsettings.json`.

5. Run database migrations:
  ```bash
  dotnet ef database update
  ```

### Running the Service

```bash
dotnet run
```

The API will be available at `http://localhost:<port>/api/genres` and `http://localhost:<port>/api/categories`.

## API Endpoints

- `GET /api/genres` - List all genres
- `POST /api/genres` - Create a new genre
- `PUT /api/genres/{id}` - Update a genre
- `DELETE /api/genres/{id}` - Delete a genre

- `GET /api/categories` - List all categories
- `POST /api/categories` - Create a new category
- `PUT /api/categories/{id}` - Update a category
- `DELETE /api/categories/{id}` - Delete a category

## License

This project is licensed under the MIT License.

## Authors

- [Your Name]
- [Contributors]
