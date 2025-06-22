package com.project.registernewgame.controller;

import com.project.registernewgame.model.Game;
import com.project.registernewgame.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/games")
@CrossOrigin
public class GameController {

    @Autowired
    private GameService service;

    @PostMapping("/register")
    public Game registerGame(@RequestBody Game game) {
        return service.registerGame(game);
    }
}