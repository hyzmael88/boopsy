import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

function DatosModal({ isOpen, close, venta, handleGuardar, localVenta, setLocalVenta }) {
 // Crear una copia de venta en el estado local


 
 if (!isOpen) return null;
 


 const handleChangeCliente = (e) => {
   setLocalVenta({
     ...localVenta,
     cliente: {
       ...localVenta.cliente,
       [e.target.name]: e.target.value,
     },
   });
 };

 const handleChangeDestinatario = (e) => {
   setLocalVenta({
     ...localVenta,
     destinatario: {
       ...localVenta.destinatario,
       [e.target.name]: e.target.value,
     },
   });
 };



  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <div
        className="bg-white w-[1053px] h-[576px] rounded-[54px] flex flex-col items-center justify-center relative mx-8 overflow-y-auto no-scrollbar "
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          width={24}
          height={24}
          src="/assets/Carrito/cerrar.svg"
          alt="close"
          className="absolute top-2 right-4 m-[20px] cursor-pointer w-[24px] md:w-[35px] "
          onClick={close}
        />

        <div className="w-full h-full py-8  flex flex-col items-center ">
          <div className="w-[90%]   grid grid-cols-2 gap-[10px]">
            <span className=" text-[16px] font-inter font-bold col-span-2">
              Información del Comprador
            </span>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 "
              name="nombre"
              value={localVenta.cliente.nombre}
              onChange={handleChangeCliente}
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="apellidos"
              value={localVenta.cliente.apellidos}
              onChange={handleChangeCliente}
            />
            <input
              type="text"
              placeholder="Teléfono"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="telefono"
              value={localVenta.cliente.telefono}
              onChange={handleChangeCliente}
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="correo"
              value={localVenta.cliente.correo}
              onChange={handleChangeCliente}
            />
            <span className=" text-[16px] font-inter font-bold col-span-2">
              Información del Destinatario
            </span>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="nombre"
              value={localVenta.destinatario.nombre}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Teléfono"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="telefono"
              value={localVenta.destinatario.telefono}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Dirección"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4 col-span-2"
              name="direccion"
              value={localVenta.destinatario.direccion}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Colonia"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="colonia"
              value={localVenta.destinatario.colonia}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Estado"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="estado"
              value={localVenta.destinatario.estado}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Delegación"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="delegacion"
              value={localVenta.destinatario.delegacion}
              onChange={handleChangeDestinatario}
            />
            <input
              type="text"
              placeholder="Código Postal"
              className="w-full h-[40px] border-[1px] border-[#E39C9D] rounded-[10px] mt-[10px] pl-4"
              name="cp"
              value={localVenta.destinatario.cp}
              onChange={handleChangeDestinatario}
            />

            <span className=" text-[16px] font-inter font-bold col-span-2 ">
              Notas de Envío
            </span>
            <textarea
              placeholder="Notas de envío"
              className="h-[164px] w-full border-[1px] border-[#E39C9D] col-span-2 pl-4 pt-4 mt-[10px]"
              name="notas"
              value={localVenta.destinatario.notas}
              onChange={handleChangeDestinatario}
            />
            <div className="w-full flex justify-end col-span-2 gap-[10px] mb-8">
                <button className="bg-[#E39C9D] px-4 py-2 rounded-[10px]"
                onClick={handleGuardar}
                >
                    Guardar 
                </button>
                <button className="border-[2px] border-[#E39C9D] px-4 py-2 rounded-[10px]"
                onClick={close}
                >
                    Cancelar
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatosModal;
