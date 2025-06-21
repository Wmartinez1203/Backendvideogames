from fastapi import Request, HTTPException
from jose import jwt, JWTError
from dotenv import load_dotenv
import os

load_dotenv()
JWT_SECRET = os.getenv("JWT_SECRET")

async def get_current_user(request: Request):
    token = request.headers.get("Authorization")
    if not token:
        raise HTTPException(status_code=403, detail="Authorization header missing")

    try:
        payload = jwt.decode(token.replace("Bearer ", ""), JWT_SECRET, algorithms=["HS256"])
        return payload
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
