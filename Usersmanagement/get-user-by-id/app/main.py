from fastapi import FastAPI
from strawberry.asgi import GraphQL
from app.schema import schema
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ajusta según tus dominios permitidos
    allow_methods=["*"],
    allow_headers=["*"],
)

graphql_app = GraphQL(schema)

app.add_route("/graphql", graphql_app)
app.add_websocket_route("/graphql", graphql_app)
