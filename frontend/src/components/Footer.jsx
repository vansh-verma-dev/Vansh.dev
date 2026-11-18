import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-white px-6 md:px-16 pb-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Vansh Verma. All rights reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 text-xs text-gray-400 hover:text-amber-400 transition"
        >
          Back to top
          <FaArrowUp className="group-hover:-translate-y-1 transition" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;