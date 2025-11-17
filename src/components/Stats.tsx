import React from 'react'

const stats = [
  { label: 'Time to launch', value: '2 min' },
  { label: 'Performance', value: '95% FCP' },
  { label: 'Conversion lift', value: '+3x' },
]

export default function Stats() {
  return (
    <section className="section-narrow">
      <div className="container-balanced grid grid-cols-3 gap-4 text-sm subtle">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-bold text-[color:var(--foreground)]">{s.value}</div>
            <div>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
