import axios from "axios";

const API_URL =
  "http://127.0.0.1:8000";

export async function uploadPDF(
  file: File
) {
  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  const response =
    await axios.post(
      `${API_URL}/upload`,
      formData
    );

  return response.data;
}

export async function indexPDF(
  filename: string
) {
  const response =
    await axios.post(
      `${API_URL}/index-pdf`,
      null,
      {
        params: {
          filename,
        },
      }
    );

  return response.data;
}