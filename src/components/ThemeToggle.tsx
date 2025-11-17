import React from 'react'

function setTheme(dark: boolean) {
  const root = document.documentElement
  if (dark) {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

function getInitial(): boolean {
  if (typeof window === 'undefined') return false
  const ls = localStorage.getItem('theme')
  if (ls) return ls === 'dark'
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function ThemeToggle() {
  const [dark, setDark] = React.useState(getInitial())

  React.useEffect(() => {
    setTheme(dark)
  }, [dark])

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      const ls = localStorage.getItem('theme')
      if (!ls) setDark(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <button
      type="button"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="button-ghost w-10 h-10 p-0 flex items-center justify-center"
      onClick={() => setDark((d) => !d)}
    >
      <span className="sr-only">Toggle theme</span>
      {/* Sun icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={`h-5 w-5 transition-opacity ${dark ? 'opacity-0 absolute' : 'opacity-100'}`}
        aria-hidden={dark}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {/* Moon icon (crescent) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`h-5 w-5 transition-opacity ${dark ? 'opacity-100' : 'opacity-0 absolute'}`}
        aria-hidden={!dark}
      >
        <path d="M21 12.8c-1.2.6-2.6.9-4 .9A7.8 7.8 0 019.2 6c0-1.4.3-2.8.9-4A9 9 0 1021 12.8z" />
      </svg>
    </button>
  )
}
