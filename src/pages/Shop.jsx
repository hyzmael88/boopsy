import { useState, useEffect } from 'react';
import Filtros from '@/components/Shop/Filtros';
import Productos from '@/components/Shop/Productos';
import { client } from '@/sanity/lib/client';

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
    <div>
      <h1 className="uppercase font-anton text-center lg:text-[60px]">
        Todos los productos
      </h1>
      <div className="flex">
        <Filtros productos={productos} setFiltros={setFiltros} />
        <Productos productosFiltrados={productosFiltrados} />
      </div>
    </div>
  );
}

export default Shop;
