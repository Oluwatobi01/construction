import React from 'react'

const logos = [
  { name: 'Acme', src: '/images/logo-acme.svg' },
  { name: 'Delta', src: '/images/logo-delta.svg' },
  { name: 'Zenith', src: '/images/logo-zenith.svg' },
  { name: 'Pulse', src: '/images/logo-pulse.svg' },
]

export default function Logos() {
  return (
    <section className="py-10 bg-white/60">
      <div className="container-balanced">
        <p className="text-center text-xs uppercase tracking-wider text-slate-500">Trusted by modern teams</p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 items-center opacity-80">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center">
              <img src={l.src} alt={`${l.name} logo`} className="h-6 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
