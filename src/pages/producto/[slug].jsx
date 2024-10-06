import Otros from "@/components/Shop/Otros";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function Producto({ producto }) {

  const {addToCart} = useContext(AppContext);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    if (!size) {
      alert("Por favor selecciona una talla");
      return;
    }
    addToCart(producto, size, qty);
    console.log("Producto agregado a la bolsa:", producto);
  };



  return (
    <div className="p-4 md:p-10 max-w-[1440px] min-w-sm mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imágenes del producto */}
        <div>
          <Image
            src={producto.imagenes[0].asset.url}
            alt={producto.nombre}
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {producto.imagenes.map((img, index) => (
              <Image
                key={index}
                src={img.asset.url}
                alt={`Imagen ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-auto max-w-[596px] max-h-[878px]"
              />
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div>
          <h1 className="text-2xl font-anton uppercase text-[23px]">
            {producto.nombre}
          </h1>
          <p className="text-lg font-gabarito text-[20px]">{producto.fit}</p>
          <p className="text-[20px] font-bold font-gabarito">
            ${producto.precio} MXN
          </p>

          {/* Selección de color */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Color</h3>
            <div
              className="rounded-full h-[27px] w-[27px]"
              style={{ backgroundColor: producto.color }}
            />
          </div>
          <div className="mt-4">
            <p className="underline font-gabarito text-[16px] text-black cursor-pointer  ">
              Guía de tallas
            </p>
            <div className="w-full flex gap-4">
              <select className="w-[208px] h-[38px] border-[1px] border-black"
              value={size}
              onChange={(e) => setSize(e.target.value)}
           
              >
                <option value="">Talla</option>
                {producto.tallas.map((talla, index) => (
                  <option key={index} value={talla.talla}>
                    {talla.talla}
                  </option>
                ))}
              </select>
              <div className="w-[123px] h-[38px] border-[1px] border-black flex justify-around items-center font-gabarito text-[16px] ">
                <span
                  className="cursor-pointer"
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}

                >
                  -
                </span>
                <span>{qty}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </span>
              </div>
            </div>
          </div>

          {/* Agregar a la bolsa (ejemplo básico) */}
          <button className="mt-4 bg-black text-white w-full md:w-[256px] h-[50px] rounded-[28px] uppercase font-anton text-[30px] "
          onClick={handleAddToCart}
          >
            Agregar a Bolsa
          </button>

          {/* Descripción */}
          <div className="mt-6">
            <h3 className="font-anton text-[16px] mb-2 uppercase">
              Descripción
            </h3>
            <p className="max-w-[383px]">{producto.descripcion}</p>
          </div>

          {/* Envío y devoluciones */}
          <div className="mt-6">
            <h3 className="font-anton text-[16px] mb-2 uppercase">
              Envío y Devoluciones
            </h3>
            <p className="max-w-[383px]">{producto.envioDevoluciones}</p>
          </div>

          {/* Materiales y cuidados */}
          <div className="mt-6">
            <h3 className="font-anton text-[16px] mb-2 uppercase ">
              Materiales y Cuidados
            </h3>
            <p className="max-w-[383px]">{producto.materiales}</p>
          </div>
        </div>
      </div>

      {/* Otros productos */}
     <Otros
     fit={producto.fit}
     />
    </div>
  );
}

// Función para obtener los datos del producto según el slug
export async function getServerSideProps(context) {
  const { slug } = context.params;

  // Consulta GROQ para obtener los detalles del producto
  const query = `*[_type == "producto" && slug.current == $slug][0]{
    nombre,
    slug,
    precio,
    "fit": fit->name,
    "color": color->hex,
    tallas[]{
      talla,
      inventario
    },
    descripcion,
    materiales,
    envioDevoluciones,
    imagenes[]{
      asset->{
        url
      }
    }
  }`;

  const producto = await client.fetch(query, { slug });

  return {
    props: {
      producto,
    },
  };
}
