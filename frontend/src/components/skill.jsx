import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#f97316", glow: "rgba(249,115,22,0.25)" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#3b82f6", glow: "rgba(59,130,246,0.25)" },
  { name: "JavaScript", icon: <FaJs />, color: "#eab308", glow: "rgba(234,179,8,0.25)" },
  { name: "React.js", icon: <FaReact />, color: "#0891b2", glow: "rgba(8,145,178,0.25)" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#16a34a", glow: "rgba(22,163,74,0.25)" },
  { name: "Express.js", icon: <SiExpress />, color: "#1f2937", glow: "rgba(31,41,55,0.15)" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#15803d", glow: "rgba(21,128,61,0.25)" },
  { name: "REST API", icon: <SiPostman />, color: "#ea580c", glow: "rgba(234,88,12,0.25)" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#0284c7", glow: "rgba(2,132,199,0.25)" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7c3aed", glow: "rgba(124,58,237,0.25)" },
];

function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="relative bg-white py-24 px-6 text-slate-900 overflow-hidden">
      <style>{`
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.15); }
          66% { transform: translate(-30px, 20px) scale(0.9); }
        }
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .blob { animation: floatBlob 16s ease-in-out infinite; }
        .rise { animation: riseIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          .blob, .rise { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-16 w-[380px] h-[380px] rounded-full bg-blue-200/30 blur-[110px] blob" />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-indigo-200/30 blur-[110px] blob"
        style={{ animationDelay: "4s" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0000000a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 tracking-tight">
            Technologies{" "}
            <span className="bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              I Work With
            </span>
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto leading-8 text-lg">
            I build fast, responsive and scalable web applications using
            modern frontend and backend technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => {
            const isHovered = hovered === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
                className="rise group relative bg-white border border-slate-200 shadow-sm rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${i * 0.06}s`,
                  borderColor: isHovered ? skill.color : undefined,
                  boxShadow: isHovered
                    ? `0 20px 40px -15px ${skill.glow}`
                    : undefined,
                }}
              >
                <div
                  className="text-6xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>

                {/* soft glow behind icon on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${skill.glow}, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;