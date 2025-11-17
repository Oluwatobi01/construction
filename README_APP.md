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
- Dev: The Vite server exposes POST /api/create-checkout-session.
- Production (Netlify): A serverless function is provided at /.netlify/functions/create-checkout-session.

Deploying to Netlify
1) Push this repo to Git (GitHub/GitLab/Bitbucket)
2) In Netlify, "New site from Git" → pick your repo
3) Build command: npm run build
4) Publish directory: dist
5) Functions directory: netlify/functions
6) Environment variables (Site settings → Environment):
   - VITE_STRIPE_PUBLISHABLE_KEY (from Stripe)
   - STRIPE_SECRET_KEY (from Stripe, secret)
   - Optional: VITE_STRIPE_PRICE_STARTER/PRO/BUSINESS, VITE_STRIPE_PRODUCT_ID
7) Deploy. Client-side routing is configured via netlify.toml redirects.
