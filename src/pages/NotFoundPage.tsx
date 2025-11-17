import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main>
      <section className="section">
        <div className="container-balanced text-center">
          <h1 className="h1">404</h1>
          <p className="mt-2 subtle">The page you’re looking for doesn’t exist.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link className="button-ghost" to="/">Go home</Link>
            <Link className="button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]" to="/hizmetler">See services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
