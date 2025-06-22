package com.project.registernewgame.service;

import com.project.registernewgame.model.Game;
import com.project.registernewgame.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameService {

    @Autowired
    private GameRepository repository;

    public Game registerGame(Game game) {
        return repository.save(game);
    }
}
