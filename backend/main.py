from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import google.generativeai as genai  # type: ignore

from dotenv import load_dotenv
import os

# Routers
from routes.upload import router as upload_router
from routes.pdf import router as pdf_router
from routes.index_pdf import router as index_router
from routes.chat_pdf import router as chat_pdf_router

# Load environment variables
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=api_key)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

# Create FastAPI app
app = FastAPI(
    title="AI Study Assistant API",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Register Routes
# ==========================

app.include_router(upload_router)
app.include_router(pdf_router)
app.include_router(index_router)
app.include_router(chat_pdf_router)

# ==========================
# Home Endpoint
# ==========================

@app.get("/")
def home():
    return {
        "message": "AI Study Assistant Backend Running"
    }

# ==========================
# Gemini Chat Endpoint
# ==========================

@app.get("/ask")
def ask(question: str):

    response = model.generate_content(
        question
    )

    return {
        "question": question,
        "answer": response.text
    }