# Genre Category Management Microservice

This microservice is responsible for managing genre categories within the video game catalog system.

## Features

- Create, update, and delete genre categories
- Retrieve a list of all genre categories
- Search for genre categories by name or ID

## Technologies Used

- .NET / ASP.NET Core
- Entity Framework Core
- SQL Server (or your preferred database)
- RESTful API

## Getting Started

1. **Clone the repository:**
  ```bash
  git clone <repository-url>
  ```
2. **Navigate to the project directory:**
  ```bash
  cd Catalog/genre-category-management-list
  ```
3. **Configure the database connection** in `appsettings.json`.
4. **Run database migrations:**
  ```bash
  dotnet ef database update
  ```
5. **Start the microservice:**
  ```bash
  dotnet run
  ```

## API Endpoints

- `GET /api/genres` - List all genre categories
- `GET /api/genres/{id}` - Get a genre category by ID
- `POST /api/genres` - Create a new genre category
- `PUT /api/genres/{id}` - Update an existing genre category
- `DELETE /api/genres/{id}` - Delete a genre category

## Environment Variables

- `ConnectionStrings:DefaultConnection` - Database connection string

## License

This project is licensed under the MIT License.
