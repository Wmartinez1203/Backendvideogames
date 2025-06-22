from app.db import logs_collection
from app.models import create_log
from app.logger import log_info

def consume_event(user_id: str, action: str):
    log = create_log(user_id, action)
    result = logs_collection.insert_one(log)
    log_info(f"Inserted log with ID: {result.inserted_id}")
