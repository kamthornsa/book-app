// components/Sidebar.jsx
import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`flex flex-col bg-gray-100 h-screen p-4 transition-all duration-300 ${
        open ? "w-64" : "w-20"
      }`}
    >
      {/* Toggle button */}
      <button className="mb-6 text-xl self-end" onClick={() => setOpen(!open)}>
        <FaBars />
      </button>

      {/* Menu Items */}
      <nav className="flex flex-col gap-4">
        <a
          href="#"
          className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded"
        >
          <FaHome />
          {open && <span>Home</span>}
        </a>
        <a
          href="#"
          className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded"
        >
          <FaInfoCircle />
          {open && <span>About</span>}
        </a>
        <a
          href="#"
          className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded"
        >
          <FaEnvelope />
          {open && <span>Contact</span>}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
