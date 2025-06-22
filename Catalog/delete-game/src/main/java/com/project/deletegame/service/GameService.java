package com.project.deletegame.service;

import com.project.deletegame.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameService {
    @Autowired
    private GameRepository repository;

    public void deleteGameById(String id) {
        repository.deleteById(id);
    }
}
