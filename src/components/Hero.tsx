import React from 'react'
import { site } from '@/config/site'

export default function Hero() {
  return (
    <section className="section">
      <div className="container-balanced grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="badge">New</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {site.description}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href={site.primaryCTA.href} className="button-primary">{site.primaryCTA.label}</a>
            <a href={site.secondaryCTA.href} className="button-ghost">{site.secondaryCTA.label}</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-gradient-to-br from-primary-50 to-slate-50">
            <div className="p-6 text-slate-600">Drop a screenshot or product mockup here ✨</div>
          </div>
        </div>
      </div>
    </section>
  )
}
