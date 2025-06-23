package handlers

import (
	"encoding/json"
	"net/http"

	"genre-category-management/config"
	"genre-category-management/models"
)

func GetGenres(w http.ResponseWriter, r *http.Request) {
	rows, err := config.DB.Query("SELECT id, name FROM genres")
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	defer rows.Close()

	var genres []models.Genre
	for rows.Next() {
		var g models.Genre
		if err := rows.Scan(&g.ID, &g.Name); err != nil {
			http.Error(w, err.Error(), 500)
			return
		}
		genres = append(genres, g)
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(genres)
}
