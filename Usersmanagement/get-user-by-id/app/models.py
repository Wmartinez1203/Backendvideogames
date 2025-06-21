import sqlalchemy as sa
from sqlalchemy.orm import declarative_base
import uuid
from sqlalchemy.dialects.postgresql import UUID

Base = declarative_base()

class User(Base):
    __tablename__ = "Users"

    id = sa.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    nombre = sa.Column(sa.String, nullable=False)
    correo = sa.Column(sa.String, unique=True, nullable=False)
