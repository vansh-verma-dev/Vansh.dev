import { useState, useEffect } from "react";

const roles = [
  "scalable web apps.",
  "REST APIs with Node.js.",
  "modern UIs in React.",
  "secure auth with JWT.",
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
    <section id="home" 
    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0e0f] px-6 text-white">
      {/* single soft glow behind name */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* availability badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-teal-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
          Available for Freelance / Full-Time
        </div>

        <p className="mb-3 text-sm text-neutral-400">Hi, I'm</p>

        {/* clean white name */}
        <h1 className="mb-4 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
          Vansh Verma
        </h1>

        <p className="mb-6 text-lg font-medium text-teal-400 sm:text-xl">
          MERN Stack Developer
        </p>

        {/* typing role line */}
        <div className="mb-8 flex min-h-[1.75rem] items-center justify-center gap-1 text-base text-neutral-300 sm:text-lg">
          <span>I build</span>
          <span className="text-white">{text}</span>
          <span className="animate-pulse text-teal-400">|</span>
        </div>

        <p className="mx-auto mb-10 max-w-lg text-neutral-400">
          React, Node.js, Express aur MongoDB ke saath fast, clean aur
          scalable web products banata hoon.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-teal-400 px-7 py-3.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-teal-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-400"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}