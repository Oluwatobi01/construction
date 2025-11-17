import React from 'react'
import { site } from '@/config/site'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-slate-50">
      <div className="container-balanced">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What customers say</h2>
          <p className="mt-2 text-slate-600">Social proof builds trust and boosts conversions.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {site.testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600">— {t.author}{t.role ? `, ${t.role}` : ''}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
