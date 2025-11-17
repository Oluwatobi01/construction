import React from 'react'
import { site } from '@/config/site'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-balanced py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[color:var(--muted-foreground)]">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-primary-600 to-accent-500 text-white text-xs">M</span>
          <span>{site.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </div>
        <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
      </div>
    </footer>
  )
}
