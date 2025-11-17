import React from 'react'
import { useParams, Link } from 'react-router-dom'

const posts: Record<string, { title: string; body: string }> = {
  'designing-for-conversion': {
    title: 'Designing for Conversion',
    body: `A conversion-focused layout prioritizes clarity and trust. Use a strong hero, concise value propositions, and social proof. Reduce friction with straightforward pricing and a clear call to action.`,
  },
  'performance-matters': {
    title: 'Performance Matters',
    body: `Speed improves user satisfaction and SEO. Optimize assets, defer non-critical scripts, and adopt modern tooling like Vite and Tailwind. Monitor Web Vitals and iterate.`,
  },
  'landing-page-anatomy': {
    title: 'Anatomy of a Landing Page',
    body: `Hero, features, testimonials, pricing, and FAQ are the backbone of high-performing pages. Keep a consistent visual rhythm and guide the eye with contrast and spacing.`,
  },
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? posts[slug] : undefined
  if (!post) {
    return (
      <main className="section">
        <div className="container-balanced">
          <h1 className="h1">Not found</h1>
          <p className="mt-4 subtle">The post you’re looking for doesn’t exist.</p>
          <p className="mt-6"><Link to="/blog" className="link-underline">Back to blog</Link></p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="section">
        <div className="container-balanced max-w-3xl">
          <h1 className="h1 text-[color:var(--foreground)]">{post.title}</h1>
          <article className="mt-6 prose prose-slate max-w-none dark:prose-invert">
            <p>{post.body}</p>
          </article>
          <p className="mt-8"><Link to="/blog" className="link-underline">← Back to blog</Link></p>
        </div>
      </section>
    </main>
  )
}
