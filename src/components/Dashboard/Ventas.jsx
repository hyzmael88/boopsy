import { client } from '@/sanity/lib/client';
import React, { useContext, useEffect, useState } from 'react';
import Venta from './Ventas/Venta';
import { AppContext } from '@/context/AppContext';
import Image from 'next/image';

function Ventas() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const [ventas, setVentas] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentVentas, setCurrentVentas] = useState([]); // Nueva variable de estado
  const { deleteVenta } = useContext(AppContext);

  useEffect(() => {
    client
      .fetch(`*[_type == "venta"] | order(_createdAt desc)`)
      .then((data) => {
        setTotalItems(data.length);
        setVentas(data);
      })
      .catch((error) => console.error(error));
  }, []);


  useEffect(() => {
    setTotalItems(ventas.length);
  }, [ventas]);


  useEffect(() => {
    // Actualizar las ventas de la página actual cuando cambie la página actual o el conjunto total de ventas
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentVentas(ventas.slice(start, end));
  }, [ventas, currentPage]);

  const handleDeleteVenta = async (ref) => {
    try {
      await deleteVenta(ref);
      setVentas(ventas.filter(venta => venta._id !== ref)); // Actualiza el estado para reflejar la venta eliminada

      // Asegurarse de que no se queden en una página vacía
      if ((currentPage - 1) * itemsPerPage >= ventas.length - 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error("Error al eliminar la venta:", error);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  

  


  return (
    <>
    {
      totalItems === 0 ?
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl">No hay ventas disponibles</h1>
      </div>
      :
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[10px] gap-y-[20px] place-items-center lg:mt-[100px]  ">
        {
          currentVentas.map((venta, ventaIndex) => (
           
              <Venta
                key={`${venta._id}-${ventaIndex}`}
                venta={venta}	
                handleDeleteVenta={handleDeleteVenta}
              />
          ))
        }
      </div> 
}
      <div className="w-[90%] xl:w-[97%]  flex flex-row items-center justify-end gap-[21px] ">
        <button onClick={prevPage} className={currentPage > 1 ? 'rounded-full bg-[#d8d8d8] w-[76px] h-[76px] flex items-center justify-center' : 'hidden'}>
          <Image
          width={25}
          height={40}
          src="/assets/iconos/flechab.svg" alt="arrow" className="w-[25px] h-[40px] rotate-180 " />
        </button>
        <button onClick={nextPage} className={currentPage < Math.ceil(totalItems / itemsPerPage) ? 'rounded-full bg-black w-[76px] h-[76px] flex items-center justify-center' : 'hidden'}>
          <Image
          width={25}
          height={40}
          src="/assets/iconos/flechab.svg" alt="arrow" className="w-[25px] h-[40px]" />
        </button>
      </div>
    </>
  );
}

export default Ventas;
