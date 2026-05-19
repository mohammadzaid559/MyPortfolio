import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="hero-bg min-h-screen py-24 flex items-center">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-5 text-center">
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-200"
        >
          Full Stack Web Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl font-semibold tracking-tight text-slate-100 sm:text-6xl"
        >
          Mohammad Zaid
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-description mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300"
        >
          CSE student specializing in responsive MERN applications with React Vite, Tailwind CSS, and REST API architecture.
        </motion.p>

        <div className="btn-group">
          <a href="/zaidfinalresumeMERN.pdf" download className="btn-primary">
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            Work with me
          </a>
        </div>
      </div>
    </section>
  );
}