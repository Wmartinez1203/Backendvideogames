from fastapi import APIRouter
from app.db import logs_collection

router = APIRouter()

@router.get("/logs/{user_id}")
def get_logs(user_id: str):
    logs = list(logs_collection.find({"user_id": user_id}, {"_id": 0}))
    return {"user_id": user_id, "logs": logs}
