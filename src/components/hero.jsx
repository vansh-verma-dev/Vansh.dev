import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
 import vanshu from "../assets/v2.jpeg";

const roles = [
  "scalable web apps.",
  "REST APIs with Node.js.",
  "modern UIs in React.",
  "secure auth with JWT.",
];

const socials = [
  { icon: FaGithub, href: "https://github.com/vansh-verma-dev", label: "GitHub" },
  { icon: FaLinkedin, href: "", label: "LinkedIn" },
  { icon: FaGlobe, href: "", label: "Portfolio" },
  { icon: FaInstagram, href: "", label: "Instagram" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pt-[80px] text-slate-900"
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, -20px) scale(1.05); }
        }
        @keyframes floatBlob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 25px) scale(1.08); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatChip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .anim-fadeUp { animation: fadeUp 0.7s ease forwards; }
        .anim-fadeLeft { animation: fadeLeft 0.8s ease forwards; }
        .anim-blob1 { animation: floatBlob 10s ease-in-out infinite; }
        .anim-blob2 { animation: floatBlob2 12s ease-in-out infinite; }
        .anim-spin-slow { animation: spinSlow 14s linear infinite; }
        .anim-chip1 { animation: floatChip 4s ease-in-out infinite; }
        .anim-chip2 { animation: floatChip 4.5s ease-in-out infinite 0.6s; }
        @media (prefers-reduced-motion: reduce) {
          .anim-fadeUp, .anim-fadeLeft, .anim-blob1, .anim-blob2, .anim-spin-slow, .anim-chip1, .anim-chip2 {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
        }
      `}</style>

      {/* soft gradient blobs for an airy, modern backdrop */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-[26rem] w-[26rem] rounded-full bg-blue-200/40 blur-3xl anim-blob1" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-[24rem] w-[24rem] rounded-full bg-indigo-200/40 blur-3xl anim-blob2" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0000000d_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 py-12 lg:grid-cols-2 lg:gap-10">
        {/* Left column — text */}
        <div className="text-center lg:text-left">
          <div
            className="anim-fadeUp mb-8 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700 opacity-0 shadow-sm"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            Available for Freelance / Full-Time
          </div>

          <p
            className="anim-fadeUp mb-3 text-sm text-slate-500 opacity-0"
            style={{ animationDelay: "0.15s" }}
          >
            Hi, I'm
          </p>

          <h1
            className="anim-fadeUp mb-4 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-5xl font-bold leading-tight text-transparent opacity-0 sm:text-6xl"
            style={{ animationDelay: "0.25s" }}
          >
            Vansh Verma
          </h1>

          <p
            className="anim-fadeUp mb-6 text-lg font-semibold text-blue-600 opacity-0 sm:text-xl"
            style={{ animationDelay: "0.35s" }}
          >
            MERN Stack Developer
          </p>

          {/* typing role line */}
          <div
            className="anim-fadeUp mb-8 flex min-h-[1.75rem] items-center justify-center gap-1 text-base text-slate-600 opacity-0 sm:text-lg lg:justify-start"
            style={{ animationDelay: "0.45s" }}
          >
            <span>I build</span>
            <span className="font-semibold text-slate-900">{text}</span>
            <span className="animate-pulse text-blue-500">|</span>
          </div>

          <p
            className="anim-fadeUp mx-auto mb-10 max-w-lg text-slate-500 opacity-0 lg:mx-0"
            style={{ animationDelay: "0.55s" }}
          >
            React, Node.js, Express aur MongoDB ke saath fast, clean aur
            scalable web products banata hoon.
          </p>

          <div
            className="anim-fadeUp flex flex-wrap items-center justify-center gap-4 opacity-0 lg:justify-start"
            style={{ animationDelay: "0.65s" }}
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-md shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
            >
              Get In Touch
            </a>
          </div>

          {/* social links */}
          <div
            className="anim-fadeUp mt-10 flex items-center justify-center gap-4 opacity-0 lg:justify-start"
            style={{ animationDelay: "0.75s" }}
          >
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

        {/* Right column — photo frame */}
        <div
          className="anim-fadeLeft relative mx-auto opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]">
            {/* glow behind photo */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-400/30 blur-2xl" />

            {/* rotating gradient ring */}
            <div
              className="anim-spin-slow absolute -inset-3 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #2563eb, #6366f1, #93c5fd, #2563eb)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                mask:
                  "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              }}
            />

            {/* photo */}
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-xl">
              <img
                src={vanshu}
                alt="Vansh Verma"
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating tech chip — top left */}
            <div className="anim-chip1 absolute -left-4 top-6 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg sm:-left-8">
              <span className="text-sm">⚛️</span> React
            </div>

            {/* floating tech chip — bottom right */}
            <div className="anim-chip2 absolute -right-4 bottom-10 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg sm:-right-8">
              <span className="text-sm">🟢</span> Node.js
            </div>

            {/* availability badge */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full border-2 border-white bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}