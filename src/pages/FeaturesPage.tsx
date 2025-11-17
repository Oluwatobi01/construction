import React from 'react'
import Features from '@/components/Features'
import CTABanner from '@/components/CTABanner'

export default function FeaturesPage() {
  return (
    <main>
      <section className="section">
        <div className="container-balanced">
          <h1 className="h1 text-[color:var(--foreground)]">Features</h1>
          <p className="mt-4 subtle max-w-2xl">A streamlined toolkit to launch quickly and scale with confidence. Built with modern performance, accessibility, and customization in mind.</p>
        </div>
      </section>
      <Features />
      <CTABanner />
    </main>
  )
}
