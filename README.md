# AI Study Assistant

An AI-powered Study Assistant built using React, FastAPI, Gemini AI, FAISS, and Sentence Transformers.

## Features

* Upload PDF Notes
* Extract Text from PDFs
* Automatic Chunking
* Generate Embeddings
* FAISS Vector Search
* Retrieval Augmented Generation (RAG)
* Gemini AI Question Answering
* Responsive Dashboard
* Modern Chat Interface

## Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* Axios
* React Router

### Backend

* FastAPI
* Google Gemini API
* Sentence Transformers
* FAISS
* PyPDF

## Installation

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

## Workflow

1. Upload PDF
2. PDF gets indexed automatically
3. Embeddings stored in FAISS
4. Ask questions
5. Gemini answers using retrieved context

## Future Improvements

* Flashcard Generation
* MCQ Generator
* Quiz Engine
* Chat History
* User Authentication
* PDF Management
* Database Integration
* Deployment on AWS

## Author

Pooja
AI & Data Science Engineering
