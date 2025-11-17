import React from 'react'

export default function CTABanner() {
  return (
    <section className="section-narrow">
      <div className="container-balanced">
        <div className="card card-hover border overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="h2 text-[color:var(--foreground)]">Ready to launch faster?</h3>
                <p className="mt-2 subtle">Spin up a high-converting marketing site in minutes.</p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <a href="#pricing" className="button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] w-full sm:w-auto">Get started</a>
                <a href="#features" className="button-ghost w-full sm:w-auto">See features</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
