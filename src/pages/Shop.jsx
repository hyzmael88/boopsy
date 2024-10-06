import { useState, useEffect } from 'react';
import Filtros from '@/components/Shop/Filtros';
import Productos from '@/components/Shop/Productos';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

function Shop() {
  const [productos, setProductos] = useState([]);
  const [filtros, setFiltros] = useState({
    fit: [],
    talla: '',
    color: '',
  });

  useEffect(() => {
    // Obtener productos desde Sanity usando la consulta GROQ corregida
    const fetchProductos = async () => {
      const data = await client.fetch(`*[_type == "producto"]{
        nombre,
        slug,
        precio,
        enOferta,
        precioDescuento,
        porcentajeDescuento,
        "fit": fit->name, // Acceder al nombre del fit referenciado
        "color": color->name, // Acceder al nombre del color referenciado
        tallas[]{
          talla,
          inventario
        },
        "categoria": categoria->nombre, // Acceder al nombre de la categoría referenciada
        "fabricante": fabricante->nombre, // Acceder al nombre del fabricante referenciado
        imagenes[]{
          asset->{
            _id,
            url // Obtener la URL de la imagen
          }
        },
        destacado
      }`);
      setProductos(data);
    };

    fetchProductos();
  }, []);

  // Filtrar productos basados en los filtros seleccionados
  const productosFiltrados = productos.filter((producto) => {
    const fitMatch =
      filtros.fit.length === 0 || filtros.fit.includes(producto.fit);
    const tallaMatch =
      !filtros.talla || producto.tallas.some((t) => t.talla === filtros.talla);
    const colorMatch =
      !filtros.color || producto.color === filtros.color;

    return fitMatch && tallaMatch && colorMatch;
  });

  return (
    <div className='px-4 md:px-10 max-w-[1440px] min-w-sm mx-auto'>
      <h1 className="uppercase font-anton text-center lg:text-[60px] border-y-[1px] md:border-y-[0px] md:border-b-[1px]  border-black md:border-black/20">
        Todos los productos
      </h1>
      <div className='w-full flex justify-between items-center border-b-[1px] border-black md:border-black/20 '>
        <span className='border-r-[1px]  border-black md:border-black/20 px-[10px] md:px-[70px] py-[10px] md:py-[30px] font-gabarito flex gap-2 text-[10px] md:text-[16px] '>
         <Image src={"/assets/iconos/filtros.svg"} alt='icono filtros' width={17} height={17} className='w-[7px] md:w-[17px] '  /> Ocultar filtros
        </span>
        <span className='border-l-[1px]  border-black md:border-black/20 px-[10px] md:px-[70px] py-[10px] md:py-[30px]  font-gabarito flex gap-2 text-[10px] md:text-[16px] '>
          Ordenar por <Image src={"/assets/iconos/ordenar.svg"} alt='icono flecha abajo' width={17} height={17}  className='w-[7px] md:w-[17px] ' />
        </span>

      </div>
      <div className="flex">
        <Filtros productos={productos} setFiltros={setFiltros} />
        <Productos productosFiltrados={productosFiltrados} />
      </div>
    </div>
  );
}

export default Shop;
