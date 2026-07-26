function Education() {
    const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Your College Name",
    duration: "2026 - Present",
    description:
      "Currently pursuing a Bachelor of Computer Applications while strengthening my knowledge of software development, programming, and modern web technologies.",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Kripa Ram Janta Inter College",
    duration: "2024",
    description:
      "Completed Higher Secondary education with a growing passion for web development and software engineering.",
  },
  {
    degree: "Frontend Development Virtual Internship",
    institution: "CodeSoft",
    duration: "2025",
    description:
      "Completed a virtual internship focused on HTML, CSS, JavaScript, React.js and responsive web development.",
  },
];
  return (
    <section
      id="education"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-blue-500 uppercase tracking-[6px] text-sm font-semibold">
            Education
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            My Academic Journey
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto leading-8 text-lg">
            A journey of continuous learning, skill development,
            and building a strong foundation in modern web technologies.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative pl-10">

          {/* Line */}

          <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-zinc-700"></div>

          <div className="space-y-14">

            {education.map((edu, index) => (

              <div key={index} className="relative">

                {/* Dot */}

                <div className="absolute -left-[37px] top-2 h-5 w-5 rounded-full border-4 border-black bg-blue-500"></div>

                <p className="text-sm font-medium text-blue-400 tracking-wide">
                  {edu.duration}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {edu.degree}
                </h3>

                <p className="mt-1 text-lg text-zinc-300">
                  {edu.institution}
                </p>

                <p className="mt-4 text-zinc-400 leading-8">
                  {edu.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;