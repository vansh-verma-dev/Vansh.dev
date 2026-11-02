import { useEffect, useRef, useState } from "react";
import { FiBookOpen } from "react-icons/fi";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "mahaveer university meerut",
    duration: "2026 - Present",
    description:
      "Currently pursuing a Bachelor of Computer Applications while strengthening my knowledge of software development, programming, and modern web technologies.",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Kripa Ram Janta Inter College",
    duration: "2024",
    description:
      "Completed Higher Secondary education with a growing passion for web development and software engineering.",
  },
  {
    degree: "Frontend Development Virtual Internship",
    institution: "CodeSoft",
    duration: "2025",
    description:
      "Completed a virtual internship focused on HTML, CSS, JavaScript, React.js and responsive web development.",
  },
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

function Education() {
  const [headRef, headInView] = useInView();
  const [listRef, listInView] = useInView();

  return (
    <section id="education" className="relative overflow-hidden bg-white px-6 py-24 text-slate-900">
      <style>{`
        @keyframes fadeUpBlur {
          from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -18px) scale(1.05); }
        }
        @keyframes drawLine {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .reveal-item { opacity: 0; }
        .in-view .reveal-item { animation: fadeUpBlur 0.75s ease forwards; }
        .anim-blob { animation: floatBlob 12s ease-in-out infinite; }
        .draw-line { transform-origin: top; transform: scaleY(0); }
        .in-view .draw-line { animation: drawLine 1.4s ease forwards; }
        @media (prefers-reduced-motion: reduce) {
          .reveal-item { opacity: 1 !important; }
          .in-view .reveal-item, .anim-blob { animation: none !important; transform: none !important; filter: none !important; }
          .draw-line { transform: scaleY(1) !important; }
        }
      `}</style>

      <div className="pointer-events-none absolute -top-24 right-0 h-[24rem] w-[24rem] rounded-full bg-blue-200/30 blur-3xl anim-blob" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0000000a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Heading */}
        <div ref={headRef} className={`mb-20 text-center ${headInView ? "in-view" : ""}`}>
          <p
            className="reveal-item inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-700"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Education
          </p>

          <h2
            className="reveal-item mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ animationDelay: "0.15s" }}
          >
            My{" "}
            <span className="bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>

          <p
            className="reveal-item mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500"
            style={{ animationDelay: "0.25s" }}
          >
            A journey of continuous learning, skill development, and building
            a strong foundation in modern web technologies.
          </p>
        </div>

        {/* Timeline */}
        <div ref={listRef} className={`relative pl-12 sm:pl-16 ${listInView ? "in-view" : ""}`}>
          {/* Line */}
          <div className="absolute left-[15px] top-1 bottom-1 w-[2px] overflow-hidden rounded-full bg-slate-200 sm:left-[19px]">
            <div className="draw-line h-full w-full bg-gradient-to-b from-blue-600 via-indigo-400 to-transparent" />
          </div>

          <div className="space-y-10">
            {education.map((edu, index) => {
              const isCurrent = edu.duration.includes("Present");
              return (
                <div
                  key={edu.degree}
                  className="reveal-item group relative"
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                >
                  {/* Icon dot */}
                  <div className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 sm:-left-16 sm:h-9 sm:w-9">
                    <FiBookOpen className="h-4 w-4" />
                    {isCurrent && (
                      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue-400/50" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-blue-600/5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
                        {edu.duration}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          Ongoing
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                      {edu.degree}
                    </h3>

                    <p className="mt-1 text-base font-medium text-slate-500 sm:text-lg">
                      {edu.institution}
                    </p>

                    <p className="mt-4 leading-7 text-slate-500">
                      {edu.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;