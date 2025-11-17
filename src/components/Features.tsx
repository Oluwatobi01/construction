import React from 'react'
import { site } from '@/config/site'

export default function Features() {
  return (
    <section id="features" className="section bg-[var(--muted)]">
      <div className="container-balanced">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-4xl">Everything you need</h2>
          <p className="mt-2 text-[color:var(--muted-foreground)]">A streamlined toolkit to launch quickly and scale with confidence.</p>
        </div>
        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.features.map((f) => (
            <div key={f.title} className="card card-hover border border-slate-100 p-6">
              <div className="h-10 w-10 rounded-xl bg-[color:var(--muted)]/60 flex items-center justify-center text-lg">
                <img src={`/images/feature-${(site.features.indexOf(f)%3)+1}.svg`} alt="" className="h-6 w-6" />
              </div>
              <dt className="mt-4 font-semibold text-[color:var(--foreground)]">{f.title}</dt>
              <dd className="mt-2 text-sm subtle">{f.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
