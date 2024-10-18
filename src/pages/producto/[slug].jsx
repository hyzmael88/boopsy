import Otros from "@/components/Shop/Otros";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Dialog } from "@headlessui/react"; // Librería para modal
import { toast } from 'react-toastify';

export default function Producto({ producto }) {
  const { addToCart } = useContext(AppContext);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedImage, setSelectedImage] = useState(producto.imagenes[0].asset.url);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado para el loading
  const [thumbnailLoading, setThumbnailLoading] = useState({}); // Estado de carga de las miniaturas


  // Actualizar `selectedImage` cuando `producto` cambie
  useEffect(() => {
    setSelectedImage(producto?.imagenes[0]?.asset.url || '');
    setIsLoading(true); // Reiniciar el estado de carga cuando se cambia el producto
  }, [producto]);

  // Abrir/Cerrar Modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Manejar selección de miniatura
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
    setIsZoomed(false); // Reset zoom when changing image
  };

    // Manejar el evento de carga de la imagen
    const handleImageLoad = () => {
      setIsLoading(false); // Ocultar el skeleton cuando la imagen esté cargada
      console.log("Imagen cargada");
    };
     // Manejar la carga de las miniaturas
  const handleThumbnailLoad = (url) => {
    setThumbnailLoading((prev) => ({ ...prev, [url]: false })); // Actualizar el estado de carga de la miniatura
  };

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Por favor selecciona una talla", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    addToCart(producto, size, qty);
    toast.success("Producto agregado al carrito", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="p-4 md:p-10 max-w-[1440px] min-w-sm mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imágenes del producto */}
        <div className="">
          <div className="relative overflow-hidden">
          {isLoading && (
              <div className="w-full h-[500px] bg-gray-200 animate-pulse"></div>
            )}

            {/* Imagen principal con zoom */}
            <Image
              key={producto.slug.current}
              src={selectedImage}
              alt={producto.nombre}
              width={1500}
              height={1500}
              className={`w-full h-auto transition-transform duration-300 ${
                isZoomed ? "scale-150" : ""
              } hover:cursor-zoom-in ${isLoading ? "hidden" : "block"}`}
              priority={true}
              onLoadingComplete={handleImageLoad}
              lazyload={true}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onClick={toggleModal}
            />
            <p className="text-sm mt-2 text-gray-500 cursor-pointer text-center" onClick={toggleModal}>
              Haz clic para ver en detalle
            </p>
          </div>

          {/* Galería de miniaturas */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {producto.imagenes.map((img, index) => (
                            <div key={index} className="relative">
                            {thumbnailLoading[img.asset.url] && (
                              <div className="w-full h-[100px] bg-gray-200 animate-pulse"></div>
                            )}
               <Image
                  key={index}
                  src={img.asset.url}
                  alt={`Imagen ${index + 1}`}
                  width={500}
                  height={500}
                  className={`w-full h-auto object-cover cursor-pointer border ${
                    selectedImage === img.asset.url ? "border-black" : "border-transparent"
                  } ${thumbnailLoading[img.asset.url] ? "hidden" : "block"}`}
                  onLoadingComplete={() => handleThumbnailLoad(img.asset.url)}
                  onClick={() => handleThumbnailClick(img.asset.url)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div>
          <h1 className="text-2xl font-anton uppercase text-[23px]">{producto.nombre}</h1>
          <p className=" font-gabarito text-[12px] text-black/40  mb-">SKU: {producto.sku}</p>
          <p className="text-lg font-gabarito text-[20px]">{producto.fit}</p>
          <p className="text-[20px] font-bold font-gabarito">${producto.precio} MXN</p>

          {/* Selección de color */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Color</h3>
            <div
              className="rounded-full h-[27px] w-[27px]"
              style={{ backgroundColor: producto.color }}
            />
          </div>
          <div className="mt-4">
            <p className="underline font-gabarito text-[16px] text-black cursor-pointer mb-4">Guía de tallas</p>
            <div className="w-full flex gap-4">
              <select
                className="w-[208px] h-[38px] border-[1px] border-black"
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
              <div className="w-[123px] h-[38px] border-[1px] border-black flex justify-around items-center font-gabarito text-[16px]">
                <span className="cursor-pointer" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                  -
                </span>
                <span>{qty}</span>
                <span className="cursor-pointer" onClick={() => setQty(qty + 1)}>
                  +
                </span>
              </div>
            </div>
          </div>

          {/* Botón de Agregar a la Bolsa */}
          <button
            className="mt-4 bg-black text-white w-full md:w-[256px] h-[50px] rounded-[28px] uppercase font-anton text-[30px]"
            onClick={handleAddToCart}
          >
            Agregar a Bolsa
          </button>

          {/* Descripción */}
          <div className="mt-6">
            <h3 className="font-anton text-[16px] mb-2 uppercase">Descripción</h3>
            <p className="max-w-[383px]">{producto.descripcion}</p>
          </div>

          {/* Envío y devoluciones */}
          <div className="mt-6">
            <h3 className="font-anton text-[16px] mb-2 uppercase">Envío y Devoluciones</h3>
            <p className="max-w-[383px]">{producto.envioDevoluciones}</p>
          </div>

          {/* Materiales y cuidados */}
          <div className="mt-6">
            <h3 className="font-anton text-[16px] mb-2 uppercase">Materiales y Cuidados</h3>
            <p className="max-w-[383px]">{producto.materiales}</p>
          </div>
        </div>
      </div>

      {/* Otros productos */}
      <Otros fit={producto.fit} color={producto.color} currentSlug={producto.slug.current} />

      {/* Modal de imagen ampliada */}
      <Dialog open={isModalOpen} onClose={toggleModal} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
        <div className="relative w-full max-w-4xl p-4 bg-white rounded-lg">
          <Image
            src={selectedImage}
            alt="Imagen ampliada"
            width={800}
            height={800}
            className="w-full h-auto object-cover"
          />
          <button
            className="absolute top-2 right-2 text-white bg-black rounded-full px-2 py-1"
            onClick={toggleModal}
          >
            Cerrar
          </button>
        </div>
      </Dialog>
    </div>
  );
}

// Función para obtener los datos del producto según el slug
export async function getServerSideProps(context) {
  const { slug } = context.params;

  const query = `*[_type == "producto" && slug.current == $slug][0]{
    nombre,
    slug,
    precio,
    sku,
    "fit": fit->name,
    "color": color->hex,
    tallas[] {
      talla,
      inventario
    },
    descripcion,
    materiales,
    envioDevoluciones,
    imagenes[] {
      asset-> {
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
