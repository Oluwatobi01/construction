import React from 'react'
import { site } from '@/config/site'
import { getStripe } from '@/lib/stripe'

const PRICE_MAP: Record<string, string | undefined> = {
  Starter: import.meta.env.VITE_STRIPE_PRICE_STARTER,
  Pro: import.meta.env.VITE_STRIPE_PRICE_PRO,
  Business: import.meta.env.VITE_STRIPE_PRICE_BUSINESS,
}

function priceStringToCents(price: string): number | null {
  // Expect formats like "$29/mo" or "$9"; strip non-digits
  const match = price.replace(/[^0-9.]/g, '')
  if (!match) return null
  const dollars = parseFloat(match)
  if (Number.isNaN(dollars)) return null
  return Math.round(dollars * 100)
}

async function checkout(planName: string, planPrice: string) {
  const priceId = PRICE_MAP[planName]
  const cents = priceStringToCents(planPrice)
  const productId = import.meta.env.VITE_STRIPE_PRODUCT_ID as string | undefined
  const payload: any = priceId
    ? { priceId }
    : cents
    ? { priceData: { amount: cents, currency: 'usd', name: `${planName} Plan`, productId } }
    : null
  if (!payload) {
    alert('Stripe price is not configured and amount could not be parsed for ' + planName)
    return
  }
  try {
    const endpoint = import.meta.env.DEV ? '/api/create-checkout-session' : '/.netlify/functions/create-checkout-session'
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const body = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(body?.error || 'Failed to create session')
    const { id } = body
    const stripe = await getStripe()
    await stripe?.redirectToCheckout({ sessionId: id })
  } catch (e) {
    console.error(e)
    alert('Unable to start checkout. See console for details.')
  }
}

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container-balanced">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-4xl">Pricing</h2>
          <p className="mt-2 text-[color:var(--muted-foreground)]">Simple, transparent plans that scale with you.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.plans.map((p) => (
            <div key={p.name} className={`card card-hover border relative ${p.highlighted ? 'border-primary-300 ring-2 ring-primary-200/60' : 'border-slate-100'} p-6` }>
              {p.highlighted && <div className="absolute inset-x-0 -top-2 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{p.name}</h3>
                <div className="text-2xl font-bold text-[color:var(--foreground)]">{p.price}</div>
              </div>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{p.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--foreground)]/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary-600">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => checkout(p.name, p.price)} className={`mt-6 block w-full text-center ${p.highlighted ? 'button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]' : 'button-ghost'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
