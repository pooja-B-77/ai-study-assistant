import faiss
import numpy as np

index = faiss.IndexFlatL2(
    384
)

stored_chunks = []

def add_to_vector_store(
    embeddings,
    chunks
):
    global stored_chunks

    index.add(
        np.array(
            embeddings,
            dtype="float32"
        )
    )

    stored_chunks.extend(
        chunks
    )

def search_chunks(
    query_embedding,
    k=3
):
    distances, indices = index.search(
        np.array(
            [query_embedding],
            dtype="float32"
        ),
        k
    )

    results = []

    for idx in indices[0]:
        if idx < len(stored_chunks):
            results.append(
                stored_chunks[idx]
            )

    return results