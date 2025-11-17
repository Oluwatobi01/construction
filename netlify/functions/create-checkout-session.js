const stripeLib = require('stripe')

exports.handler = async function (event) {
  // Allow CORS for local testing and Netlify previews
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    const secret = process.env.STRIPE_SECRET_KEY
    if (!secret) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'STRIPE_SECRET_KEY not set' }) }
    }

    const stripe = stripeLib(secret)
    const body = JSON.parse(event.body || '{}')
    const priceId = body.priceId
    const priceData = body.priceData // { amount, currency, name, productId? }

    const line_items = priceId
      ? [{ price: priceId, quantity: 1 }]
      : priceData
      ? [
          {
            price_data: {
              currency: priceData.currency || 'usd',
              unit_amount: priceData.amount,
              product: priceData.productId,
              product_data: priceData.productId ? undefined : { name: priceData.name },
            },
            quantity: 1,
          },
        ]
      : null

    if (!line_items) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing priceId or priceData' }) }
    }

    const origin = event.headers.origin || `https://${event.headers.host}`
    const urlPlan = (line_items[0] && line_items[0].price_data && (line_items[0].price_data.product || (line_items[0].price_data.product_data && line_items[0].price_data.product_data.name))) || ''
    const planQuery = urlPlan ? `?plan=${encodeURIComponent(urlPlan)}` : ''

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      success_url: `${origin}/checkout/success${planQuery}`,
      cancel_url: `${origin}/checkout/cancel${planQuery}`,
      allow_promotion_codes: true,
    })

    return {
      statusCode: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: session.id }),
    }
  } catch (e) {
    return {
      statusCode: 500,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: e.message || 'Unknown error' }),
    }
  }
}
