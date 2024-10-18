import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

function Otros({ fit, color, currentSlug }) {
  const [otrosProductos, setOtrosProductos] = useState([]);

  useEffect(() => {
    const fetchOtrosProductos = async () => {
      // Consulta a Sanity para obtener productos con el mismo fit pero excluyendo el producto actual
      const query = `*[_type == "producto" && (fit->name == $fit || color->hex == $color) && slug.current != $currentSlug] | order(_createdAt desc)[0...4]{
        nombre,
        slug,
        precio,
        "fit": fit->name,
        "color": color->hex,
        imagenes[]{
          asset->{
            url
          }
        }
      }`;

      const otros = await client.fetch(query, { fit, color, currentSlug });
      setOtrosProductos(otros);
    };

    if (fit && color && currentSlug) {
      fetchOtrosProductos();
    }
  }, [fit, color, currentSlug]);


  return (
    <div className="mt-12">
      <h2 className="text-[30px] font-anton text-center mb-4 uppercase">Productos Similares</h2> 
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {otrosProductos.map((producto) => (
          <Link key={producto.slug.current} href={`/producto/${producto.slug.current}`}>
            <div className="w-full h-full border cursor-pointer">
              <div className="h-[343px] flex-shrink-0">
                <Image
                  width={343}
                  height={233}
                  src={producto.imagenes[0].asset.url}
                  alt={producto.nombre}
                  className="h-full object-cover"
                />
              </div>
              <div className="py-[18px]">
                <h3 className="mt-2 font-bold text-center font-gabarito text-[16px]">
                  {producto.fit} - {producto.nombre}
                </h3>
                <p className="text-center font-gabarito text-[16px] text-[#B4B4B4]">
                  ${producto.precio} MXN
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Otros;
