from fastapi import APIRouter
import google.generativeai as genai

from services.embedding_service import (
    create_embeddings
)

from services.vector_service import (
    search_chunks
)

router = APIRouter()

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

@router.get("/chat-with-pdf")
def chat_with_pdf(
    question: str
):

    query_embedding = create_embeddings(
        [question]
    )[0]

    relevant_chunks = search_chunks(
        query_embedding
    )

    context = "\n".join(
        relevant_chunks
    )

    prompt = f"""
Use the context below to answer.

Context:
{context}

Question:
{question}
"""

    response = model.generate_content(
        prompt
    )

    return {
        "answer": response.text,
        "context_used": len(
            relevant_chunks
        )
    }