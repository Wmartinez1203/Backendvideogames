from fastapi import FastAPI
from strawberry.asgi import GraphQL
from app.schema import schema
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Definimos la app de GraphQL
graphql_app = GraphQL(schema)

# Middleware CORS para la app principal
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Puedes limitar a tus dominios
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,  # Importante si usas cookies o auth
)

# Se añade la ruta /graphql a FastAPI usando la app ASGI de Strawberry
# Importante: se "envuelve" graphql_app con CORSMiddleware para que también funcione ahí

from starlette.middleware.cors import CORSMiddleware as StarletteCORSMiddleware

# Wrap graphql_app with CORS middleware explicitly
cors_wrapped_graphql_app = StarletteCORSMiddleware(
    graphql_app,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

app.add_route("/graphql", cors_wrapped_graphql_app)
app.add_websocket_route("/graphql", cors_wrapped_graphql_app)
