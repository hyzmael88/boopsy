import { useState, useEffect } from "react";
import Filtros from "@/components/Shop/Filtros";
import Productos from "@/components/Shop/Productos";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

function Shop() {
  const [mostrarFiltros, setMostrarFiltros] = useState(true);
  const [mostrarFiltrosMovil, setMostrarFiltrosMovil] = useState(false);

  const [productos, setProductos] = useState([]);
  const [filtros, setFiltros] = useState({
    fit: [],
    talla: "",
    color: "",
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
        "color": color->{name, hex}, // Acceder al nombre del color referenciado
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
    const colorMatch = !filtros.color || producto.color === filtros.color;

    return fitMatch && tallaMatch && colorMatch;
  });

  const [filtrosOpen, setFiltrosOpen] = useState(false);

  const toggleMenu = () => {
    setMostrarFiltrosMovil(!mostrarFiltrosMovil);
  };

  return (
    <div className="px-4 md:px-10  max-w-[1440px] min-w-sm mx-auto relative">
      <h1 className="uppercase font-anton text-center lg:text-[60px] border-y-[1px] lg:border-y-[0px] lg:border-b-[1px]  border-black lg:border-black/20">
        Todos los productos
      </h1>
      <div className="w-full flex justify-between items-center border-b-[1px] border-black md:border-black/20 ">
        <span
          className="hidden lg:flex border-r-[1px]  border-black md:border-black/20 px-[10px] lg:px-[70px] py-[10px] lg:py-[30px] font-gabarito  gap-2 text-[10px] md:text-[16px] cursor-pointer "
          onClick={() => setMostrarFiltros(!mostrarFiltros)}
        >
          <Image
            src={"/assets/iconos/filtros.svg"}
            alt="icono filtros"
            width={17}
            height={17}
            className="w-[7px] md:w-[17px] "
          />{" "}
          {mostrarFiltros ? "Ocultar filtros" : "Mostrar filtros"}
        </span>
        {/* movil */}
        <span
          className="lg:hidden border-r-[1px]  border-black md:border-black/20 px-[10px] lg:px-[70px] py-[10px] lg:py-[30px] font-gabarito flex gap-2 text-[10px] md:text-[16px] cursor-pointer "
          onClick={() => setMostrarFiltrosMovil(!mostrarFiltrosMovil)}
        >
          <Image
            src={"/assets/iconos/filtros.svg"}
            alt="icono filtros"
            width={17}
            height={17}
            className="w-[7px] md:w-[17px] "
          />{" "}
          {mostrarFiltrosMovil ? "Ocultar filtros" : "Mostrar filtros"}
        </span>
        <span className="border-l-[1px]  border-black md:border-black/20 px-[10px] lg:px-[70px] py-[10px] lg:py-[30px]  font-gabarito flex gap-2 text-[10px] md:text-[16px] ">
          Ordenar por{" "}
          <Image
            src={"/assets/iconos/ordenar.svg"}
            alt="icono flecha abajo"
            width={17}
            height={17}
            className="w-[7px] md:w-[17px] "
          />
        </span>
      </div>
      {/* filtros móvil */}
      <div
        className={`fixed top-0 left-0 w-full h-full pt-[100px] bg-white z-50 p-6 transition-transform transform ${mostrarFiltrosMovil ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Botón para cerrar el menú */}
        <div className="flex justify-start">
          <FaTimes
            className="text-[30px] cursor-pointer mb-10"
            onClick={toggleMenu}
          />
        </div>
        <Filtros
          mostrarFiltrosMovil={mostrarFiltrosMovil}
          productos={productos}
          setFiltros={setFiltros}
        />
      </div>

      <div className="flex justify-center ">
        <Filtros
          mostrarFiltrosMovil={mostrarFiltrosMovil}
          mostrarFiltros={mostrarFiltros}
          productos={productos}
          setFiltros={setFiltros}
        />
        <Productos productosFiltrados={productosFiltrados} />
      </div>
    </div>
  );
}

export default Shop;
