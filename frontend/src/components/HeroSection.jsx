import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaDownload,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";
import cv from "../assits/Vansh_Verma_MERN_CV.pdf";


function HeroSection() {
  const frontend = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind", "Bootstrap"];
  const backend = ["Node.js", "Express.js", "MongoDB", "REST API", "JWT"];

  const card =
    "w-60 p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur shadow-2xl shadow-black/40";
  const chip =
    "text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300";

  return (
    <section className="relative w-full min-h-screen pt-20 bg-gray-950 text-white overflow-hidden flex items-center justify-center">
      <style>{`
        .serif { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .fade-up { opacity: 0; animation: fadeUp 0.8s ease forwards; }
        .glow { animation: glow 6s ease-in-out infinite; }
        .float-a { animation: float 5s ease-in-out infinite; }
        .float-b { animation: float 6s ease-in-out infinite 1s; }
      `}</style>

      {/* Background glow */}
      <div className="glow absolute w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>

      {/* Left card - Frontend */}
      <div className="hidden xl:block absolute left-8 2xl:left-24 top-1/3 z-10">
        <div className={`${card} float-a -rotate-6`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center text-lg">
              <FaLaptopCode />
            </div>
            <div>
              <p className="font-semibold leading-tight">Frontend</p>
              <p className="text-xs text-gray-400">Clean & responsive UI</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {frontend.map((item) => (
              <span key={item} className={chip}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right card - Backend */}
      <div className="hidden xl:block absolute right-8 2xl:right-24 top-1/2 z-10">
        <div className={`${card} float-b rotate-6`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center text-lg">
              <FaServer />
            </div>
            <div>
              <p className="font-semibold leading-tight">Backend</p>
              <p className="text-xs text-gray-400">Secure & scalable APIs</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {backend.map((item) => (
              <span key={item} className={chip}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Open to work badge */}
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Open to work
        </div>

        <h1
          className="serif fade-up text-5xl md:text-7xl font-semibold leading-tight"
          style={{ animationDelay: "0.15s" }}
        >
          Building smart
        </h1>

        <h1
          className="serif fade-up text-5xl md:text-7xl font-semibold italic text-amber-400 leading-tight mb-6"
          style={{ animationDelay: "0.3s" }}
        >
          full-stack web apps.
        </h1>

        <p
          className="fade-up text-gray-400 text-base md:text-lg leading-relaxed mb-8"
          style={{ animationDelay: "0.45s" }}
        >
          I'm <span className="text-white font-medium">Vansh Verma</span>, a MERN
          Stack Developer who turns ideas into fast, responsive and secure web
          applications. I've built full-stack projects with REST APIs and JWT
          authentication, and I'm now looking for an entry-level Full Stack /
          MERN Developer role where I can contribute, learn and grow with a
          great team.
        </p>

        <div
          className="fade-up flex flex-wrap gap-3 justify-center"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            to="/Projects"
            className="group flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition"
          >
            View Projects
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </Link>

          <a
            href={cv}
            download="Vansh_Verma_CV.pdf"
            className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:border-amber-400 hover:text-amber-400 transition"
          >
            Download CV <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;