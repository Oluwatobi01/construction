export type Feature = { title: string; description: string; icon?: string }
export type Plan = { name: string; price: string; description: string; features: string[]; cta: string; highlighted?: boolean }
export type Testimonial = { quote: string; author: string; role?: string }

export const site = {
  name: 'MarketPro',
  tagline: 'Launch pages that actually convert',
  description: 'A sleek, responsive marketing site with modern UX, gradient accents, and fast performance — ready in minutes.',
  primaryCTA: { label: 'Get Started', href: '#pricing' },
  secondaryCTA: { label: 'Live Demo', href: '#features' },
  nav: [
    { label: 'Services', href: '/hizmetler' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { title: 'Açılış Sayfası Tasarımı', description: 'Dönüşüm odaklı, modern açılış sayfaları.', icon: '🚀' },
    { title: 'Kurumsal Web Sitesi', description: 'İçerik hiyerarşisi ve SEO uyumlu yapı.', icon: '🏢' },
    { title: 'Performans Optimizasyonu', description: 'Lighthouse skorlarını yükseltin.', icon: '⚙️' },
    { title: 'Analytics Entegrasyonu', description: 'Veri odaklı büyüme için doğru ölçüm.', icon: '📈' },
    { title: 'İçerik Yönetimi', description: 'Blog ve sayfa içerikleri için CMS hazır.', icon: '📝' },
    { title: 'Bakım & Destek', description: 'Sürekli iyileştirme ve güvenlik güncellemeleri.', icon: '🛡️' },
  ],
  features: <Feature[]>[
    { title: 'No-code editor', description: 'Customize content, colors, and layout from a simple config.', icon: '🛠️' },
    { title: 'Responsive by default', description: 'Looks great on phones, tablets, and desktops.', icon: '📱' },
    { title: 'SEO-friendly', description: 'Semantic HTML and metadata for discoverability.', icon: '🔍' },
    { title: 'Fast performance', description: 'Built with Vite + React + Tailwind for optimal speed.', icon: '⚡' },
  ],
  plans: <Plan[]>[
    {
      name: 'Starter',
      price: '$9/mo',
      description: 'For personal projects and MVPs',
      features: ['Basic sections', 'Email support', 'Community access'],
      cta: 'Choose Starter',
    },
    {
      name: 'Pro',
      price: '$29/mo',
      description: 'For growing products',
      features: ['Everything in Starter', 'Blog + CMS ready', 'Analytics integration'],
      cta: 'Choose Pro',
      highlighted: true,
    },
    {
      name: 'Business',
      price: '$79/mo',
      description: 'For teams that need more',
      features: ['Priority Support', 'Custom domains', 'SLA & SSO'],
      cta: 'Contact Sales',
    },
  ],
  testimonials: <Testimonial[]>[
    { quote: 'This template let us launch in a day and boosted conversions 3x.', author: 'Jordan Lee', role: 'Founder, Acme' },
    { quote: 'Clean, fast, and easy to customize. Exactly what we needed.', author: 'Priya Patel', role: 'PM, Delta Co' },
  ],
  faqs: [
    { q: 'Can I use this commercially?', a: 'Yes, customize freely for your projects.' },
    { q: 'Is it easy to deploy?', a: 'Very. Host on Vercel, Netlify, or any static host.' },
    { q: 'Do you offer support?', a: 'Community support included; email support on paid plans.' },
  ],
}
