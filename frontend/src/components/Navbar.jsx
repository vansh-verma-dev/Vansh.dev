
import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "#About" },
    { name: "Skill", path: "#Skill" },
    { name: "Projects", path: "#Projects" },
    { name: "Contact", path: "#Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 md:px-16 py-4 bg-gray-950/70 backdrop-blur border-b border-white/10">
      <div className="flex items-center justify-between">

        <a href="/" className="text-xl font-bold text-white">
          Vansh<span className="text-amber-400">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 bg-white/5 backdrop-blur border border-white/10 rounded-full p-1">
          {items.map((data) => (
            <a
              key={data.name}
              href={data.path}
              className="px-4 py-1.5 rounded-full text-sm text-gray-300 hover:text-amber-400 transition"
            >
              {data.name}
            </a>
          ))}
        </nav>

        <a
          href="#Contact"
          className="hidden md:flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-amber-300 transition"
        >
          Get Started <FaArrowRight />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden mt-4 p-4 bg-gray-900 border border-white/10 rounded-2xl flex flex-col gap-3">
          {items.map((data) => (
            <a
              key={data.name}
              href={data.path}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-amber-400 transition"
            >
              {data.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
