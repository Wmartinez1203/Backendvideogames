package routes

import (
	"net/http"
	"time"
	"user-activity-service/db"
	"user-activity-service/events"

	"github.com/gin-gonic/gin"
)

// GET /history/:user_id
func GetUserHistory(c *gin.Context) {
	userID := c.Param("user_id")

	var events []db.UserEvent

	iter := db.Session.Query(`SELECT user_id, action, timestamp FROM user_activity WHERE user_id = ?`, userID).Iter()

	var ue db.UserEvent
	var ts time.Time

	for iter.Scan(&ue.UserID, &ue.Action, &ts) {
		ue.Timestamp = ts
		events = append(events, ue)
	}

	if err := iter.Close(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error closing iterator"})
		return
	}

	if len(events) == 0 {
		c.JSON(http.StatusNotFound, gin.H{"message": "No events found for user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user_id": userID, "events": events})
}

// POST /events
func PostEvent(c *gin.Context) {
	var event db.UserEvent
	if err := c.ShouldBindJSON(&event); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}

	events.HandleEvent(event)
	c.JSON(http.StatusCreated, gin.H{"message": "Event recorded"})
}

// SetupRoutes setups API endpoints
func SetupRoutes(router *gin.Engine) {
	router.GET("/history/:user_id", GetUserHistory)
	router.POST("/events", PostEvent)
}
