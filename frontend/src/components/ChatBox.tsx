import {
  useState,
  useEffect,
  useRef,
} from "react";

import ReactMarkdown from "react-markdown";
import { useChat } from "../hooks/useChat";

export default function ChatBox() {
  const [question, setQuestion] =
    useState("");

  const bottomRef =
    useRef<HTMLDivElement>(null);

  const {
    messages,
    loading,
    sendMessage,
  } = useChat();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!question.trim()) return;

    await sendMessage(question);

    setQuestion("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">

      <div className="flex-1 overflow-y-auto p-6">

        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center">

            <div className="text-center">

              <h2 className="text-3xl font-bold mb-3">
                AI Study Assistant
              </h2>

              <p className="text-slate-400">
                Upload a PDF and ask questions
              </p>

            </div>

          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className="mb-8"
          >
            <div className="flex justify-end mb-3">

              <div
                className="
                bg-blue-600
                max-w-[70%]
                p-4
                rounded-2xl
                shadow-lg
                "
              >
                {msg.question}
              </div>

            </div>

            <div className="flex justify-start">

              <div
                className="
                bg-slate-800
                max-w-[75%]
                p-4
                rounded-2xl
                shadow-lg
                leading-7
                text-base
                prose
                prose-invert
                max-w-none
                "
              >
                <ReactMarkdown>
                  {msg.answer}
                </ReactMarkdown>
              </div>

            </div>

          </div>
        ))}

        <div ref={bottomRef}></div>

      </div>

      <div
        className="
        border-t
        border-slate-800
        p-4
        flex
        gap-3
        bg-slate-950
        "
      >
        <input
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          placeholder="Ask about your PDF..."
          className="
          flex-1
          bg-slate-900
          p-4
          rounded-xl
          outline-none
          focus:ring-2
          focus:ring-blue-500
          "
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="
          bg-blue-600
          hover:bg-blue-700
          px-6
          rounded-xl
          disabled:opacity-50
          "
        >
          {loading
            ? "Thinking..."
            : "Send"}
        </button>

      </div>

    </div>
  );
}