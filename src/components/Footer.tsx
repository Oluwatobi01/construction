import React from 'react'
import { site } from '@/config/site'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container-balanced py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary-600 text-white text-xs">M</span>
          <span>{site.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-primary-700">Features</a>
          <a href="#pricing" className="hover:text-primary-700">Pricing</a>
          <a href="#faq" className="hover:text-primary-700">FAQ</a>
        </div>
        <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
      </div>
    </footer>
  )
}
