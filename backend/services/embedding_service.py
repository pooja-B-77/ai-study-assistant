"""Embedding helper using sentence-transformers.

This module lazily imports and initializes the model so editors/linters
won't report a missing import until the function is actually used.
"""

from typing import Iterable, List, Optional, TYPE_CHECKING

if TYPE_CHECKING:
    # For type checkers only; avoids runtime import errors in editors/linters
    from sentence_transformers import SentenceTransformer

_model: Optional["SentenceTransformer"] = None

def _get_model():
    global _model
    if _model is not None:
        return _model
    try:
        from sentence_transformers import SentenceTransformer
    except ImportError:
        raise ImportError(
            "sentence-transformers package is required. "
            "Install it using: pip install sentence-transformers"
        )
    _model = SentenceTransformer("all-MiniLM-L6-v2")
    return _model


def create_embeddings(chunks: Iterable[str]) -> List[float]:
    """Create embeddings for given chunks (lazy-loads the model).

    chunks can be a single string or an iterable of strings.
    """
    model = _get_model()

    # sentence-transformers accepts a single string or list of strings
    embeddings = model.encode(list(chunks) if not isinstance(chunks, str) else chunks)
    return embeddings