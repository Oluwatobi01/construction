import React from 'react'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'

export default function PricingPage() {
  return (
    <main>
      <section className="section">
        <div className="container-balanced">
          <h1 className="h1 text-[color:var(--foreground)]">Pricing</h1>
          <p className="mt-4 subtle max-w-2xl">Simple, transparent plans. Start free, upgrade when you grow. No hidden fees.</p>
        </div>
      </section>
      <Pricing />
      <section className="section bg-[var(--muted)]">
        <div className="container-balanced">
          <h2 className="h2">Loved by builders</h2>
          <p className="mt-2 subtle">Hear what customers say about shipping faster with our template.</p>
          <div className="mt-8">
            <Testimonials />
          </div>
        </div>
      </section>
    </main>
  )
}
