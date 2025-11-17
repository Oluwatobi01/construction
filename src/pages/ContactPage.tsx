import React from 'react'

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="container-balanced max-w-2xl">
          <h1 className="h1 text-[color:var(--foreground)]">Contact</h1>
          <p className="mt-4 subtle">Tell us about your project and we’ll get back within 1–2 business days.</p>

          <form className="mt-8 card p-6 grid gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" className="mt-1 w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea className="mt-1 w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2" rows={5} placeholder="How can we help?" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs subtle">We’ll never share your information.</p>
              <button type="submit" className="button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]">Send</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
