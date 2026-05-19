export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Contact</p>
          <h2 className="section-heading mt-3">Let's work together</h2>
          <p className="section-subtitle mt-4">
            Send a message to discuss new projects, collaborations, or anything web-related.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="section-card space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Location</p>
              <p className="mt-2 text-slate-300">Nagpur, India</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Phone</p>
              <p className="mt-2 text-slate-300">+91 8007145819</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Email</p>
              <p className="mt-2 text-slate-300">mohammadzaid559@gmail.com</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Links</p>
              <p className="mt-2 text-slate-300">
                <a href="https://github.com/mohammadzaid559" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">
                  github.com/mohammadzaid559
                </a>
              </p>
              <p className="mt-2 text-slate-300">
                <a href="https://linkedin.com/in/mohammad-zaid-b3010b369" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">
                  linkedin.com/in/mohammad-zaid-b3010b369
                </a>
              </p>
            </div>
          </div>

          <div className="section-card">
            <h3 className="text-xl font-semibold text-slate-100">Send a message</h3>
            <p className="mt-4 text-slate-300">
              I am open to internships, freelance work, and collaboration on MERN stack applications. Send a brief message and I will reply soon.
            </p>
            <div className="mt-6 space-y-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-slate-200">
              <p>
                <span className="font-semibold text-slate-100">Email:</span> mohammadzaid559@gmail.com
              </p>
              <p>
                <span className="font-semibold text-slate-100">Phone:</span> +91 8007145819
              </p>
              <p>
                <span className="font-semibold text-slate-100">GitHub:</span>{" "}
                <a href="https://github.com/mohammadzaid559" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">
                  github.com/mohammadzaid559
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}