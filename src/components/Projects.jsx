export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Web Application",
      stack: "React (Vite), Node.js, Express.js, MongoDB",
      description: "Built a full-stack e-commerce platform with fast page performance, user registration, shopping cart, and checkout flow.",
      highlights: [
        "Implemented user registration and login with validation and secure MongoDB storage.",
        "Built RESTful APIs for product listings, authentication, and order management.",
        "Designed responsive UI with Tailwind CSS for a seamless shopping experience."
      ]
    },
    {
      title: "SmartHire Recruitment Platform",
      stack: "React.js, Node.js, Express.js, MongoDB",
      description: "Developed a job platform connecting candidates and recruiters with role-based access control and application tracking.",
      highlights: [
        "Implemented role-based access for candidates and recruiters.",
        "Developed REST APIs for profiles, job listings, and applications.",
        "Built a responsive React interface with dynamic search and filtering."
      ]
    },
    {
      title: "Car Showroom Website",
      stack: "HTML5, CSS3",
      description: "Designed and developed a responsive car showroom website with home, listings, and contact pages.",
      highlights: [
        "Used Flexbox and CSS Grid for mobile-first layout.",
        "Ensured cross-device compatibility for mobile, tablet, and desktop.",
        "Delivered a polished visual experience with focus on clarity and accessibility."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Projects</p>
          <h2 className="section-heading mt-3">Selected work</h2>
          <p className="section-subtitle mt-4">
            These projects highlight my MERN stack experience, responsive design, and API-driven application workflows.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="section-card">
              <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-2 text-cyan-400 text-sm">{project.stack}</p>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 text-sm">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}