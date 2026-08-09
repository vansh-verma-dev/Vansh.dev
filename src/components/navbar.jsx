import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b transition-shadow duration-300 ${
        scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        {/* Logo */}
        <h1 className="text-3xl font-black tracking-tight">
          <span className="text-slate-800">Vansh</span>
          <span className="text-blue-600">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-slate-600 font-medium hover:text-slate-900 duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-600 hover:after:w-full after:duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden lg:block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold duration-300 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5">
          Let's Talk
        </button>

        {/* Mobile Icon */}
        <button
          onClick={() => setMenu(true)}
          aria-label="Open menu"
          className="lg:hidden text-slate-700 text-3xl"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 ${
          menu ? "right-0" : "-right-full"
        } w-[280px] h-screen bg-[#0d0d0d] duration-500 lg:hidden shadow-2xl border-l border-white/10`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">
            Vansh
            <span className="text-blue-500">.dev</span>
          </h2>

          <button
            onClick={() => setMenu(false)}
            aria-label="Close menu"
            className="text-white text-3xl"
          >
            <IoClose />
          </button>
        </div>

        <ul className="flex flex-col gap-8 p-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenu(false)}
                className="text-lg text-gray-300 hover:text-blue-500 duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-8 mt-5">
         <a href="Contact">
           <button className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold duration-300">
            Let's Talk
          </button>
         </a>
        </div>
      </div>

      {/* Overlay */}
      {menu && (
        <div
          onClick={() => setMenu(false)}
          className="fixed inset-0 bg-black/60 lg:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;