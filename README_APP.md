React marketing app (Vite + Tailwind)

Quickstart
- Install: npm install
- Dev server: npm run dev (opens http://localhost:5173)
- Build: npm run build
- Preview: npm run preview

Customize content in src/config/site.ts. Adjust styling in tailwind.config.js and src/index.css.

Stripe integration
- Set environment variables (copy .env.example to .env/local env):
  - VITE_STRIPE_PUBLISHABLE_KEY
  - STRIPE_SECRET_KEY
  - VITE_STRIPE_PRICE_STARTER, VITE_STRIPE_PRICE_PRO, VITE_STRIPE_PRICE_BUSINESS
- Start dev server: npm run dev
- Click a pricing CTA to create a Checkout session and redirect.

Notes
- The dev server exposes POST /api/create-checkout-session. For production, deploy a tiny serverless function with the same handler using the stripe SDK.
