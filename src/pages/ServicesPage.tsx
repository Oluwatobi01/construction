import React from 'react'
import { site } from '@/config/site'

export default function ServicesPage() {
  const services = site.services ?? site.features.map(f => ({ title: f.title, description: f.description, icon: f.icon }))
  return (
    <main>
      <section className="section relative overflow-hidden">
        <div className="container-balanced">
          <h1 className="h1 text-[color:var(--foreground)]">Hizmetler</h1>
          <p className="mt-4 subtle max-w-2xl">Ürün tanıtım siteleri, açılış sayfaları ve performans odaklı içerik deneyimleri için profesyonel hizmetler.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-balanced">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="card card-hover p-6">
                <div className="h-10 w-10 rounded-xl bg-[color:var(--muted)]/60 flex items-center justify-center text-lg">{s.icon ?? '✨'}</div>
                <h3 className="mt-4 text-lg font-semibold text-[color:var(--foreground)]">{s.title}</h3>
                <p className="mt-2 subtle text-sm">{s.description}</p>
                <a href="#pricing" className="mt-4 inline-flex link-underline">Detaylar</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-narrow">
        <div className="container-balanced">
          <div className="card p-8 sm:p-10 text-center">
            <h2 className="h2">Projenizi hızla hayata geçirelim</h2>
            <p className="mt-2 subtle">2 dakikada yayına hazır bir açılış sayfası kurun.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="/#pricing" className="button-primary bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]">Paketleri Gör</a>
              <a href="/" className="button-ghost">Ana Sayfa</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
