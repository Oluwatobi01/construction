import React from 'react'
import { site } from '@/config/site'

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container-balanced">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-4xl">Pricing</h2>
          <p className="mt-2 text-[color:var(--muted-foreground)]">Simple, transparent plans that scale with you.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.plans.map((p) => (
            <div key={p.name} className={`card card-hover border relative ${p.highlighted ? 'border-primary-300 ring-2 ring-primary-200/60' : 'border-slate-100'} p-6` }>
              {p.highlighted && <div className="absolute inset-x-0 -top-2 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{p.name}</h3>
                <div className="text-2xl font-bold text-[color:var(--foreground)]">{p.price}</div>
              </div>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{p.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--foreground)]/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary-600">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 block w-full text-center ${p.highlighted ? 'button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]' : 'button-ghost'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
