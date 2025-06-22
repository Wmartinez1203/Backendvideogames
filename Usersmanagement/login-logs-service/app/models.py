from datetime import datetime

def create_log(user_id: str, action: str):
    return {
        "user_id": user_id,
        "action": action,
        "timestamp": datetime.utcnow()
    }
