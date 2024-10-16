// src/pages/api/create-checkout-session.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { items } = req.body;

    // Calcular la cantidad total de artículos
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    
  
     // Determinar las opciones de envío basadas en la cantidad de artículos
    const shippingOptions = totalQuantity >= 3
    ? [
        {
          shipping_rate_data: {
            display_name: 'Envío Gratis',
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0, // Envío gratuito
              currency: 'mxn',
            },
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
      ]
    : [
        {
          shipping_rate_data: {
            display_name: 'Envío Estándar',
            type: 'fixed_amount',
            fixed_amount: {
              amount: 15000, // 150.00 MXN (15000 centavos)
              currency: 'mxn',
            },
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
      ];
   
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
        success_url: `${req.headers.origin}/Success`,
        cancel_url: `${req.headers.origin}/Error`,
        allow_promotion_codes: true,
        shipping_address_collection: {
          allowed_countries: ['US', 'CA', 'MX'], // Puedes ajustar los países permitidos según tus necesidades
        },
        shipping_options: shippingOptions,
        
        
        
       
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