import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-xl text-gray-700">About</h2>
            <p className="mt-3 text-gray-600">I build crisp, accessible interfaces with a focus on clarity and performance. My process balances design sensibility with engineering discipline—keeping things simple, fast, and maintainable.</p>
          </div>
        </section>
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
