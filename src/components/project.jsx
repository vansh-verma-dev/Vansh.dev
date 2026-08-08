import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// 👉 Replace this data with your real projects
const projects = [
  {
    title: "Prajanya-HelthCare E-commerce",
    description:
      "A full-stack e-commerce platform with product listings, cart, secure checkout and an admin dashboard to manage orders.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    image:
      "https://i.pinimg.com/1200x/76/27/3d/76273dd8378c16df9aa23f4483f49231.jpg",
    live: "https://prajanya-healthcares.onrender.com/",
    github: "#",
    accent: "#22d3ee",
  },
  {
    title: "Vogue Fashion Website",
    description:
      "A modern fashion e-commerce website where users can buy products and also add their own products for sale.",
    tags: ["HTML" , "CSS" , "JS"],
    image:
      "https://i.pinimg.com/1200x/20/78/09/20780957dc1fbdade8e5b42f2f92c4d2.jpg",
    live: "https://vogue-fashion-vansh.onrender.com",
    github: "https://github.com/vansh-verma-dev/vogue-fashion-vansh",
    accent: "#8b5cf6",
  },
  {
    title: "TrueBook Accounting Web",
    description:
      "A content publishing platform with markdown editor, authentication, comments and a clean reading experience.",
    tags: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
    image:
      "https://i.pinimg.com/736x/6a/df/57/6adf579831d8cc436e4617e528211e30.jpg",
    live: "https://truebook.onrender.com/",
    github: "https://github.com/vansh-verma-dev/Truebook",
    accent: "#f97316",
  },
  {
    title: "JSMaster Learning Platform",
    description:
      "A responsive weather app that fetches live data from a public API and displays forecasts with smooth transitions.",
    tags: ["JavaScript", "REST API", "CSS3"],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop",
    live: "https://jsmaster-app.onrender.com",
    github: "https://github.com/vansh-verma-dev/JSMaster-App",
    accent: "#4ade80",
  },
];

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="relative bg-black py-24 px-6 text-white overflow-hidden">
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
      <div className="pointer-events-none absolute -top-24 -right-16 w-[380px] h-[380px] rounded-full    blob" />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-cyan-500/10 blur-[110px] blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 rise">
          <p className="uppercase tracking-[5px] text-blue-500 font-semibold">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Projects I've Built
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-8">
            A few things I've shipped — from full-stack apps to smaller
            tools, built end-to-end with modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const isHovered = hovered === project.title;
            return (
              <div
                key={project.title}
                onMouseEnter={() => setHovered(project.title)}
                onMouseLeave={() => setHovered(null)}
                className="rise group relative bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  borderColor: isHovered ? project.accent : undefined,
                  boxShadow: isHovered
                    ? `0 25px 50px -20px ${project.accent}55`
                    : "none",
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-6 mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                      style={{ color: isHovered ? project.accent : "#e5e7eb" }}
                    >
                      <FaExternalLinkAlt size={13} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;