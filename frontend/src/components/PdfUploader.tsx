import { useState } from "react";
import axios from "axios";
import { UploadCloud } from "lucide-react";

export default function PdfUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      setStatus("Please select a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData
      );

      setStatus(
        `Uploaded: ${response.data.filename}`
      );
    } catch (error) {
      setStatus("Upload Failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">

      <div
        className="
        bg-slate-900
        border-2
        border-dashed
        border-slate-700
        rounded-2xl
        p-10
        text-center
        hover:border-blue-500
        transition
        "
      >

        <UploadCloud
          size={60}
          className="mx-auto mb-4 text-blue-500"
        />

        <h2 className="text-2xl font-semibold mb-2">
          Upload PDF Notes
        </h2>

        <p className="text-slate-400 mb-6">
          Drag & drop your PDF or click below
        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] || null
            )
          }
          className="mb-6"
        />

        <div>
          <button
            onClick={handleUpload}
            disabled={loading}
            className="
            bg-blue-600
            hover:bg-blue-700
            px-6
            py-3
            rounded-xl
            font-medium
            "
          >
            {loading
              ? "Uploading..."
              : "Upload PDF"}
          </button>
        </div>

        {file && (
          <div className="mt-6 text-green-400">
            Selected: {file.name}
          </div>
        )}

        {status && (
          <div className="mt-4 text-slate-300">
            {status}
          </div>
        )}

      </div>

    </div>
  );
}