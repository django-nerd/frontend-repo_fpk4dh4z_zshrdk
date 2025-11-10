import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* non-blocking gradient overlays to enhance contrast */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-white/70">Frontend • UI Engineering</p>
        <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight">Crafting modern, playful interfaces that ship to production</h1>
        <p className="mt-5 text-white/80 max-w-2xl mx-auto">I design and build interactive web experiences with a focus on clarity, performance, and delightful details.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-emerald-400 hover:bg-emerald-300 transition-colors">View Work</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors">Contact</a>
        </div>
      </div>
    </section>
  )
}
