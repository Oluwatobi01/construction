import React from 'react'
import { site } from '@/config/site'

export default function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <section id="faq" className="section">
      <div className="container-balanced">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-4xl">FAQ</h2>
          <p className="mt-2 text-[color:var(--muted-foreground)]">Answers to common questions.</p>
        </div>
        <div className="mt-8 divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          {site.faqs.map((f: any, i: number) => {
            const isOpen = open === i
            return (
              <div key={i} className="">
                <button
                  type="button"
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div>
                    <h3 className="font-semibold text-[color:var(--foreground)]">{f.q}</h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`h-5 w-5 mt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-header-${i}`}
                  className={`grid transition-all duration-300 ease-out px-6 ${isOpen ? 'grid-rows-[1fr] py-0' : 'grid-rows-[0fr]'} overflow-hidden`}
                >
                  <div className="min-h-0">
                    <p className="pb-6 text-sm text-[color:var(--muted-foreground)]">{f.a}</p>
                  </div>
                </div>
                {i < site.faqs.length - 1 && <div className="mx-6 h-px bg-[var(--border)]" />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
