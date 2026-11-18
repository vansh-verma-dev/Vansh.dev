import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function About() {
  const facts = [
    { label: "Location", value: "Meerut, Uttar Pradesh" },
    { label: "Studying", value: "BCA, Mahaveer University" },
    { label: "Focus", value: "MERN Stack Development" },
    { label: "Looking for", value: "Entry-level Full Stack role" },
  ];

  return (
    <section className="relative w-full min-h-screen pt-28 pb-20 px-6 md:px-16 bg-gray-950 text-white overflow-hidden" id="About">
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
      <div className="glow absolute top-20 -left-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <p className="fade-up text-amber-400 font-semibold mb-3">About me</p>
          <h2
            className="serif fade-up text-4xl md:text-6xl font-semibold leading-tight"
            style={{ animationDelay: "0.15s" }}
          >
            Developer by passion,
            <br />
            <span className="italic text-amber-400">learner by habit.</span>
          </h2>
        </div>

        <p
          className="fade-up text-gray-400 leading-relaxed mb-4"
          style={{ animationDelay: "0.3s" }}
        >
          I'm <span className="text-white font-medium">Vansh Verma</span>, a MERN
          Stack developer and BCA student from Meerut. I started with HTML, CSS
          and JavaScript, then moved on to React, Node.js, Express and MongoDB to
          build complete full-stack projects.
        </p>

        <p
          className="fade-up text-gray-400 leading-relaxed mb-8"
          style={{ animationDelay: "0.4s" }}
        >
          I've built TrueBook, an accounting app inspired by Tally, ApexStore, an
          e-commerce platform, and a website for Prajanya Healthcare. My time in
          sales also taught me to communicate clearly and understand what people
          actually need.
        </p>

        {/* Quick facts */}
        <div
          className="fade-up grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-6 mb-8"
          style={{ animationDelay: "0.5s" }}
        >
          {facts.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        <Link
          to="/Contact"
          className="fade-up group inline-flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition"
          style={{ animationDelay: "0.6s" }}
        >
          Let's work together
          <FaArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  );
}

export default About;