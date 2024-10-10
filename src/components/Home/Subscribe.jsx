import { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setMessage('Suscripción exitosa');
      setEmail('');
    } else {
      setMessage(data.error);
    } 
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[20px] lg:text-[60px] text-center font-anton uppercase ">SUSCRÍBETE</h2>
        <p className="mt-0 whitespace-pre-line font-gabarito">
          {`
            Recibe novedades, obtén recompensas
            y descubre nuevos lanzamientos antes que nadie
          `}
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col lg:flex-row items-center lg:items-start justify-center">
          <div className="w-[80%]">
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="w-full h-[48px] rounded-[28px] border-black lg:bg-[#F0F0F0] border px-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 lg:mt-0 lg:ml-4 h-[48px] rounded-[28px] bg-black text-white px-6"
          >
            Suscribirse
          </button>
        </form>
        {message && <p className="mt-4 text-red-500 font-gabarito">{message}</p>}
      </div>
    </section>
  );
};
  
  export default Subscribe;
  