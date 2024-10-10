// src/pages/Error.jsx
import React from 'react';
import Link from 'next/link';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl lg:text-4xl font-anton uppercase mb-4 ">¡Error en el Pago!</h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-6 font-gabarito">
          Hubo un problema con tu pago. Por favor, revisa tu información o intenta de nuevo.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/Cart">
            <button className="inline-block bg-black text-white px-20 py-2  text-lg lg:text-xl font-anton transition duration-300 uppercase rounded-[87px]">
              Volver al Carrito
            </button>
          </Link>
          <Link href="/">
            <button className="inline-block bg-gray-400 text-white px-20 py-2  text-lg lg:text-xl font-anton transition duration-300 uppercase rounded-[87px]">
              Volver al Inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
