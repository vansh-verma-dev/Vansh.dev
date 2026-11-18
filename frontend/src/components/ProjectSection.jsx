import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "../Data/ProjectData";

function Projects() {
  return (
    <section className="relative w-full min-h-screen pt-28 pb-20 px-6 md:px-16 bg-gray-950 text-white overflow-hidden" id="Projects">
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
      `}</style>

      {/* Background glow */}
      <div className="glow absolute top-40 -left-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p className="fade-up text-amber-400 font-semibold mb-3">My projects</p>
          <h2
            className="serif fade-up text-4xl md:text-6xl font-semibold leading-tight mb-4"
            style={{ animationDelay: "0.15s" }}
          >
            Things I've built
            <br />
            <span className="italic text-amber-400">and still building.</span>
          </h2>
          <p
            className="fade-up text-gray-400 max-w-xl leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            A mix of finished projects and ones I'm actively working on.
          </p>
        </div>

        {/* Full width project boxes */}
        <div className="flex flex-col gap-8">
          {projectsData.map((project, i) => (
            <div
              key={project.id}
              className="fade-up flex flex-col md:flex-row w-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Left: video / image */}
              <div className="md:w-1/2 aspect-video bg-gray-900">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <span className="serif text-6xl text-amber-400/40">
                      {project.title[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Right: details */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={
                      "text-xs px-3 py-1 rounded-full border " +
                      (project.status === "Completed"
                        ? "text-green-400 border-green-400/30 bg-green-400/10"
                        : "text-amber-400 border-amber-400/30 bg-amber-400/10")
                    }
                  >
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-500">{project.note}</span>
                </div>

                <h3 className="serif text-2xl md:text-3xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-amber-300 transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/20 text-sm px-5 py-2.5 rounded-full hover:border-amber-400 hover:text-amber-400 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;