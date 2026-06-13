import { useState } from "react";
import { askQuestion } from "../services/api";

export const useChat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (
    question: string
  ) => {
    setLoading(true);

    try {
      const response =
        await askQuestion(question);

      console.log(
        "API Response:",
        response
      );

      setMessages((prev) => [
        ...prev,
        {
          question,
          answer:
            response.answer ??
            "No answer received",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          question,
          answer:
            "Error connecting to backend",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage,
  };
};