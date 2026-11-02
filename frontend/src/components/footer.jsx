import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/vanshverma", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/vanshverma", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/vanshverma", label: "Instagram" },
];

function Footer() {
  const year =  2025

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-6 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year}{" "}
          <span className="font-semibold text-slate-700">
            Vansh<span className="text-blue-600">.dev</span>
          </span>{" "}
          — All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-sm"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;