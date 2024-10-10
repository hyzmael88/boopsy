// src/pages/api/updateVenta.js

import { client } from '@/sanity/lib/client';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { ref, updatedData } = req.body;

  if (!ref || !updatedData) {
    return res.status(400).json({ message: 'Faltan parámetros requeridos' });
  }

  try {
    await client
      .patch(ref)
      .set(updatedData)
      .commit(); // Confirmar los cambios
    return res.status(200).json({ message: 'Venta actualizada con éxito' });
  } catch (error) {
    console.error('Hubo un error al actualizar la venta', error);
    return res.status(500).json({ message: 'Error al actualizar la venta', error });
  }
}