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
    accent: "#0891b2",
  },
  {
    title: "Vogue Fashion Website",
    description:
      "A modern fashion e-commerce website where users can buy products and also add their own products for sale.",
    tags: ["HTML", "CSS", "JS"],
    image:
      "https://i.pinimg.com/1200x/20/78/09/20780957dc1fbdade8e5b42f2f92c4d2.jpg",
    live: "https://vogue-fashion-vansh.onrender.com",
    github: "https://github.com/vansh-verma-dev/vogue-fashion-vansh",
    accent: "#7c3aed",
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
    accent: "#ea580c",
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
    accent: "#16a34a",
  },
];

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="relative bg-white py-24 px-6 text-slate-900 overflow-hidden">
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
      <div className="pointer-events-none absolute -top-24 -right-16 w-[380px] h-[380px] rounded-full bg-blue-200/30 blur-[110px] blob" />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-indigo-200/30 blur-[110px] blob"
        style={{ animationDelay: "4s" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0000000a_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 tracking-tight">
            Projects{" "}
            <span className="bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              I've Built
            </span>
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto leading-8 text-lg">
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
                className="rise group relative bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  borderColor: isHovered ? project.accent : undefined,
                  boxShadow: isHovered
                    ? `0 25px 50px -20px ${project.accent}40`
                    : undefined,
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-6 mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1"
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
                      style={{ color: isHovered ? project.accent : "#334155" }}
                    >
                      <FaExternalLinkAlt size={13} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
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