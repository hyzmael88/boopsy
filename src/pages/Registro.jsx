import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import bcrypt from 'bcryptjs';
import Head from 'next/head';
import { AppContext } from '@/context/AppContext';

function Registro() {

  const {postUser} = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(hashedPassword);
    /* postUser(name, email, hashedPassword) */
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, hashedPassword }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setMessage('Registro exitoso');
      setEmail('');
      setName('');
      setPassword('');
    } else {
      setMessage(data.error);
    }
/* 
      router.push('/Login'); */
    } catch (err) {
        console.log(err)
      setError('Error al crear el usuario.');
    }
  };

  return (
    <div className='w-full h-full grid grid-cols-1 place-items-center'>
       <Head>
 <title>Selvedge</title>
 </Head>
 <div className='w-full h-[100px] md:h-[200px] lg:h-[250px] bg-[#31302c]'/>

      <div className='flex flex-col w-[350px] h-full border-2 rounded-xl'>
        <h3 className='text-center'>Crear Usuario</h3>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          
        <label htmlFor="email">Nombre</label>
        <input type="text"  className='border-2 border-gray-300 '
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Usuario</label>
        <input type="text"  className='border-2 border-gray-300 '
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input type="password" className='border-2 border-gray-300 ' 
        
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <div className='flex flex-col justify-center items-center'>

        <button type="submit" className='bg-blue-500 w-[100px] px-4 py-2 mt-4 mb-4 rounded-lg'>Ingresar</button>
        </div>
      </form>
      {message && <p className="mt-4 text-red-500 font-gabarito">{message}</p>}
      </div>
      
    </div>
  )
}

export default Registro