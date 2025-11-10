import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">Let’s collaborate</h2>
        <p className="mt-3 text-gray-600">Have a project in mind? I’m open to freelance, full-time roles, and collaborations.</p>

        <div className="mt-8 grid grid-cols-1 gap-3 max-w-md mx-auto">
          <a href="mailto:hello@yourdomain.dev" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-emerald-400 hover:bg-emerald-300 transition-colors">Email Me</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors">GitHub</a>
        </div>

        <p className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Your Name — Built with React + Tailwind</p>
      </div>
    </section>
  )
}
