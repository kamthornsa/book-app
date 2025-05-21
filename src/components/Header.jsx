import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      {/* Logo and version */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Tailwind CSS" className="h-6" />
        <span className="font-semibold text-lg">tailwindcss</span>
        <span className="ml-2 bg-gray-100 text-sm px-2 py-0.5 rounded-full">
          v4.1
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-sm">
        <button className="px-2 py-1 text-gray-500 bg-gray-100 rounded">
          Ctrl K
        </button>
        <a href="#" className="hover:text-blue-600">
          Docs
        </a>
        <a href="#" className="hover:text-blue-600">
          Blog
        </a>
        <a href="#" className="hover:text-blue-600">
          Showcase
        </a>
        <button className="border border-blue-300 text-blue-600 px-2 py-1 rounded hover:bg-blue-50">
          Plus
        </button>
        <a
          href="https://github.com"
          className="ml-2 text-gray-700 hover:text-black"
        >
          <FaGithub size={20} />
        </a>
      </nav>
    </header>
  );
};
export default Header;
