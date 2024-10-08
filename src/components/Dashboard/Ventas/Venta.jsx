import { client } from '@/sanity/lib/client';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import VentasModal from './VentasModal'; 
import { send } from "@emailjs/browser";
import emailjs from '@emailjs/browser';
import Image from "next/image";


function Venta({ venta, productoVenta, handleDeleteVenta }) {


  const {updateVenta} = useContext(AppContext);


  const [product, setProduct] = useState([]);
  
  const fetchProductDetails = async (productId) => {
    const product = await client.fetch(`*[_id == "${productId}"]`);
    return product[0]; // Devuelve el primer producto que coincida con el ID
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProduct = await(
       fetchProductDetails(productoVenta?.product._ref)
      );
      setProduct(fetchedProduct);
    };

    fetchProducts();
  }, [venta]);

  const [isOpen, setIsOpen] = useState(false);

const [isModalOpen, setModalOpen] = useState(false);

const openModal = () => setModalOpen(true);
const closeModal = () => setModalOpen(false);

 const [estado, setEstado] = useState("pendiente");

 useEffect(() => {
    setEstado(venta.envio.estadoPedido)

  }, [venta])

  const [localVenta, setLocalVenta] = useState(venta); 
  
  // Actualizar localVenta cuando cambie venta
  useEffect(() => {
    setLocalVenta(venta);
  }, [venta]); 

  const handleGuardar = async () => {
    try {
      // Actualizar la venta en la base de datos
      await updateVenta(localVenta._id, localVenta);
      // Cerrar el modal después de guardar los cambios
      setModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error al guardar la venta:", error);
    }
  };

 

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
    sendEmail(e.target.value);
    updateVenta(venta._id, { ...venta, envio: { ...venta.envio, estadoPedido: e.target.value } })
     }




  const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
   const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_PEDIDO_ESTADO_ID ;
   const userID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_PUBLIC_KEY_ID;


  const sendEmail = (estado) => {
    const templateParamsConfirmado = {
      cliente_correo: venta?.cliente.correo, 
     message: 'Gracias por pedir en nuestra tienda, tu pedido ha sido confirmado, procederemos a enviarlo en breve',
   facebook: "https://www.facebook.com/auroelia",
   instagram: "https://www.instagram.com/auroelia.na",
   
   whatsapp: "https://wa.me/+525626306790?text=Tengo%20una%20duda"

    }
    const templateParamsEnviado = {
      cliente_correo: venta?.cliente.correo, 
     message: 'Gracias por pedir en nuestra tienda, tu pedido ha sido enviado',
     facebook: "https://www.facebook.com/auroelia",
   instagram: "https://www.instagram.com/auroelia.na",
   whatsapp: "https://wa.me/+525626306790?text=Tengo%20una%20duda"

    }
    const templateParamsFinalizado = {
      cliente_correo: venta?.cliente.correo, 
     message: 'Gracias por pedir en nuestra tienda, tu pedido ha sido finalizado. Esperamos que disfrutes tu compra y nos dejes una reseña en nuestra página de Facebook o Instagram.',
     facebook: "https://www.facebook.com/auroelia",
   instagram: "https://www.instagram.com/auroelia.na",
   
   whatsapp: "https://wa.me/+525626306790?text=Tengo%20una%20duda"

    }

     // Send the email using emailjs
    if (estado === "confirmado") {
      emailjs.send(serviceID, templateID, templateParamsConfirmado,  userID )
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          /* tengo que hacer update en Sanity para guardar el nuevo estado de pedido */
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    } else if (estado === "enviado") {
      emailjs.send(serviceID, templateID, templateParamsEnviado, userID)
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    } else if (estado === "finalizado") {
      emailjs.send(serviceID, templateID, templateParamsFinalizado, userID)
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
        
    }
   
   };
    


  return (
    <div>
      
        <div className="rounded-t-[21px]" style={{boxShadow: '0px 4px 40.6px 0px rgba(0, 0, 0, 0.12)'}}
        
        >
          {
            product?.imagenes&&

          <Image
          width={311}
          height={152}
          src={urlForImage(product?.imagenes[0].asset._ref)}
          alt={product?.nombre}
          className="w-[311px] h-[152px] object-cover rounded-t-[21px]"
          />
        }
          <div className="flex flex-col h-[300px] justify-center px-[25px] rounded-b-[21px] gap-[5px]">
            <div className="flex items-center gap-4">

            <span className="font-inter text-[14px] font-bold leading-[16px]">
              {product?.nombre}
            </span>
            <span>
              x{
                productoVenta.qty
              }
            </span>
           
             <div
                  
                  className={` bg-[#E39C9D] flex justify-center rounded-lg my-2 px-2 `}
                  
                  >
                    <p className="text-[14px]">

                   {productoVenta.size.tamano} 
                    </p>
                  </div>
                    </div>
           
            <div className="font-inter text-[14px]  leading-[16px] flex flex-wrap gap-[10px]">
              <span>
                ${venta.total}.00 
                </span>
              <span>
                {venta?.cupon}
                </span>
              
            </div>
            <span className="font-inter text-[14px]  leading-[16px]">
              {venta?.cliente.nombre} {venta?.cliente.apellidos}
            </span>
            <span className="font-inter text-[14px]  leading-[16px]">
              {venta?.destinatario.nombre} {venta?.destinatario.telefono}
            </span>
            <span className="font-inter text-[14px]  leading-[16px]">
              {venta?.envio.fecha} {venta?.envio.horario}
            </span>
            <div className="font-inter text-[14px]  leading-[16px] flex flex-wrap w-[250px] ">
              {venta?.envio.dedicatoria} 
            </div>
            <span className="font-inter text-[14px]  leading-[16px]">
              {venta?.envio.firma} 
            </span>
            <div className="font-inter text-[14px]  leading-[16px]  flex gap-1 font-light w-[250px]  flex-wrap">
              <span>{venta.destinatario.direccion},</span>
              <span>{venta.destinatario.colonia},</span>
              <span>{venta.destinatario.estado},</span>
              <span>{venta.destinatario.delegacion},</span>
              <span>{venta.destinatario.cp},</span>
              <span>{venta.destinatario.notas},</span>
            </div>
            <div className="w-full flex gap-[10px] mt-[10px]">
              <Image
              width={20}
              height={20}
                src="/assets/dashboard/Ventas/editarVenta.svg"
                alt="Editar"
                className="cursor-pointer"
                onClick={()=>openModal()}
              />
              {isModalOpen  && (
            <VentasModal
              isOpen={isModalOpen}
              close={closeModal}
              venta={venta}
              handleGuardar={handleGuardar}
              localVenta={localVenta}
              setLocalVenta={setLocalVenta}

              
            />
          )}
              <Image
              width={20}
              height={20}
                src="/assets/dashboard/Ventas/trashVenta.svg"
                alt="trash"
                className="cursor-pointer"
                onClick={()=>handleDeleteVenta(venta._id)}

              />
              
              <select
              value={estado} onChange={handleEstadoChange}
              className="border-[1px] border-[#E39C9D] rounded-[6px]">
                <option value="pendiente">Pendiente</option>
                <option value="confirmado">Confirmado</option>
                <option value="enviado">Enviado</option>
                <option value="finalizado">Finalizado</option>
              </select>
            </div>
          </div>
        </div>
    </div>
  );
}


export default Venta;