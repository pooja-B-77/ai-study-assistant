import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Chat from "../pages/Chat";
import Quiz from "../pages/Quiz";
import Home from "../pages/Home";
import Upload from "../pages/Upload";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/home" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}