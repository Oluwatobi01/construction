import React from 'react'

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container-balanced max-w-3xl">
          <h1 className="h1 text-[color:var(--foreground)]">About Us</h1>
          <p className="mt-4 subtle">We craft fast, conversion-focused marketing sites so teams can launch quickly and iterate with confidence.</p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Our philosophy</h3>
              <p className="mt-2 subtle">Design systems and sensible defaults reduce friction. We focus on performance, accessibility, and maintainability.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold">What we deliver</h3>
              <p className="mt-2 subtle">Beautiful hero sections, clear value props, pricing with trust signals, and smooth handoff to deployment.</p>
            </div>
          </div>

          <div className="mt-10 card p-6">
            <h3 className="text-lg font-semibold">Our stack</h3>
            <ul className="mt-2 list-disc pl-5 subtle">
              <li>React + Vite + TypeScript</li>
              <li>Tailwind CSS with design tokens (OKLCH)</li>
              <li>Accessible components, dark mode, and routing</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
