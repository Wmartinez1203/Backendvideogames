package com.project.deletegame.controller;

import com.project.deletegame.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/games")
public class GameController {

    @Autowired
    private GameService service;

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteGame(@PathVariable String id) {
        service.deleteGameById(id);
        return ResponseEntity.ok("Game with ID " + id + " deleted successfully.");
    }
}
