import strawberry
from typing import Optional
from app.models import User
from app.db import get_db
from sqlalchemy.future import select

@strawberry.type
class UserType:
    id: int
    nombre: str
    correo: str

@strawberry.type
class Query:
    @strawberry.field
    async def get_user_by_id(self, id: int) -> Optional[UserType]:
        async for db in get_db():
            result = await db.execute(select(User).where(User.id == id))
            user = result.scalars().first()
            if user:
                return UserType(id=user.id, nombre=user.nombre, correo=user.correo)
            return None

schema = strawberry.Schema(query=Query)
