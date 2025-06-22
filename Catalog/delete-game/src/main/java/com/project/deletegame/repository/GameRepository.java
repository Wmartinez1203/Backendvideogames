package com.project.deletegame.repository;

import com.project.deletegame.model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository<Game, String> {
}
