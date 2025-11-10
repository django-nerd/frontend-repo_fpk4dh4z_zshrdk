import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-center gap-6 text-sm">
        <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
        <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
        <a href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors">Skills</a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
      </nav>
    </header>
  )
}
