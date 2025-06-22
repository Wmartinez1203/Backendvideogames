package com.project.registernewgame.repository;

import com.project.registernewgame.model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository<Game, String> {
}
