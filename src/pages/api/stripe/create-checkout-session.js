// src/pages/api/create-checkout-session.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { items } = req.body;

    // Calcular la cantidad total de artículos
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    // Crear un conjunto único de modelos para verificar si son diferentes o no
    const uniqueModels = new Set(items.map((item) => item.name));
    const uniqueSizes = new Set(items.flatMap((item) => item.sizes || []));

    let appliedCoupon = null;

    // Lógica para aplicar descuentos según la cantidad y el tipo de compra
    if (totalQuantity === 12 && uniqueModels.size === 1) {
      // Caso de 12 piezas de un modelo en diferentes tallas (Descuento del 30%)
      appliedCoupon = "ZmFJG59n";
    } else if (totalQuantity === 12 && uniqueModels.size > 1 ) {
      // Caso de 12 piezas de diferentes modelos/tallas (Descuento del 20%)
      appliedCoupon = "1SU0FVDX";
    } else {
      appliedCoupon = null;
    }

    // Determinar las opciones de envío basadas en la cantidad de artículos
    const shippingOptions =
      totalQuantity >= 3
        ? [
            {
              shipping_rate_data: {
                display_name: "Envío Gratis",
                type: "fixed_amount",
                fixed_amount: {
                  amount: 0, // Envío gratuito
                  currency: "mxn",
                },
                delivery_estimate: {
                  minimum: {
                    unit: "business_day",
                    value: 5,
                  },
                  maximum: {
                    unit: "business_day",
                    value: 7,
                  },
                },
              },
            },
          ]
        : [
            {
              shipping_rate_data: {
                display_name: "Envío Estándar",
                type: "fixed_amount",
                fixed_amount: {
                  amount: 15000, // 150.00 MXN (15000 centavos)
                  currency: "mxn",
                },
                delivery_estimate: {
                  minimum: {
                    unit: "business_day",
                    value: 5,
                  },
                  maximum: {
                    unit: "business_day",
                    value: 7,
                  },
                },
              },
            },
          ];

    try {
      const sessionParams = {
        payment_method_options: {
          card: {
            installments: {
              enabled: true,
            },
          },
        },
        line_items: items.map((item) => ({
          price_data: {
            currency: "mxn",
            product_data: {
              name: item.name,
              images: [item.image],
            },
            unit_amount: item.price * 100, // Stripe expects the amount in cents
          },
          quantity: item.quantity,
        })),
        mode: "payment",
        success_url: `${req.headers.origin}/Success`,
        cancel_url: `${req.headers.origin}/Error`,
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "MX"], // Puedes ajustar los países permitidos según tus necesidades
        },
        shipping_options: shippingOptions,
      };

      // Agregar cupón o permitir códigos promocionales
      if (appliedCoupon) {
        // Si hay un cupón aplicado, usar 'discounts'
        sessionParams.discounts = [{ coupon: appliedCoupon }];
        console.log("Cupón aplicado:", appliedCoupon);
      } else {
        // Si no hay un cupón, permitir códigos promocionales
        sessionParams.allow_promotion_codes = true;
        console.log("Permitir códigos promocionales");
      }

      // Crear la sesión de checkout con los parámetros correctos
      const session = await stripe.checkout.sessions.create(sessionParams);

      res.status(200).json({ id: session.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.error("Error en la creación de la sesión:", error);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
