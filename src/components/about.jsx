import { useEffect, useRef, useState } from "react";
import { FiCode, FiLayers, FiAward, FiSmile, FiArrowUpRight } from "react-icons/fi";

const stats = [
  { icon: FiCode, value: 30, suffix: "+", label: "Projects Completed" },
  { icon: FiLayers, value: 8, suffix: "+", label: "Technologies" },
  { icon: FiAward, value: 2, suffix: "+", label: "Years Experience" },
  { icon: FiSmile, value: 100, suffix: "%", label: "Client Satisfaction" },
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
      { threshold: 0.25 }
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
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ry = ((x / rect.width) - 0.5) * 16;
    const rx = -((y / rect.height) - 0.5) * 16;
    setTilt({ rx, ry, gx: (x / rect.width) * 100, gy: (y / rect.height) * 100 });
  };
  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });

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
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -18px) scale(1.05); }
        }
        .reveal-item { opacity: 0; }
        .in-view .reveal-item { animation: fadeUpBlur 0.75s ease forwards; }
        .reveal-right { opacity: 0; }
        .reveal-right.in-view { animation: fadeRight 0.8s ease forwards; }
        .anim-floatCard { animation: floatCard 4s ease-in-out infinite; }
        .anim-blob { animation: floatBlob 11s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .reveal-item, .reveal-right { opacity: 1 !important; }
          .in-view .reveal-item, .reveal-right.in-view, .anim-floatCard, .anim-blob {
            animation: none !important; transform: none !important; filter: none !important;
          }
        }
      `}</style>

      {/* ambient backdrop, consistent with hero */}
      <div className="pointer-events-none absolute -top-24 left-0 h-[24rem] w-[24rem] rounded-full bg-blue-200/30 blur-3xl anim-blob" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0000000a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* Left — main content */}
        <div ref={leftRef} className={leftInView ? "in-view" : ""}>
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
            className="reveal-item mb-4 text-slate-600 leading-relaxed"
            style={{ animationDelay: "0.25s" }}
          >
            Main ek MERN Stack Developer hoon jo React, Node.js, Express aur
            MongoDB ke saath end-to-end web applications banata hai — database
            design se lekar polished, production-ready UI tak. Har project ko
            ek real product ki tarah treat karta hoon, sirf ek assignment ki
            tarah nahi.
          </p>
          <p
            className="reveal-item mb-6 text-slate-600 leading-relaxed"
            style={{ animationDelay: "0.35s" }}
          >
            I care about clean architecture, performance, and code that the
            next developer can actually read. That mindset is what let me take
            a client from a blank page to a live, working product.
          </p>

          {/* featured client work */}
          <a
            href="#projects"
            className="reveal-item group mb-10 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-md"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg text-white">
                🏥
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Prajnay Healthcare
                </p>
                <p className="text-sm text-slate-500">
                  Live client project — full-stack healthcare platform, built
                  end to end
                </p>
              </div>
            </div>
            <FiArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600" />
          </a>

          {/* stats grid */}
          <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4">
            {stats.map(({ icon: Icon, value, suffix, label }, i) => (
              <div
                key={label}
                className="reveal-item group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                style={{ animationDelay: `${0.55 + i * 0.08}s` }}
              >
                <Icon className="mb-2 h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-2xl font-bold text-slate-900">
                  <Counter value={value} suffix={suffix} inView={leftInView} />
                </p>
                <p className="text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <div
            className="reveal-item flex flex-wrap gap-4"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/30"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right — premium tilt photo card */}
        <div
          ref={rightRef}
          className={`reveal-right mx-auto w-full max-w-sm ${rightInView ? "in-view" : ""}`}
          style={{ perspective: "1000px" }}
        >
          <div className="relative">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-2xl transition-transform duration-150 ease-out"
              style={{
                transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              }}
            >
              <img
                src="/about-photo.jpg"
                alt="Vansh Verma"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/25 via-transparent to-transparent" />
              {/* glare that follows the cursor */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay transition-opacity duration-150"
                style={{
                  background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.55), transparent 45%)`,
                }}
              />
            </div>

            {/* floating featured-project badge */}
            <div className="anim-floatCard absolute -bottom-6 -left-6 max-w-[13rem] rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-blue-600">
                Featured Work
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Prajnay Healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}