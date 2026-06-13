from fastapi import APIRouter
from services.pdf_service import (
    extract_text_from_pdf
)

router = APIRouter()

@router.get("/extract")
def extract_text(
    filename: str
):

    path = f"uploads/{filename}"

    text = extract_text_from_pdf(
        path
    )

    return {
        "characters": len(text),
        "preview": text[:1000]
    }