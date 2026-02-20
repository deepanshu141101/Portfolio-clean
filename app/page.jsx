'use client'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Typing from '../components/Typing'

export default function Home() {
  return (
    <main className="relative max-w-6xl mx-auto px-6 py-32 space-y-32">
      <Navbar />

      {/* HERO */}
      <section className="space-y-6">
        <Typing />
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-neon">Deepanshu Pandey</span>
        </h1>
        <p className="text-gray-400 max-w-xl">
          Software Engineer focused on building secure, performant and scalable
          full‑stack applications.
        </p>
        <div className="flex gap-4">
          <a href="/resume.pdf" className="px-6 py-3 bg-neon text-black rounded-lg shadow-glow">Download Resume</a>
          <a href="https://github.com/deepanshu141101" target="_blank" className="px-6 py-3 border border-neon rounded-lg text-neon">GitHub</a>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="text-3xl text-neon mb-8">// Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['JavaScript','React','Node.js','MongoDB','MySQL','Python','Git','Express'].map(s => (
            <motion.div whileHover={{ scale: 1.05 }} key={s} className="border border-gray-800 p-4 rounded-xl text-center">
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-3xl text-neon mb-8">// Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl">Chatbot Application</h3>
            <p className="text-gray-400">Python NLP chatbot (50+ intents)</p>
            <a className="text-neon" href="https://github.com/deepanshu141101" target="_blank">GitHub →</a>
          </div>
          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl">Music Web App</h3>
            <p className="text-gray-400">React music platform with dynamic UI</p>
            <a className="text-neon" href="https://github.com/deepanshu141101" target="_blank">GitHub →</a>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-600">
        © {new Date().getFullYear()} Deepanshu Pandey
      </footer>
    </main>
  )
}
