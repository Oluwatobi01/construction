import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  { slug: 'designing-for-conversion', title: 'Designing for Conversion', excerpt: 'Principles to turn visitors into customers using hierarchy, trust, and clarity.' },
  { slug: 'performance-matters', title: 'Performance Matters', excerpt: 'How speed impacts SEO, UX, and revenue — and how to get it.' },
  { slug: 'landing-page-anatomy', title: 'Anatomy of a Landing Page', excerpt: 'From hero to FAQ: the sections that increase engagement and conversions.' },
]

export default function BlogPage() {
  return (
    <main>
      <section className="section">
        <div className="container-balanced">
          <h1 className="h1 text-[color:var(--foreground)]">Blog</h1>
          <p className="mt-4 subtle max-w-2xl">Insights on modern marketing sites: conversion, performance, and UX best practices.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.slug} className="card p-6">
                <h3 className="text-lg font-semibold"><Link to={`/blog/${p.slug}`} className="link-underline">{p.title}</Link></h3>
                <p className="mt-2 subtle text-sm">{p.excerpt}</p>
                <div className="mt-4"><Link to={`/blog/${p.slug}`} className="link-underline">Read more</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
