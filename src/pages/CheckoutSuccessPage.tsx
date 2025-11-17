import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function CheckoutSuccessPage() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const plan = params.get('plan')

  return (
    <main>
      <section className="section">
        <div className="container-balanced max-w-2xl text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--muted)]/70">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-green-600">
              <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="h2 mt-4 text-[color:var(--foreground)]">Payment successful</h1>
          <p className="mt-2 subtle">Thank you{plan ? ` for choosing the ${plan} plan` : ''}! Your payment has been processed. A receipt has been sent to your email.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/" className="button-ghost">Go Home</Link>
            <Link to="/hizmetler" className="button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]">Explore Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
