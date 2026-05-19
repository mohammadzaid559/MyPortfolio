export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">About</p>
          <h2 className="section-heading mt-3">Professional Summary</h2>
          <p className="section-subtitle mt-4 text-slate-300">
            Computer Science Engineering student specializing in Full Stack Web Development with hands-on experience building responsive and scalable web applications using the MERN stack.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="section-card">
            <h3 className="text-xl font-semibold text-slate-100">What I do</h3>
            <p className="mt-4 text-slate-300">
              I build responsive, end-to-end applications using React.js, Node.js, Express, MongoDB, and Tailwind CSS with a focus on clean code and scalable architecture.
            </p>
          </div>

          <div className="section-card">
            <h3 className="text-xl font-semibold text-slate-100">Why it works</h3>
            <p className="mt-4 text-slate-300">
              I combine strong frontend experience with backend API design to deliver polished user experiences and complete application workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}