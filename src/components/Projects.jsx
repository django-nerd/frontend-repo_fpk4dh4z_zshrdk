import React from 'react'

const projects = [
  {
    title: 'Design System Starter',
    description: 'A lightweight, accessible component library built with React, Tailwind, and Radix primitives.',
    tags: ['React', 'Tailwind', 'Radix UI'],
    link: '#',
  },
  {
    title: 'Headless Commerce UI',
    description: 'Minimal storefront with cart, filters, and product pages focused on performance and UX.',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Clean metrics dashboard with live data, theming, and keyboard navigation.',
    tags: ['Vite', 'WebSockets', 'A11y'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Featured Projects</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Selected work that balances clarity, usability, and technical depth.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block rounded-2xl border border-gray-200 p-6 hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <div className="h-36 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors mb-5 flex items-center justify-center">
                <span className="text-gray-400 group-hover:text-gray-500 transition-colors">Preview</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
