import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="text-white font-medium tracking-wide">AR.</a>
        <div className="flex items-center gap-6 text-sm">
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  )
}
