// ---------------- components/Typing.jsx ----------------
'use client'
import { useEffect, useState } from 'react'

const texts = [
  'MERN Stack Developer',
  'React • Node • MongoDB',
  'Building scalable web apps'
]

export default function Typing() {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (char < texts[index].length) {
        setText(prev => prev + texts[index][char])
        setChar(char + 1)
      } else {
        setTimeout(() => {
          setText('')
          setChar(0)
          setIndex((index + 1) % texts.length)
        }, 1200)
      }
    }, 80)
    return () => clearTimeout(timeout)
  }, [char, index])

  return <p className="text-neon text-lg">&gt; {text}_</p>
}
