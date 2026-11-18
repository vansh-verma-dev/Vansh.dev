import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaMicrosoft,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Skill() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#f97316" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#3b9cf5" },
    { name: "JavaScript", icon: <FaJs />, color: "#facc15" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#60a5fa" },
    { name: "React.js", icon: <FaReact />, color: "#61dafb" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#a78bfa" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#6cc24a" },
    { name: "Express.js", icon: <SiExpress />, color: "#e5e7eb" },
    { name: "REST API", icon: <TbApi />, color: "#2dd4bf" },
    { name: "JWT", icon: <SiJsonwebtokens />, color: "#f472b6" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4ade80" },
    { name: "Mongoose", icon: <SiMongoose />, color: "#f87171" },
    { name: "Git", icon: <FaGitAlt />, color: "#fb7185" },
    { name: "GitHub", icon: <FaGithub />, color: "#e5e7eb" },
    { name: "Figma", icon: <FaFigma />, color: "#c084fc" },
    { name: "MS Office", icon: <FaMicrosoft />, color: "#fb923c" },
  ];

  return (
    <section className="relative w-full min-h-screen pt-28 pb-20 px-6 md:px-16 bg-gray-950 text-white overflow-hidden" id="Skill">
      <style>{`
        .serif { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
        .fade-up { opacity: 0; animation: fadeUp 0.8s ease forwards; }
        .glow { animation: glow 7s ease-in-out infinite; }

        .skill-box:hover {
          border-color: var(--c);
          box-shadow: 0 0 28px color-mix(in srgb, var(--c) 55%, transparent);
        }
      `}</style>

      {/* Background glow */}
      <div className="glow absolute top-32 -right-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p className="fade-up text-amber-400 font-semibold mb-3">My skills</p>
          <h2
            className="serif fade-up text-4xl md:text-6xl font-semibold leading-tight mb-4"
            style={{ animationDelay: "0.15s" }}
          >
            Tools I use to
            <br />
            <span className="italic text-amber-400">build things.</span>
          </h2>
          <p
            className="fade-up text-gray-400 max-w-xl leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            A complete MERN stack toolkit, from designing the interface to
            building APIs and storing data.
          </p>
        </div>

        {/* All skills in one grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="fade-up"
              style={{ animationDelay: `${0.4 + i * 0.05}s` }}
            >
              <div
                className="skill-box group flex flex-col items-center justify-center gap-3 w-28 sm:w-32 h-28 rounded-2xl bg-white/5 backdrop-blur border border-white/10 transition duration-300 hover:-translate-y-1"
                style={{ "--c": skill.color }}
              >
                <span
                  className="text-4xl transition duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <span className="text-xs text-gray-300">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/Projects"
            className="fade-up group inline-flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition"
            style={{ animationDelay: "1.3s" }}
          >
            See what I've built
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Skill;