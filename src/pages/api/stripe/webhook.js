// src/pages/api/webhook.js
import { buffer } from 'micro';
import Stripe from 'stripe';
import { client } from '@/sanity/lib/client';
import { v4 as uuidv4 } from 'uuid';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookSecret = process.env.STRIPE_WEBHOOK_KEY_TEST;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      console.error('Error:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Obtener los line items de la sesión
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

      // Guardar la información de la venta en Sanity
      try {
        await client.create({
          _type: 'venta',
          sessionId: session.id,
          amount_total: session.amount_total,
          currency: session.currency,
          customer_email: session.customer_details.email,
          line_items: lineItems.data.map(item => ({
            _key: uuidv4(), // Generar un valor único para _key
            name: item.description,
            quantity: item.quantity,
            price: item.amount_total / 100,
          })),
        });
      } catch (error) {
        console.error('Error al guardar la venta:', error);
        return res.status(500).send('Error al guardar la venta');
      }
    }

    res.status(200).json({ received: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}