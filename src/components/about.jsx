import { useEffect, useRef, useState } from "react";
import { FiCode, FiLayers, FiZap, FiDownload, FiArrowUpRight } from "react-icons/fi";
import resume from "../assets/Resume.pdf"
 
const stats = [
  { value: 30, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Technologies" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

function Counter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const [headRef, headInView] = useInView();
  const [cardsRef, cardsInView] = useInView();
  const [statsRef, statsInView] = useInView();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 text-slate-900"
    >
      <style>{`
        @keyframes fadeUpBlur {
          from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -18px) scale(1.05); }
        }
        @keyframes floatBlob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-18px, 16px) scale(1.06); }
        }
        .reveal-item { opacity: 0; }
        .in-view .reveal-item { animation: fadeUpBlur 0.75s ease forwards; }
        .anim-blob1 { animation: floatBlob 11s ease-in-out infinite; }
        .anim-blob2 { animation: floatBlob2 13s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .reveal-item { opacity: 1 !important; }
          .in-view .reveal-item, .anim-blob1, .anim-blob2 {
            animation: none !important; transform: none !important; filter: none !important;
          }
        }
      `}</style>

      {/* ambient backdrop, consistent with hero */}
      <div className="pointer-events-none absolute -top-24 left-0 h-[24rem] w-[24rem] rounded-full bg-blue-200/30 blur-3xl anim-blob1" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-[22rem] w-[22rem] rounded-full bg-indigo-200/30 blur-3xl anim-blob2" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0000000a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading + bio */}
        <div ref={headRef} className={`mx-auto max-w-2xl text-center ${headInView ? "in-view" : ""}`}>
          <div
            className="reveal-item mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            About Me
          </div>

          <h2
            className="reveal-item mb-6 text-4xl font-bold leading-tight sm:text-5xl"
            style={{ animationDelay: "0.15s" }}
          >
            I build products,{" "}
            <span className="bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              not just interfaces
            </span>
          </h2>

          <p
            className="reveal-item mb-3 text-slate-600 leading-relaxed"
            style={{ animationDelay: "0.25s" }}
          >
           I’m Vansh Verma, a Full Stack Developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world products using technologies like JavaScript, React, Node.js, Express.js, and MongoDB. I’ve worked on projects ranging from business websites and accounting software to learning platforms,

          </p>
          <p
            className="reveal-item text-slate-600 leading-relaxed"
            style={{ animationDelay: "0.35s" }}
          >
        where I focus on clean UI, practical functionality, and a smooth user experience. I’m continuously improving my backend and problem-solving skills while exploring new technologies and building projects that solve real problems.
          </p>
        </div>

     

        {/* Stats row */}
        <div
          ref={statsRef}
          className={`mt-16 grid grid-cols-2 gap-4 border-y border-slate-200 py-10 sm:grid-cols-4 ${
            statsInView ? "in-view" : ""
          }`}
        >
          {stats.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className="reveal-item text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                <Counter value={value} suffix={suffix} inView={statsInView} />
              </p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href={resume}
            download
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/35"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <FiDownload className="h-4 w-4" />
            <span className="relative">Download Resume</span>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-slate-300 px-8 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500"
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-blue-50 transition-transform duration-300 group-hover:scale-y-100" />
            <span className="relative transition-colors duration-300 group-hover:text-blue-600">
              Let's Connect
            </span>
            <FiArrowUpRight className="relative h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
}