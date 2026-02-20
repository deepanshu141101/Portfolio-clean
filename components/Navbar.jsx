// ---------------- components/Navbar.jsx ----------------
'use client'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-lg border border-gray-800 px-6 py-3 rounded-full"
    >
      <ul className="flex gap-6 text-sm">
        {['Home','Skills','Experience','Projects','Contact'].map(i => (
          <li key={i} className="hover:text-neon cursor-pointer">{i}</li>
        ))}
      </ul>
    </motion.nav>
  )
}
