package utils

import (
	"fmt"
	"time"
)

func LogEvent(userID string, action string) {
	fmt.Printf("[EVENT] [%s] UserID: %s | Action: %s\n",
		time.Now().Format(time.RFC3339), userID, action)
}
