import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({
  children,
}: Props) {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <div className="h-screen bg-slate-950 text-white">

      <Navbar
        onMenuClick={() =>
          setMobileOpen(!mobileOpen)
        }
      />

      <div className="flex h-[calc(100vh-64px)]">

        <Sidebar
          mobileOpen={mobileOpen}
        />

        <main className="flex-1 overflow-auto">
          {children}
        </main>

      </div>

    </div>
  );
}