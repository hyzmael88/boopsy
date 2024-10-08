// src/pages/api/create-checkout-session.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { items } = req.body;
    console.log

   

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: items.map(item => ({
          price_data: {
            currency: 'mxn',
            product_data: {
              name: item.name,
                images: [item.image],

               

            },
            unit_amount: item.price * 100, // Stripe expects the amount in cents
          },
          quantity: item.quantity,
        })),
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}