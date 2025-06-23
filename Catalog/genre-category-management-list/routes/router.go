package routes

import (
	"net/http"

	"genre-category-management/handlers"

	"github.com/gorilla/mux"
)

func SetupRouter() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/genres", handlers.GetGenres).Methods("GET")
	r.HandleFunc("/genres", handlers.CreateGenre).Methods("POST")
	r.HandleFunc("/genres/{id}", handlers.DeleteGenre).Methods("DELETE")

	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("🎮 Genre Category Management Service Running"))
	})

	return r
}
