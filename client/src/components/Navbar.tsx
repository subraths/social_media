import { NavLink } from "react-router-dom";
import { TiHome } from "react-icons/ti";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full backdrop-blur">
      <div className="flex justify-evenly  max-w-screen-sm mx-auto">
        <NavLink to="/" className="border w-full h-fu justify-self-center items">
          <TiHome />
        </NavLink>
        <NavLink to="/messages" className="w-full text-center">
          messages
        </NavLink>
        <NavLink to="/profile" className="w-full text-center">
          Profile
        </NavLink>
      </div>
    </nav>
  );
}
