import { useState } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import jsMasterApp from "../assets/jsMasterApp.Banner.png";
import TrueBook from "../assets/trueBook.png";
import ApexStore from "../assets/ApexStore.png"
 
const projects = [
  {
    title: "Prajanya Healthcare",
    type: "Full-stack e-commerce",
    description:
      "A healthcare e-commerce platform with product listings, cart, secure checkout and an admin dashboard to manage orders.",
    tags: ["React", "Node.js", "Express.js", "MongoDB" , "Tailwind CSS"],
    image:
      "https://i.pinimg.com/1200x/76/27/3d/76273dd8378c16df9aa23f4483f49231.jpg",
    live: "https://prajanya-healthcares.onrender.com/",
    github: "#",
    accent: "#0e7490",
  },
  {
    title: "ApexStore",
    type: "Fashion marketplace",
    description:
      "A modern fashion store where people can buy products and also list their own products for sale.",
    tags: ["React", "Tailwind CSS",],
    image: ApexStore ,
    live: "https://apexstore-e-commerce-mdrz.onrender.com",
    github: "https://github.com/vansh-verma-dev/ApexStore_E-Commerce",
    accent: "#7c3aed",
  },
  {
    title: "TrueBook Accounting",
    type: "Accounting web app",
    description:
      "A web app that keeps accounts organised in one place, with secure login and a clean, easy-to-scan interface.",
    tags: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
    image: TrueBook ,
    github: "https://github.com/vansh-verma-dev/Truebook",
    accent: "#c2410c",
  },
  {
    title: "JSMaster",
    type: "Learning platform",
    description:
      "A JavaScript learning platform that explains concepts step by step, so beginners can go from basics to building real things.",
    tags: ["JavaScript", "REST API", "CSS3"],
    image: jsMasterApp , 
    live: "https://jsmaster-app.onrender.com",
    github: "https://github.com/vansh-verma-dev/JSMaster-App",
    accent: "#15803d",
  },
];

function ProjectCard({ project }) {
  const [broken, setBroken] = useState(false);
  const accent = project.accent || "#2563eb";
  const hasCode = project.github && project.github !== "#";

  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.25)]">
      {/* Image */}
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live demo`}
        className="relative block aspect-[16/10] overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ backgroundColor: `${accent}1a`, outlineColor: accent }}
      >
        {!broken ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            onError={() => setBroken(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="pj-display flex h-full w-full items-center justify-center text-6xl font-extrabold text-white/90"
            style={{
              background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
            }}
          >
            {project.title.charAt(0)}
          </div>
        )}
      </a>

      {/* Details */}
      <div className="flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-4">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />
          {project.type}
        </div>

        <h3 className="pj-display mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {project.title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-slate-600">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: accent, outlineColor: accent }}
          >
            View live
            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          {hasCode && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <FaGithub size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white px-4 py-20 text-slate-900 sm:px-6 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&display=swap');
        .pj-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
        @media (prefers-reduced-motion: reduce) {
          #projects * { transition: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2 className="pj-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Projects I've built
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Real apps, live on the internet. Open any project to try it, or
            read the code on GitHub.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;