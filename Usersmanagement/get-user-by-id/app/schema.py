import strawberry
from typing import Optional
import uuid
from app.models import User
from app.db import get_db
from sqlalchemy.future import select

@strawberry.type
class UserType:
    id: str
    nombre: str
    correo: str

@strawberry.type
class Query:
    @strawberry.field
    async def get_user_by_id(self, id: str) -> Optional[UserType]:
        async for db in get_db():
            try:
                uuid_id = uuid.UUID(id)
            except ValueError:
                return None
            result = await db.execute(select(User).where(User.id == uuid_id))
            user = result.scalars().first()
            if user:
                return UserType(id=str(user.id), nombre=user.nombre, correo=user.correo)
            return None

schema = strawberry.Schema(query=Query)
