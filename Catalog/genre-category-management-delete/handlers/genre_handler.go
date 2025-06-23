package handlers

import (
	"net/http"

	"genre-category-management/config"

	"github.com/gorilla/mux"
)

func DeleteGenre(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	_, err := config.DB.Exec("DELETE FROM genres WHERE id = ?", id)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}
