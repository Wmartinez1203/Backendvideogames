package com.project.editgame.service;

import com.project.editgame.model.Game;
import com.project.editgame.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GameService {
    @Autowired
    private GameRepository gameRepository;

    public Game updateGame(String id, Game newGame) {
        Optional<Game> optionalGame = gameRepository.findById(id);
        if (optionalGame.isPresent()) {
            Game existing = optionalGame.get();
            existing.setTitle(newGame.getTitle());
            existing.setGenre(newGame.getGenre());
            existing.setPrice(newGame.getPrice());
            return gameRepository.save(existing);
        } else {
            throw new RuntimeException("Game not found with id: " + id);
        }
    }
}
