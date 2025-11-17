import React from 'react'
import { site } from '@/config/site'

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-radial from-primary-300/30 via-primary-200/20 to-transparent blur-3xl" />
      <div className="container-balanced grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="badge">New</span>
          <h1 className="h1 mt-4 text-[color:var(--foreground)]">
            <span className="bg-gradient-to-tr from-primary-600 to-[var(--accent)] bg-clip-text text-transparent">{site.tagline}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 subtle max-w-xl">
            {site.description}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href={site.primaryCTA.href} className="button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]">{site.primaryCTA.label}</a>
            <a href={site.secondaryCTA.href} className="button-ghost">{site.secondaryCTA.label}</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-sm subtle">
            <div><div className="text-2xl font-bold text-[color:var(--foreground)]">2m</div><div>Setup</div></div>
            <div><div className="text-2xl font-bold text-[color:var(--foreground)]">95%</div><div>FCP <span className="subtle">(<span className="link-underline">Lighthouse</span>)</span></div></div>
            <div><div className="text-2xl font-bold text-[color:var(--foreground)]">+3x</div><div>Conversion</div></div>
          </div>
        </div>
        <div className="relative">
          <div className="card card-hover border border-slate-100/70 overflow-hidden">
            <img src="/images/hero-product.svg" alt="Product UI preview" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
