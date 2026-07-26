import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub size={16} />, href: "#" },
  { icon: <FaLinkedin size={16} />, href: "#" },
  { icon: <FaTwitter size={16} />, href: "#" },
];

const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

function ContactAndFooter() {
  return (
    <>
      {/* ---------- Contact ---------- */}
      <section id="contact" className="bg-black text-white px-6 py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-zinc-500 text-sm tracking-widest uppercase mb-3">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's work together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {/* Info */}
            <div className="md:col-span-2 flex flex-col justify-between gap-12">
              <div className="flex flex-col gap-7">
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:yourname@email.com"
                    className="text-lg hover:text-zinc-300 transition-colors"
                  >
                    yourname@email.com
                  </a>
                </div>

                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <p className="text-lg">+91 00000 00000</p>
                </div>

                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-lg">Your City, India</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="md:col-span-3 flex flex-col gap-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <label className="text-zinc-500 text-xs uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/15 focus:border-white outline-none py-2.5 mt-2 placeholder:text-zinc-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-zinc-500 text-xs uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-transparent border-b border-white/15 focus:border-white outline-none py-2.5 mt-2 placeholder:text-zinc-700 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-zinc-500 text-xs uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/15 focus:border-white outline-none py-2.5 mt-2 placeholder:text-zinc-700 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start mt-3 px-8 py-3 border border-white text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-black text-white px-6 py-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Vansh Verma
          </p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-zinc-500 text-sm hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default ContactAndFooter;