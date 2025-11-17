import 'dotenv/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Adds a simple /health endpoint in dev mode
const healthPlugin = () => ({
  name: 'dev-health-endpoint',
  configureServer(server: any) {
    // Health endpoint
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url === '/health') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('ok')
        return
      }
      next()
    })

    // Stripe Checkout Session endpoint (DEV only)
    server.middlewares.use(async (req: any, res: any, next: any) => {
      if (req.method === 'POST' && req.url === '/api/create-checkout-session') {
        try {
          const secret = process.env.STRIPE_SECRET_KEY
          if (!secret) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: 'STRIPE_SECRET_KEY not set' }))
            return
          }
          const buffers: Uint8Array[] = []
          for await (const chunk of req) buffers.push(chunk)
          const body = JSON.parse(Buffer.concat(buffers).toString('utf8'))
          const priceId = body?.priceId as string | undefined
          const priceData = body?.priceData as { amount: number; currency: string; name: string; productId?: string } | undefined

          const stripe = (await import('stripe')).default
          const client = new stripe(secret, { apiVersion: '2024-06-20' })

          const origin = req.headers.origin || `${req.protocol || 'http'}://${req.headers.host}`

          const line_items = priceId
            ? [{ price: priceId, quantity: 1 }]
            : priceData
            ? [{ price_data: { currency: priceData.currency, unit_amount: priceData.amount, product: priceData.productId, product_data: priceData.productId ? undefined : { name: priceData.name } }, quantity: 1 }]
            : undefined

          if (!line_items) throw new Error('Missing priceId or priceData')

          const session = await client.checkout.sessions.create({
            mode: 'payment',
            line_items,
            success_url: `${origin}/?success=true`,
            cancel_url: `${origin}/?canceled=true`,
            allow_promotion_codes: true,
          })

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ id: session.id }))
          return
        } catch (e: any) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: e?.message || 'Unknown error' }))
          return
        }
      }
      next()
    })
  },
})

export default defineConfig({
  plugins: [react(), healthPlugin() as any],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    middlewareMode: false,
  },
  css: {},
})
