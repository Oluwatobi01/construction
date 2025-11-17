import React from 'react'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import FAQ from '../components/FAQ'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <CTABanner />
      <FAQ />
    </>
  )
}
