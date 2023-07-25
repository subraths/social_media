import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#242424] text-white p-4">
      <Outlet />
      <Navbar />
    </div>
  );
}
