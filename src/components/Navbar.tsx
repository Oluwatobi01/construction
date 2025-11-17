import React from 'react'
import { site } from '@/config/site'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
      <nav className="container-balanced flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary-600 text-white">M</span>
          <span>{site.name}</span>
        </a>
        <div className="hidden sm:flex items-center gap-6">
          {site.nav.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-700 hover:text-primary-700">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a href={site.secondaryCTA.href} className="button-ghost">{site.secondaryCTA.label}</a>
          <a href={site.primaryCTA.href} className="button-primary">{site.primaryCTA.label}</a>
        </div>
      </nav>
    </header>
  )
}
