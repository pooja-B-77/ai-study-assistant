import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { uploadPDF } from "../services/uploadapi";

export default function Upload() {
  const [file, setFile] =
    useState<File | null>(null);

  const [message, setMessage] =
    useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage(
        "Please select a PDF"
      );
      return;
    }

    try {
      const result =
        await uploadPDF(file);

      setMessage(
        `Uploaded: ${result.filename}`
      );
    } catch {
      setMessage(
        "Upload failed"
      );
    }
  };

  return (
    <MainLayout>

      <div className="p-6 md:p-8">

        <h1 className="text-2xl font-semibold mb-6">
          Upload PDF Notes
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(
                e.target.files?.[0] || null
              )
            }
          />

          <button
            onClick={handleUpload}
            className="
            mt-4
            bg-blue-600
            px-5
            py-3
            rounded-lg
            hover:bg-blue-700
            "
          >
            Upload PDF
          </button>

          {message && (
            <p className="mt-4">
              {message}
            </p>
          )}

        </div>

      </div>

    </MainLayout>
  );
}