import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const askQuestion = async (
  question: string
) => {
  const response = await axios.get(
    `${API_URL}/chat-with-pdf`,
    {
      params: {
        question,
      },
    }
  );

  return response.data;
};