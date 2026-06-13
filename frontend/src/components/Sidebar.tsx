import { NavLink } from "react-router-dom";

type Props = {
  mobileOpen?: boolean;
};

export default function Sidebar({
  mobileOpen,
}: Props) {
  const linkClass = ({ isActive }: any) =>
    `block px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-800"
    }`;

  return (
    <aside
      className={`
      fixed md:static
      z-40
      bg-slate-950
      w-64
      h-full
      border-r border-slate-800
      p-4
      transition-all
      ${mobileOpen ? "left-0" : "-left-64 md:left-0"}
      `}
    >
      <div className="space-y-2">

        <NavLink
          to="/dashboard"
          className={linkClass}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/chat"
          className={linkClass}
        >
          Chat
        </NavLink>

        <NavLink
          to="/upload"
          className={linkClass}
        >
          Upload PDF
        </NavLink>

        <NavLink
          to="/quiz"
          className={linkClass}
        >
          Quiz
        </NavLink>

      </div>
    </aside>
  );
}