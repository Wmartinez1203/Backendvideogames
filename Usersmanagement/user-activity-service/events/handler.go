package events

import (
	"log"
	"time"
	"user-activity-service/db"
)

func HandleEvent(event db.UserEvent) {
	if event.Timestamp.IsZero() {
		event.Timestamp = time.Now()
	}

	err := db.Session.Query(`INSERT INTO user_activity (user_id, action, timestamp) VALUES (?, ?, ?)`,
		event.UserID, event.Action, event.Timestamp).Exec()
	if err != nil {
		log.Printf("Error inserting event: %v", err)
		return
	}

	log.Printf("[EVENT] [%s] UserID: %s | Action: %s", event.Timestamp.Format(time.RFC3339), event.UserID, event.Action)
}
