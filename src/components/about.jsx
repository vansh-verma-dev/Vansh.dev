import React from "react";

function About() {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "40+", label: "Projects Shipped" },
    { value: "20+", label: "Happy Clients" },
    { value: "5", label: "Certifications" },
  ];

  return (
    <div  
    id="about"
    className="bg-[#0a0e0f] min-h-screen w-full px-6 py-16 md:px-16 lg:px-24">
      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <p className="font-mono text-teal-400 text-sm tracking-widest mb-3">
          $ whoami
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
          About Me
        </h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
          Building products, one clean commit at a time.
        </p>
      </header>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-6xl">
        {/* Image card styled like a terminal window */}
        <div className="w-full max-w-[400px] mx-auto lg:mx-0 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111417] shadow-2xl shadow-black/40">
            {/* fake title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#15181b]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-[11px] text-gray-500 truncate">
                ~/vansh-verma/photo.jpg
              </span>
            </div>
            {/* image placeholder */}
            <div className="h-[350px] flex items-center justify-center bg-gradient-to-br from-[#151a1b] to-[#0d1112]">
              <p className="font-mono text-gray-600 text-sm">// image goes here</p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 w-full">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Hi, I'm{" "}
            <span className="text-teal-400 font-semibold">Vansh Verma</span>,
            a passionate Full Stack Developer who loves building modern,
            user-friendly web applications. For the past 3 years, I've been
            working with startups and businesses, turning their ideas into
            production-ready products.
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-5">
            I believe in clean code, thoughtful design, and
            performance-focused engineering. When I'm not writing code, you'll
            find me exploring new technologies or contributing to open-source
            projects.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i}>
                <h2 className="font-mono text-teal-400 text-2xl md:text-3xl font-bold">
                  {stat.value}
                </h2>
                <p className="text-gray-500 text-xs md:text-sm mt-1 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;