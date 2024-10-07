// src/pages/api/subscribe.js
import { client } from '@/sanity/lib/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Correo electrónico inválido' });
    }

    try {
      // Verificar si el correo ya está suscrito
      const existingSubscriber = await client.fetch(
        `*[_type == "suscriptor" && email == $email][0]`,
        { email }
      );

      if (existingSubscriber) {
        return res.status(400).json({ error: 'Correo electrónico ya suscrito' });
      }

      // Crear un nuevo suscriptor
      await client.create({
        _type: 'suscriptor',
        email,
      });

      return res.status(200).json({ message: 'Suscripción exitosa' });
    } catch (error) {
      console.error('Error al suscribir el correo electrónico:', error);
      return res.status(500).json({ error: 'Error al suscribir el correo electrónico' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}