import { useEffect, useRef, useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiGlobe,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const contactInfo = [
  { icon: FiMail, label: "Email", value: "vanshrakesh67@gmail.com", href: "mailto:vanshrakesh67@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+91 9368549887", href: "tel:+919368549887" },
  { icon: FiMapPin, label: "Location", value: "Meerut, Uttar Pradesh, India", href: null },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/vansh-verma-dev", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/vansh-verma-b2a6a3373/", label: "LinkedIn" },
  { icon: FiGlobe, href: "https://vansh-dev.onrender.com", label: "Portfolio" },
  { icon: FaInstagram, href: "https://instagram.com/igvanshverma", label: "Instagram" },
];

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function ContactSection() {
  const [headRef, headInView] = useInView();
  const [gridRef, gridInView] = useInView();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    // TODO: replace with a real submit call (EmailJS, Formspree, your API, etc.)
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-6 py-24 text-slate-900">
      <style>{`
        @keyframes fadeUpBlur {
          from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -18px) scale(1.05); }
        }
        @keyframes floatBlob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-18px, 16px) scale(1.06); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes popScale {
          0% { opacity: 0; transform: scale(0.6); }
          60% { opacity: 1; transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes ringPulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .reveal-item { opacity: 0; }
        .in-view .reveal-item { animation: fadeUpBlur 0.75s ease forwards; }
        .reveal-left { opacity: 0; }
        .in-view .reveal-left { animation: fadeRight 0.8s ease forwards; }
        .reveal-form { opacity: 0; }
        .in-view .reveal-form { animation: fadeLeft 0.8s ease forwards; }
        .anim-blob1 { animation: floatBlob 12s ease-in-out infinite; }
        .anim-blob2 { animation: floatBlob2 14s ease-in-out infinite; }
        .anim-spin-slow { animation: spinSlow 18s linear infinite; }
        .anim-popScale { animation: popScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .anim-ringPulse { animation: ringPulse 1.6s ease-out infinite; }
        .anim-fadeIn { animation: fadeIn 0.4s ease forwards; }
        @media (prefers-reduced-motion: reduce) {
          .reveal-item, .reveal-left, .reveal-form { opacity: 1 !important; }
          .in-view .reveal-item, .in-view .reveal-left, .in-view .reveal-form,
          .anim-blob1, .anim-blob2, .anim-spin-slow, .anim-popScale, .anim-ringPulse, .anim-fadeIn {
            animation: none !important; transform: none !important; filter: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute -top-24 left-0 h-[24rem] w-[24rem] rounded-full bg-blue-200/30 blur-3xl anim-blob1" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-[22rem] w-[22rem] rounded-full bg-indigo-200/30 blur-3xl anim-blob2" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0000000a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <div ref={headRef} className={`mx-auto mb-16 max-w-2xl text-center ${headInView ? "in-view" : ""}`}>
          <p
            className="reveal-item inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-700"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            Contact
          </p>

          <h2
            className="reveal-item mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ animationDelay: "0.15s" }}
          >
            Let's build{" "}
            <span className="bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              something great
            </span>
          </h2>

          <p
            className="reveal-item mx-auto mt-5 text-lg leading-8 text-slate-500"
            style={{ animationDelay: "0.25s" }}
          >
            Got a project in mind, a role to fill, or just want to say hi?
            My inbox is open.
          </p>
        </div>

        {/* Content grid */}
        <div ref={gridRef} className={`grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] ${gridInView ? "in-view" : ""}`}>
          {/* Left — info + socials */}
          <div className="reveal-left space-y-5">
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      {label}
                    </p>
                    <p className="mt-0.5 font-medium text-slate-800">{value}</p>
                  </div>
                </Wrapper>
              );
            })}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-slate-400">
                Find me online
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-form relative">
            {/* decorative rotating ring, corner accent */}
            <div
              className="anim-spin-slow pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-70"
              style={{
                background:
                  "conic-gradient(from 0deg, #2563eb, #6366f1, transparent, #2563eb)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2.5px))",
                mask:
                  "radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2.5px))",
              }}
            />

            <div className="group/card relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/50 transition-shadow duration-300 focus-within:shadow-xl focus-within:shadow-blue-600/10 sm:p-9">
              {/* subtle focus glow */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 ring-2 ring-blue-500/20 transition-opacity duration-300 group-focus-within/card:opacity-100" />

              {status === "sent" ? (
                <div className="anim-fadeIn flex flex-col items-center justify-center py-10 text-center">
                  <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30">
                    <span className="anim-ringPulse absolute inset-0 rounded-full border-2 border-blue-400" />
                    <FiCheck className="anim-popScale h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Message Sent!
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
                    Thanks for reaching out — I'll read it and get back to you
                    soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Your Name
                      </label>
                      <div className="relative">
                        <FiUser className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Aman Sharma"
                          required
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 pl-10 pr-4 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Your Email
                      </label>
                      <div className="relative">
                        <FiMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 pl-10 pr-4 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="pointer-events-none absolute left-3.5 top-4 h-4 w-4 text-slate-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 py-3 pl-10 pr-4 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/35 disabled:cursor-not-allowed disabled:opacity-90 disabled:hover:translate-y-0"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    {status === "sending" ? (
                      <>
                        <span className="relative h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        <span className="relative">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative">Send Message</span>
                        <FiSend className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}