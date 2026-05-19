export default function Education() {
  const education = [
    {
      title: "Bachelor of Technology (B.Tech) – Computer Science Engineering",
      institution: "Anjuman College of Engineering & Technology",
      years: "2022 – 2026",
      details: "Comprehensive coursework in algorithms, data structures, web development, and software engineering."
    },
    {
      title: "HSC (12th Grade)",
      institution: "M.M Rabbani High School and Junior College",
      years: "2021 – 2022",
      details: "Completed Maharashtra State Board curriculum with a strong foundation in science and mathematics."
    },
    {
      title: "SSC (10th Grade)",
      institution: "M.M Rabbani High School and Junior College",
      years: "2019 – 2020",
      details: "Graduated from Maharashtra State Board with a focus on core academics and foundational skills."
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Education</p>
          <h2 className="section-heading mt-3">Academic background</h2>
          <p className="section-subtitle mt-4 text-slate-300">
            Formal education in computer science engineering complemented by practical web development experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <div key={item.title} className="section-card">
              <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-cyan-400">{item.institution}</p>
              <p className="mt-1 text-sm text-slate-400">{item.years}</p>
              <p className="mt-4 text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}