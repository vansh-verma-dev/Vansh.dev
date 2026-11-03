import { useState, useEffect } from "react";
import { FaAward, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import certificates from "../Data/certificates.js"

export default function Achievements() {
  const [selected, setSelected] = useState(null);

  
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="achievements" className="bg-white px-4 py-20 text-slate-800">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Certificates & <span className="text-indigo-600">Achievements</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Meri learning journey ke certificates aur internships.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group overflow-hidden rounded-2xl shadow-sm border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-indigo-500/60"
            >
              {/* Certificate image */}
              <button
                onClick={() => setSelected(cert)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-100"
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} - ${cert.issuer}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                  Click to view
                </span>
              </button>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 rounded-lg bg-indigo-500/10 p-2 text-indigo-600">
                    <FaAward />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{cert.title}</h3>
                    <p className="text-sm text-slate-600">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Verify certificate"
                      className="mt-1 text-slate-600 transition hover:text-indigo-600"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white p-3"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
            >
              <FaTimes />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full rounded-xl"
            />
            <p className="p-3 text-center text-sm text-slate-600">
              {selected.title} — {selected.issuer}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}