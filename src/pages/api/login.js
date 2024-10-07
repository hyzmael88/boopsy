
import { client } from '@/lib/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import {serialize} from 'cookie'

async function checkPassword(plaintext, hash) {
    
    return await bcrypt.compare(plaintext, hash);
  }

  export default async function loginHandler(req, res) {
    const { email, password } = req.body;
    const query = `*[_type == "usuarios" && email == $email] `;
  
    const params = { email };
    try {
      const users = await client.fetch(query, params);
  
      if (users.length === 0) {
        return res.status(401).json({ message: 'El correo electrónico no existe' });
      }
  
      const user = users[0];
  
      const isPasswordCorrect = await checkPassword(password, user.password);
  
      if (!isPasswordCorrect) {
        return res.status(402).json({ message: 'Contraseña incorrecta' });
      }
      if(isPasswordCorrect){
       const token=  jwt.sign({
            exp: Math.floor(Date.now()/1000) + 60*10*24*30,
            email:user.email,
            name:user.name
        }, process.env.NEXT_PUBLIC_JWT_SECRET)
        const serialized = serialize('myTokenName',token, {
            httpOnly: true,
            sameSite: 'strict',
        maxAge: 1000* 60*10*24*30,
        path: '/'
        })
        res.setHeader('Set-Cookie',serialized)
        return res.json('login successfully')

      }
  
      return res.json('login route');
    } catch (error) {
      console.error('Error en loginHandler:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
  