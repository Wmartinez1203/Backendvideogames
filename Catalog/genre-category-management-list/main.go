package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"genre-category-management/config"
	"genre-category-management/routes"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("❌ Error loading .env file")
	}

	config.ConnectDB()

	port := os.Getenv("APP_PORT")
	router := routes.SetupRouter()

	fmt.Println("🚀 Server running on port", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
