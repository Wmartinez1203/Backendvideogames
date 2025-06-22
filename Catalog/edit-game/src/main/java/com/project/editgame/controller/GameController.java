package com.project.editgame.controller;

import com.project.editgame.model.Game;
import com.project.editgame.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/games")
public class GameController {
    @Autowired
    private GameService gameService;

    @PutMapping("/edit/{id}")
    public Game editGame(@PathVariable String id, @RequestBody Game game) {
        return gameService.updateGame(id, game);
    }
}
