import { FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

const socials = [
  { icon: FaGithub, href: "https://github.com/vanshverma", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/vanshverma", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/vanshverma", label: "Instagram" },
];

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white px-6 pt-14 pb-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Logo + tagline */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-black tracking-tight">
              <span className="text-slate-800">Vansh</span>
              <span className="text-blue-600">.dev</span>
            </h3>
            <p className="mt-2 max-w-xs text-sm text-slate-500">
              MERN Stack Developer building fast, clean and scalable web
              products.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-slate-500">
            © {year} Vansh Verma. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-500 group-hover:text-blue-600">
              <FiArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;