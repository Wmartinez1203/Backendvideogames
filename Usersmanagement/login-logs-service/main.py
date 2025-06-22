from fastapi import FastAPI
from routes.logs import router
from app.events import consume_event

app = FastAPI()
app.include_router(router)

@app.get("/")
def root():
    return {"message": "Login Logs Microservice"}

# Simular evento para prueba rápida
@app.post("/events/simulate")
def simulate_event(user_id: str, action: str):
    consume_event(user_id, action)
    return {"status": "event consumed"}
