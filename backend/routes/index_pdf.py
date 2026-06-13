from fastapi import APIRouter

from services.pdf_service import (
    extract_text_from_pdf
)

from services.chunk_service import (
    chunk_text
)

from services.embedding_service import (
    create_embeddings
)

from services.vector_service import (
    add_to_vector_store
)

router = APIRouter()

@router.post("/index-pdf")
def index_pdf(
    filename: str
):

    text = extract_text_from_pdf(
        f"uploads/{filename}"
    )

    chunks = chunk_text(text)

    embeddings = create_embeddings(
        chunks
    )

    add_to_vector_store(
        embeddings,
        chunks
    )

    return {
        "chunks": len(chunks),
        "status": "indexed"
    }