import sqlalchemy as sa
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = sa.Column(sa.Integer, primary_key=True, autoincrement=True)  # ✅ ID como INTEGER
    nombre = sa.Column(sa.String, nullable=False)
    correo = sa.Column(sa.String, unique=True, nullable=False)
