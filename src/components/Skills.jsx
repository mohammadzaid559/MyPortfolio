export default function Skills() {
  const skills = {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
    ],
    Backend: ["Node.js", "Express.js", "RESTful API Design"],
    Database: ["MongoDB", "Mongoose", "PostgreSQL"],
    Tools: ["Git", "GitHub", "VS Code", "Postman"],
  };

  return (
    <section id="skills" className="py-20 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-5">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Skills</p>
          <h2 className="section-heading mt-2">Technical skills</h2>
          <p className="section-subtitle mt-4 text-slate-300">
            Expert in modern frontend, backend, database, and tooling technologies used to deliver polished, production-ready web applications.
          </p>
        </div>

        {/* Main Grid (ONE ROW on large screens) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="section-card p-6">
              <div className="mb-5 rounded-full bg-slate-900/90 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-sm shadow-cyan-500/yes10">
                {category}
              </div>

              <div className="grid gap-3">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-cyan-400 hover:text-cyan-100"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}