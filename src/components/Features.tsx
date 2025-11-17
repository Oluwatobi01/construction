import React from 'react'
import { site } from '@/config/site'

export default function Features() {
  return (
    <section id="features" className="section bg-slate-50">
      <div className="container-balanced">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Features</h2>
          <p className="mt-2 text-slate-600">Everything you need to launch quickly and grow confidently.</p>
        </div>
        <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-2xl">{f.icon}</div>
              <dt className="mt-3 font-semibold text-slate-900">{f.title}</dt>
              <dd className="mt-2 text-sm text-slate-600">{f.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
