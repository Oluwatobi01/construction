import React from 'react'
import { site } from '@/config/site'
import ThemeToggle from './ThemeToggle'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close menu on route change and lock scroll when open
  React.useEffect(() => { setOpen(false) }, [location])
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-40 navbar-surface">
      <nav className="navbar-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-primary-600 to-[var(--accent)] text-white">M</span>
          <span>{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {site.nav.map((item) => {
            const isPath = item.href.startsWith('/')
            return isPath ? (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) => `text-sm ${isActive ? 'text-[color:var(--foreground)]' : 'text-[color:var(--foreground)]/80 hover:text-[color:var(--foreground)]'}`}
              >
                {item.label}
              </NavLink>
            ) : (
              <a key={item.label} href={item.href} className="text-sm text-[color:var(--foreground)]/80 hover:text-[color:var(--foreground)]">
                {item.label}
              </a>
            )
          })}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href={site.secondaryCTA.href} className="button-ghost">{site.secondaryCTA.label}</a>
          <a href={site.primaryCTA.href} className="button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]">{site.primaryCTA.label}</a>
        </div>
        <div className="hidden md:flex md:ml-2">
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="button-ghost w-10 h-10 p-0 flex items-center justify-center"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`h-5 w-5 ${open ? 'hidden' : ''}`}>
              <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`h-5 w-5 ${open ? '' : 'hidden'}`}>
              <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile panel fullscreen */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-16 z-50 bg-[color:var(--background)]/95 backdrop-blur-md border-t border-[var(--border)] transition-all duration-200 ${open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="navbar-container py-6 flex flex-col gap-4" role="menu">
          <h2 id="mobile-menu-title" className="sr-only">Main navigation</h2>
          <div className="flex flex-col gap-2">
            {site.nav.map((item) => {
              const isPath = item.href.startsWith('/')
              return isPath ? (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) => `py-3 text-lg ${isActive ? 'text-[color:var(--foreground)]' : 'text-[color:var(--foreground)]/90'}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ) : (
                <a key={item.label} href={item.href} className="py-3 text-[color:var(--foreground)] text-lg" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              )
            })}
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <Link to="/pricing" className="button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] text-center" onClick={() => setOpen(false)}>
              {site.primaryCTA.label}
            </Link>
            <Link to="/features" className="button-ghost text-center" onClick={() => setOpen(false)}>
              {site.secondaryCTA.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
