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
  { name: "HTML5", icon: <FaHtml5 />, color: "#f97316", glow: "rgba(249,115,22,0.35)" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#3b82f6", glow: "rgba(59,130,246,0.35)" },
  { name: "JavaScript", icon: <FaJs />, color: "#facc15", glow: "rgba(250,204,21,0.35)" },
  { name: "React.js", icon: <FaReact />, color: "#22d3ee", glow: "rgba(34,211,238,0.35)" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#22c55e", glow: "rgba(34,197,94,0.35)" },
  { name: "Express.js", icon: <SiExpress />, color: "#e5e7eb", glow: "rgba(229,231,235,0.25)" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4ade80", glow: "rgba(74,222,128,0.35)" },
  { name: "REST API", icon: <SiPostman />, color: "#fb923c", glow: "rgba(251,146,60,0.35)" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", glow: "rgba(56,189,248,0.35)" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#8b5cf6", glow: "rgba(139,92,246,0.35)" },
];

function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="relative bg-[#0a0e0f] py-24 px-6 text-white overflow-hidden">
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
      `}</style>

      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-16 w-[380px] h-[380px] rounded-full  blur-[110px] blob" />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-cyan-500/10 blur-[110px] blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 rise">
          <p className="uppercase tracking-[5px] text-blue-500 font-semibold">
            My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-8">
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
                className="rise group relative bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${i * 0.06}s`,
                  borderColor: isHovered ? skill.color : undefined,
                  boxShadow: isHovered
                    ? `0 20px 40px -15px ${skill.glow}`
                    : "none",
                }}
              >
                <div
                  className="text-6xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>

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