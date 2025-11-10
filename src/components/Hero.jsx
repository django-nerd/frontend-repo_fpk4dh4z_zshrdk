import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle top/bottom fades that do not block interaction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm tracking-widest uppercase text-gray-600">Frontend Developer Portfolio</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-gray-900">Hi, I’m Alex — I craft clean, fast, accessible UIs</h1>
        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">Minimalist interfaces, thoughtful interactions, and production-grade code. I focus on clarity, performance, and maintainability.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">View Projects</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors">Contact</a>
        </div>
      </div>
    </section>
  )
}
