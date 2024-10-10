import { client } from '@/sanity/lib/client';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import VentasModal from './VentasModal'; 
import { send } from "@emailjs/browser";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import { FaEdit, FaTrash } from 'react-icons/fa';
import TrackingModal from './TrackingModal';

function Venta({ venta, handleDeleteVenta }) {

  console.log(venta)

  const { updateVenta } = useContext(AppContext);

  const [product, setProduct] = useState(null);
  const [estado, setEstado] = useState("Pendiente");
  const [direccion, setDireccion] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');

const fetchStripeSession = async (sessionId) => {
  try {
    const response = await fetch('/api/stripe/get-stripe-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId }),
    });

    if (!response.ok) {
      throw new Error('Error al obtener la sesión de Stripe');
    }

    const data = await response.json();
    return data.customer; // Esto incluirá la información del cliente y dirección
  } catch (error) {
    console.error('Error fetching Stripe session:', error);
    return null;
  }
};

// Ejemplo de uso en el componente Venta
useEffect(() => {
  if (venta.sessionId) {
    const fetchDireccion = async () => {
      const direccionData = await fetchStripeSession(venta.sessionId);
      setDireccion(direccionData);  // Aquí guardamos la dirección del cliente
    };
    fetchDireccion();
  }
}, []);


  

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Obtener la dirección del cliente desde Stripe si existe un sessionId
  useEffect(() => {
    if (venta.sessionId) {
      const fetchDireccion = async () => {
        const direccionData = await fetchStripeSession(venta.sessionId);
        setDireccion(direccionData);
      };
      fetchDireccion();
    }
  }, []);
  

  const handleEstadoChange = (e) => {
    const newEstado = e.target.value;
    setEstado(newEstado);

    if (newEstado === "enviado") {
      setIsTrackingModalOpen(true);
    } else {
      sendEmail(newEstado);
      updateVenta(venta._id, { ...venta, envio: { ...venta.envio, estadoPedido: newEstado } });
    }
  };

  const handleTrackingSubmit = (number) => {
    setTrackingNumber(number);
    sendEmail('enviado', number);  // Aquí pasamos el número de seguimiento
    updateVenta(venta._id, { ...venta, envio: { ...venta.envio, estadoPedido: 'enviado', trackingNumber: number } });
  };

  const sendEmail = (estado, trackingNumber = '') => {
    const templateParams = {
      cliente_correo: venta?.customer_email,
      estado,
      tracking_number: trackingNumber,  // Incluir la guía de seguimiento
      facebook: "https://www.facebook.com/boopsy_jeans",
      instagram: "https://www.instagram.com/boopsy_jeans",
      whatsapp: "https://wa.me/+525540252669?text=Tengo%20una%20duda"
    };

    const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateID = estado === "enviado" 
    ? process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_PEDIDO_ENVIADO_ID 
    :
    estado === "finalizado" &&
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_PEDIDO_FINALIZADO_ID;
    const userID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_PUBLIC_KEY_ID;

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email enviado con éxito!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error al enviar email:', error);
      });
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col space-y-4 w-[300px]">
      {/* Imagen del producto */}
      {product?.imagenes && (
        <Image
          width={311}
          height={152}
          src={urlForImage(product?.imagenes[0].asset._ref)}
          alt={product?.nombre}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}
<span className="text-sm text-gray-600">{new Date(venta._createdAt).toLocaleDateString()}</span>
<span className="text-sm text-gray-600">{venta.customer_email}</span>
      {/* Información de la venta */}
      <div className="flex flex-col space-y-2">
        <div className='h-[100px] overflow-auto '>
        {
          venta.line_items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="font-semibold">{item.name}</span>
              <span className="text-sm text-gray-600">${item.price} MXN</span>
              <span className="text-sm text-gray-600">x{item.quantity}</span>
            </div>
          ))
        }
        </div>
        <span className="font-bold text-lg"></span>
        <p className="flex justify-between text-sm text-gray-600">Total: <span>${venta.amount_total} MXN</span></p>
        
        

        {direccion && (
  <div className="mt-4">
    <p className="font-semibold">Dirección del cliente:</p>
    <p>{direccion.name}</p>
    <p>{direccion.email}</p>
    <p>{direccion.address.line1}, {direccion.address.city}, {direccion.address.country}</p>
  </div>
)}


        {/* Estado del pedido */}
        <div className="flex items-center justify-between gap-2 mt-2">
          <select
            value={estado}
            onChange={handleEstadoChange}
            className="border rounded-md p-1"
          >
            <option value="pendiente">Pendiente</option>
            <option value="enviado">Enviado</option>
            <option value="finalizado">Finalizado</option>
          </select>
           {/* Botones de acción */}
        <div className="flex gap-4 mt-2">
{/*           <FaEdit className="cursor-pointer" onClick={openModal} />
 */}          <FaTrash className="cursor-pointer" onClick={() => handleDeleteVenta(venta._id)} />
        </div>
        </div>

        <TrackingModal
        isOpen={isTrackingModalOpen}
        close={() => setIsTrackingModalOpen(false)}
        onSubmit={handleTrackingSubmit}
      />
      </div>
    </div>
  );
}

export default Venta;
