"""PDF text extraction utility.

Attempts to import PdfReader from either pypdf or PyPDF2 to be compatible
with different environments where one package may be installed.
"""
from typing import Optional

try:
    from pypdf import PdfReader  # type: ignore
except Exception:
    try:
        from PyPDF2 import PdfReader  # type: ignore
    except Exception:
        PdfReader = None  # type: ignore


def extract_text_from_pdf(pdf_path: str) -> Optional[str]:
    """Return concatenated text from all pages of a PDF, or None if reader
    is unavailable.
    """
    if PdfReader is None:
        return None

    reader = PdfReader(pdf_path)
    text = []

    for page in getattr(reader, "pages", []):
        # different PdfReader versions expose extract_text differently
        content = None
        if hasattr(page, "extract_text"):
            content = page.extract_text()
        elif hasattr(page, "get_text"):
            content = page.get_text()

        if content:
            text.append(content)

    return "\n".join(text)