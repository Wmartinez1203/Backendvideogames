package config

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func ConnectDB() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"))

	var err error
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		panic("❌ Error connecting to database: " + err.Error())
	}

	if err = DB.Ping(); err != nil {
		panic("❌ Cannot ping DB: " + err.Error())
	}

	fmt.Println("✅ Database connection successful")
}
