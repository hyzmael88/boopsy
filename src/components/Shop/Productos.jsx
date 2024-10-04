// components/Shop/Productos.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Productos({ productosFiltrados }) {
  return (
    <div className="w-4/5 h-full p-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {productosFiltrados.map((producto) => (
         <Link key={producto.slug} href={`/producto/${producto.slug.current}`}>
        <div key={producto.slug} className="w-full h-full border  cursor-pointer">
            {console.log(producto)}
            <div className=' h-[343px] flex-shrink-0'>
          <Image
            width={343}
            height={233}
            src={producto.imagenes[0].asset.url}
            alt={producto.nombre}
            className=" h-full object-cover"
          />
            </div>
            <div className='py-[18px]'>
          <h3 className="mt-2 font-bold text-center font-gabarito text-[16px]">{producto.fit} - {producto.nombre}</h3>
          <p className='text-center font-gabarito text-[16px] text-[#B4B4B4]'>${producto.precio} MXN</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default Productos;
