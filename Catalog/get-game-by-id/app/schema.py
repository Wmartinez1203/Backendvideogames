import strawberry
from typing import Optional
from app.service import get_game_by_id

@strawberry.type
class Game:
    id: str
    title: str
    genre: str
    price: float
    description: Optional[str]

@strawberry.type
class Query:
    @strawberry.field
    def getGame(self, id: str) -> Optional[Game]:
        game = get_game_by_id(id)
        if not game:
            return None
        return Game(**game)

schema = strawberry.Schema(query=Query)
