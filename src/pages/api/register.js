// src/pages/api/register.js
import { client } from '@/sanity/lib/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {name, email, hashedPassword } = req.body;

    console.log(name, email, hashedPassword);

    if (!email || !email.includes('@') || !hashedPassword) {
      return res.status(403).json({ error: 'Correo electrónico o contraseña inválidos' });
    }

    try {
      // Verificar si el usuario ya existe
      const existingUser = await client.fetch(
        `*[_type == "user" && email == $email][0]`,
        { email }
      );

      if (existingUser) {
        return res.status(400).json({ error: 'El usuario ya existe' });
      }

      // Crear un nuevo usuario
      await client.create({
        _type: 'user',
        name,
        email,
        hashedPassword, // Asegúrate de que la contraseña esté encriptada antes de guardarla
      });

      return res.status(200).json({ message: 'Registro exitoso' });
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      return res.status(500).json({ error: 'Error al registrar el usuario' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}