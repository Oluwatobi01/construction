import React from 'react'
import { site } from '@/config/site'

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-balanced">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">FAQ</h2>
          <p className="mt-2 text-slate-600">Answers to common questions.</p>
        </div>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {site.faqs.map((f: any, i: number) => (
            <div key={i} className="p-6">
              <h3 className="font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
