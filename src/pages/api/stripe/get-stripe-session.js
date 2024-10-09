import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { sessionId } = req.body;

    try {
      // Obtener detalles de la sesión de Stripe
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['customer', 'payment_intent'],
      });

      // Devolver los detalles del cliente y dirección
      const customer = session.customer_details;
      res.status(200).json({ customer });
    } catch (error) {
      console.error('Error al obtener la sesión de Stripe:', error);
      res.status(500).json({ error: 'Error al obtener la sesión de Stripe' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
