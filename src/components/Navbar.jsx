import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl transition-colors duration-500">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-5 py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight text-slate-100">
          Portfolio
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="ml-2 inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>

        <div className={`transition-all duration-300 md:flex md:items-center md:gap-8 ${open ? "block" : "hidden"} w-full md:w-auto`}>
          <a href="#about" className="block border-b border-slate-800 py-3 text-sm text-slate-300 transition hover:text-cyan-300 md:border-none md:py-0">
            About
          </a>
          <a href="#education" className="block border-b border-slate-800 py-3 text-sm text-slate-300 transition hover:text-cyan-300 md:border-none md:py-0">
            Education
          </a>
          <a href="#skills" className="block border-b border-slate-800 py-3 text-sm text-slate-300 transition hover:text-cyan-300 md:border-none md:py-0">
            Skills
          </a>
          <a href="#projects" className="block border-b border-slate-800 py-3 text-sm text-slate-300 transition hover:text-cyan-300 md:border-none md:py-0">
            Projects
          </a>
          <a href="#contact" className="block py-3 text-sm text-slate-300 transition hover:text-cyan-300 md:py-0">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
