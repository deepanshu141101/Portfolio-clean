// ---------------- components/Navbar.jsx ----------------
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const links = [
  { name: 'Home', href: '/', type: 'page' },
  { name: 'Skills', href: '/#skills', type: 'hash' },
  { name: 'Experience', href: '/#experience', type: 'hash' },
  { name: 'Projects', href: '/projects', type: 'page' },
  { name: 'Contact', href: '/#contact', type: 'hash' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-lg border border-gray-800 px-6 py-3 rounded-full"
    >
      <ul className="flex gap-6 text-sm">
        {links.map(link => (
          <li key={link.name}>
            {link.type === 'page' ? (
              <Link
                href={link.href}
                className="hover:text-neon transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                href={link.href}
                className="hover:text-neon transition-colors"
              >
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}