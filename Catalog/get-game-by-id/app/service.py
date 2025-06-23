from bson import ObjectId
from app.db import get_game_collection

def serialize_game(game):
    return {
        "id": str(game["_id"]),
        "title": game.get("title", ""),
        "genre": game.get("genre", ""),
        "price": game.get("price", 0.0),
        "description": game.get("description", "")
    }

def get_game_by_id(game_id: str):
    collection = get_game_collection()
    try:
        game = collection.find_one({"_id": ObjectId(game_id)})
        if not game:
            return None
        return serialize_game(game)
    except Exception as e:
        print(f"Error getting game by ID: {e}")
        return None
