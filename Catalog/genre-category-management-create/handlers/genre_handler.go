package handlers

import (
	"encoding/json"
	"net/http"

	"genre-category-management/config"
	"genre-category-management/models"
)

func CreateGenre(w http.ResponseWriter, r *http.Request) {
	var g models.Genre
	if err := json.NewDecoder(r.Body).Decode(&g); err != nil {
		http.Error(w, err.Error(), 400)
		return
	}
	res, err := config.DB.Exec("INSERT INTO genres(name) VALUES(?)", g.Name)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	id, _ := res.LastInsertId()
	g.ID = int(id)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(g)
}
