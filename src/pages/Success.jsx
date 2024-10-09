// src/pages/Success.jsx
import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { AppContext } from '@/context/AppContext';

const Success = () => {

    const {deleteCart} = useContext(AppContext);

    useEffect(() => {
        deleteCart();
    }
    , []);
    

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl lg:text-4xl font-anton uppercase mb-4">¡Compra Exitosa!</h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-6 font-gabarito">
          Gracias por tu compra. Hemos recibido tu pedido y estamos procesándolo.
        </p>
        <Link href="/">
          <button className="inline-block bg-black text-white px-20 py-2  text-lg lg:text-xl font-anton  transition duration-300 uppercase rounded-[87px]">
            Volver al Inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;