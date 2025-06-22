package main

import (
	"user-activity-service/config"
	"user-activity-service/db"
	"user-activity-service/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	cfg := config.Load()

	db.InitCassandra(cfg.CassandraHost, cfg.Keyspace)

	r := gin.Default()
	routes.SetupRoutes(r)
	r.Run(":3011")
}
