import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function CheckoutCancelPage() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const plan = params.get('plan')

  return (
    <main>
      <section className="section">
        <div className="container-balanced max-w-2xl text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--muted)]/70">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-red-600">
              <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="h2 mt-4 text-[color:var(--foreground)]">Checkout canceled</h1>
          <p className="mt-2 subtle">Your checkout{plan ? ` for the ${plan} plan` : ''} was canceled. You can continue browsing or try again.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/pricing" className="button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]">Back to Pricing</Link>
            <Link to="/" className="button-ghost">Go Home</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
