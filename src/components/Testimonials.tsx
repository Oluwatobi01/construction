import React from 'react'
import { site } from '@/config/site'

export default function Testimonials() {
  const [index, setIndex] = React.useState(0)
  const [hover, setHover] = React.useState(false)
  const count = site.testimonials.length
  const containerRef = React.useRef<HTMLDivElement>(null)

  // autoplay
  React.useEffect(() => {
    if (hover || count <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 4500)
    return () => clearInterval(id)
  }, [hover, count])

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count)

  // keyboard
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count])

  // swipe
  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let startX = 0
    let dx = 0
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX }
    const onMove = (e: TouchEvent) => { dx = e.touches[0].clientX - startX }
    const onEnd = () => {
      if (dx > 60) go(-1)
      else if (dx < -60) go(1)
      startX = 0; dx = 0
    }
    el.addEventListener('touchstart', onStart)
    el.addEventListener('touchmove', onMove)
    el.addEventListener('touchend', onEnd)
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove', onMove)
      el.removeEventListener('touchend', onEnd)
    }
  }, [count])

  return (
    <section id="testimonials" className="section bg-[var(--muted)]">
      <div className="container-balanced">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-4xl">What customers say</h2>
          <p className="mt-2 text-[color:var(--muted-foreground)]">Social proof builds trust and boosts conversions.</p>
        </div>

        <div
          className="mt-8 relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          ref={containerRef}
        >
          {/* viewport */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
            {/* track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {site.testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 p-6">
                  <figure className="">
                    <blockquote className="text-[color:var(--foreground)] text-lg">“{t.quote}”</blockquote>
                    <figcaption className="mt-4 flex items-center gap-3 text-sm text-[color:var(--muted-foreground)]">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--muted)]/60 text-[color:var(--foreground)]/80">{t.author[0]}</span>
                      <span>— {t.author}{t.role ? `, ${t.role}` : ''}</span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* arrows */}
          {count > 1 && (
            <>
              <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 button-ghost w-10 h-10 p-0 flex items-center justify-center"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path strokeWidth="2" strokeLinecap="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 button-ghost w-10 h-10 p-0 flex items-center justify-center"
                aria-label="Next testimonial"
                onClick={() => go(1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path strokeWidth="2" strokeLinecap="round" d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}

        </div>
      </div>
    </section>
  )
}
