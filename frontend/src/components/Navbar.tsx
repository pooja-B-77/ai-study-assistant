import { Menu } from "lucide-react";

type Props = {
  onMenuClick?: () => void;
};

export default function Navbar({
  onMenuClick,
}: Props) {
  return (
    <nav className="h-16 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-4 md:px-6">

      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="md:hidden"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-xl md:text-2xl font-bold">
          AI Study Assistant
        </h1>

      </div>

      <div className="flex items-center gap-4">

        <span className="hidden md:block text-slate-400">
          Welcome Back 👋
        </span>

        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
          P
        </div>

      </div>

    </nav>
  );
}