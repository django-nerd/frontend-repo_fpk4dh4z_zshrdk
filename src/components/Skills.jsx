import React from 'react'

const skills = [
  { group: 'Core', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Vite'] },
  { group: 'UI', items: ['Tailwind CSS', 'Radix UI', 'Framer Motion'] },
  { group: 'Quality', items: ['Accessibility', 'Testing', 'Performance'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Skills</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Focused on building robust interfaces with clean architecture and thoughtful details.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-gray-200 p-6 hover:border-gray-300 transition-colors">
              <h3 className="text-base font-medium text-gray-900">{s.group}</h3>
              <ul className="mt-3 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
