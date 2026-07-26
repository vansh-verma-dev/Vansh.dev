const experience = [
  {
    role: "Frontend Developer",
    company: "CodeSoft Virtual Internship",
    duration: "2025",
    description:
      "Completed a virtual internship where I built responsive web interfaces using HTML, CSS, JavaScript and React.",
  },
  {
    role: "MERN Stack Developer",
    company: "Self Learning & Personal Projects",
    duration: "2025 - Present",
    description:
      "Developing full-stack web applications using React, Node.js, Express, MongoDB and REST APIs while continuously improving development skills.",
  },
  {
    role: "Frontend Developer",
    company: "Prajanya Healthcares",
    duration: "2026 - Present",
    description:
      "Designed and developed responsive healthcare web interfaces using React and Tailwind CSS with a focus on performance and user experience.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-blue-500 uppercase tracking-[6px] text-sm font-semibold">
            Experience
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            My Professional Journey
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto leading-8 text-lg">
            My experience in frontend and full-stack development through internships,
            real-world projects and continuous learning.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative pl-10">

          <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-zinc-700"></div>

          <div className="space-y-14">

            {experience.map((item, index) => (

              <div key={index} className="relative">

                <div className="absolute -left-[37px] top-2 h-5 w-5 rounded-full border-4 border-black bg-blue-500"></div>

                <p className="text-sm font-medium text-blue-400 tracking-wide">
                  {item.duration}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {item.role}
                </h3>

                <p className="mt-1 text-lg text-zinc-300">
                  {item.company}
                </p>

                <p className="mt-4 text-zinc-400 leading-8">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;