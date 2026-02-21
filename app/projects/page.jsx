"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-32">
      <Navbar />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-12"
      >
        <span className="text-neon">//</span> Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="border border-neon p-6 rounded-xl shadow-glow"
        >
          <h3 className="text-xl mb-2">
            Portfolio <span className="text-neon">(This Website)</span>
          </h3>

          <p className="text-gray-400 mb-4">
            A personal developer portfolio built using Next.js (App Router),
            Tailwind CSS, and Framer Motion. Fully responsive and deployed on
            Vercel.
          </p>

          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/deepanshu141101/Portfolio-clean"
              target="_blank"
              className="text-neon underline"
            >
              GitHub →
            </a>

            <a
              href="https://portfolio-clean-eight.vercel.app/"
              target="_blank"
              className="text-neon underline"
            >
              Live →
            </a>
          </div>
        </motion.div>
        {/* Project 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="border border-neon p-6 rounded-xl"
        >
          <h3 className="text-xl mb-2">Chatbot Application</h3>
          <p className="text-gray-400 mb-4">
            Python NLP chatbot with 50+ intents and smart responses.
          </p>
          <a
            href="https://github.com/deepanshu141101"
            target="_blank"
            className="text-neon"
          >
            View on GitHub →
          </a>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="border border-neon p-6 rounded-xl"
        >
          <h3 className="text-xl mb-2">Music Web App</h3>
          <p className="text-gray-400 mb-4">
            React-based music platform with modern UI and smooth UX.
          </p>
          <a
            href="https://github.com/deepanshu141101"
            target="_blank"
            className="text-neon"
          >
            View on GitHub →
          </a>
        </motion.div>
      </div>
    </main>
  );
}
