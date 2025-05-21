// components/Sidebar.jsx
import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className={
        "flex flex-col bg-gray-100 h-screen p-4 transition-all duration-300 "
      }
    >
      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded"
        >
          <FaHome />
          {<span>Home</span>}
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded"
        >
          <FaInfoCircle />
          {<span>About</span>}
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded"
        >
          <FaEnvelope />
          {<span>Contact</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
