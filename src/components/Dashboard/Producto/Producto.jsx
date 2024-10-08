import { AppContext } from "@/context/StateContext";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { client, urlFor } from "../../../lib/client";

import Swal from "sweetalert2";

import bote from "../../../assets/Icons/bote.png";
import editar from "../../../assets/Icons/editar.png";

function Producto({ producto }) {

  const { getProductos, updateProducto, deleteProducto } = AppContext();

  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("pendiente");

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [formData, setFormData] = useState({
    name: producto?.name,
    artist: producto?.artist,
    slug: producto?.slug,
    details: producto?.details,
    detailsENG: producto?.detailsENG,
    description: producto?.description,
    descriptionENG: producto?.descriptionENG,
    Shipping: producto?.shipping,
    ShippingENG: producto?.shippingENG,
    category: producto?.cateogry,
    price: producto?.price,
    cantidad: producto?.cantidad,
    image: producto?.imagen,
    file: producto?.file,
  });

  useEffect(() => {
    setFormData({
      name: producto?.name,
      artist: producto?.artist,
      slug: producto?.slug,
      details: producto?.details,
      detailsENG: producto?.detailsENG,
      description: producto?.description,
      descriptionENG: producto?.descriptionENG,
      Shipping: producto?.shipping,
      ShippingENG: producto?.shippingENG,
      category: producto?.cateogry,
      price: producto?.price,
      cantidad: producto?.cantidad,
      image: producto?.image,
      file: producto?.file,
    });
  }, [producto]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
  };

  const [quantity, setQuantity] = useState(producto?.cantidad);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    const newEstado = event.target.value;

    // Actualizar el campo estado en el formData
    const updatedFormData = { ...formData, estado: newEstado };

    // Llamar a la función para actualizar la venta
    updateProducto(producto._id, updatedFormData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteClick = async () => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción eliminará el producto. ¡Esta acción no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        const deletionSuccessful = await deleteProducto(producto._id);

        if (deletionSuccessful) {
         
          getProductos();
          Swal.fire("Eliminada", "El producto ha sido eliminada", "success");
        } else {
          Swal.fire("Error", "No se pudo eliminar la venta", "error");
        }

        Swal.fire("Eliminada", "El producto ha sido eliminado", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // El usuario ha cancelado la eliminación
        Swal.fire("Cancelado", "La eliminación ha sido cancelada", "error");
      }
    } catch (error) {
      console.error("Error al eliminar venta:", error);
      Swal.fire(
        "Error",
        "Ha ocurrido un error al eliminar el producto",
        "error"
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
    };

    // Mostrar una alerta de confirmación antes de enviar los datos actualizados
    const confirmationResult = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas actualizar el producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, actualizar",
      cancelButtonText: "Cancelar",
    });

    if (confirmationResult.isConfirmed) {
      try {
        const respuesta = await updateProducto(producto._id, updatedFormData);

        setShowModal(false);

        // Mostrar una alerta de éxito si la actualización fue exitosa
        Swal.fire(
          "Actualizado",
          "El producto ha sido actualizado correctamente",
          "success"
        );
      } catch (error) {
        console.log(error);

        // Mostrar una alerta de error si la actualización falló
        Swal.fire(
          "Error",
          "Ha ocurrido un error al actualizar el producto",
          "error"
        );
      }
    } else {
      // El usuario ha cancelado la actualización
      Swal.fire("Cancelada", "La actualización ha sido cancelada", "info");
    }
  };

  const [category, setCategory] = useState(null);

  useEffect(() => {
    client.fetch(`*[_id == "${producto?.category._ref}"]`).then((category) => {
      setCategory(category[0]);
    });
  }, [producto.category._ref]);

  return (
    <div className="w-[350px] h-[280px] md:h-[350px] rounded-[7px] border-[2px] bg-white">
      {producto && (
        <div className="w-full flex flex-row justify-center">
          <div className="w-[90%] flex flex-col gap-1">
            <div className="flex flex-row justify-between ">
              <span className="uppercase font-apollo tracking-[2px] mt-4 text-lg">
                {producto?.name}
              </span>
              <button onClick={handleEditClick}>
                <Image src={editar} alt="editar button" className="w-[20px]" />{" "}
              </button>
            </div>
            <div className="flex flex-row justify-between gap-8">
              <div className="w-[50%] h-full">
                <Image
                width={200}
                height={230}
                  src={urlFor(producto?.image[0]?.asset._ref)}
                  alt="imagen producto"
                  className="w-[150px] h-[150px] md:w-[200px] md:h-[230px]  object-contain"
                />
              </div>
              <div className="w-[50%] flex flex-col justify-center  ">
                <p className="font-apollo uppercase text-sm">
                  Fecha: {producto?._createdAt.substring(0, 10)}
                </p>
                <p className="font-apollo uppercase text-sm">
                  Precio: ${producto?.price}
                </p>
                <p className="font-apollo uppercase text-sm">
                  Artist: {producto?.artist}
                </p>
                <p className="font-apollo uppercase text-sm">
                  Categoria: {category?.title}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between mb-4">
              <div className="flex ">
                <button onClick={handleDeleteClick} className="mt-2">
                  <Image src={bote} alt="editar button" className="w-[15px] " />
                </button>
              </div>

              <div></div>
            </div>

            <Modal show={showModal} onClose={handleCloseModal} className="">
              <div className="p-6  ">
                <h2 className="text-xl mb-4">Editar producto</h2>
                <div>
                  <form
                    className="flex flex-col h-full w-full"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border-2 mt-2"
                      placeholder="nombre"
                      onChange={handleInputChange}
                      value={formData.name}
                      required
                    />
                    <input
                      type="text"
                      name="artist"
                      id="artist"
                      className="border-2 mt-2"
                      placeholder="artist"
                      onChange={handleInputChange}
                      value={formData.artist}
                      required
                    />
                    <input
                      type="text"
                      name="slug"
                      id="slug"
                      className="border-2 mt-2"
                      placeholder="slug"
                      onChange={handleInputChange}
                      value={formData.slug.current}
                      required
                    />

                    <textarea
                      type="text"
                      name="details"
                      id="details"
                      className="border-2 mt-2"
                      placeholder="detalles"
                      onChange={handleInputChange}
                      value={formData.details}
                      required
                    />
                    <textarea
                      type="text"
                      name="detailsENG"
                      id="detailsENG"
                      className="border-2 mt-2"
                      placeholder="detallesENG"
                      onChange={handleInputChange}
                      value={formData.detailsENG}
                      required
                    />
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      className="border-2 mt-2"
                      placeholder="descripcion"
                      onChange={handleInputChange}
                      value={formData.description}
                      required
                    />
                    <textarea
                      type="text"
                      name="descriptionENG"
                      id="descriptionENG"
                      className="border-2 mt-2"
                      placeholder="descripcion ENG"
                      onChange={handleInputChange}
                      value={formData.descriptionENG}
                      required
                    />
                    <textarea
                      type="text"
                      name="shipping"
                      id="shipping"
                      className="border-2 mt-2"
                      placeholder="envio"
                      onChange={handleInputChange}
                      value={formData.shipping}
                      required
                    />
                    <textarea
                      type="text"
                      name="shippingENG"
                      id="shippingENG"
                      className="border-2 mt-2"
                      placeholder="envio ENG"
                      onChange={handleInputChange}
                      value={formData.shippingENG}
                      required
                    />
                    <input
                      type="text"
                      name="category"
                      id="category"
                      className="border-2 mt-2"
                      placeholder="categoria"
                      onChange={handleInputChange}
                      value={category?.title}
                      required
                    />
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="border-2 mt-2"
                      placeholder="precio"
                      onChange={handleInputChange}
                      value={formData.price}
                      required
                    />
                     <div className="flex items-center space-x-4">
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        className="w-16 px-3 py-1 border rounded text-center"
        type="number"
        value={quantity}
        readOnly
      />
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  

    <label htmlFor="image" className="mt-2">
  Imagen:
</label>
<input
  type="file"
  accept="image/*"
  name="image"
  id="image"
  className="border-2 mt-1"
  onChange={handleImageChange}
  // Puedes omitir el value en un campo de archivo
/>

<label htmlFor="file" className="mt-2">
  Archivo:
</label>
<input
  type="file"
  name="file"
  id="file"
  className="border-2 mt-1"
  onChange={handleFileChange}
  // Puedes omitir el value en un campo de archivo
/>


                    
                  </form>
                </div>
                <div className="flex flex-row justify-between">
                  <button
                    className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit}
                  >
                    Guardar
                  </button>
                  <button
                    className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
                    onClick={handleCloseModal}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
}

export default Producto;
