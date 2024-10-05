import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Categories from '@/components/Home/Categories';

export default function About() {
  // Estado para manejar las preguntas abiertas
  const [openFaq, setOpenFaq] = useState(null);

  // Función para manejar el colapsado/expandido de las preguntas
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="px-4 lg:px-20 py-10">
      {/* Sección principal */}
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
            
          <Image
            src="/assets/about/about.png"
            alt="Estilo contemporáneo"
            width={500}
            height={500}
            className="w-[395px] lg:w-full max-h-[222px] md:max-h-[549px] object-contain md:object-cover rounded-t-[35px] md:rounded-r-[0px] md:rounded-l-[79px]
            
            "
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pl-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-[35px] lg:text-[50px] font-anton uppercase text-center md:text-left whitespace-pre-line lg:leading-[50px]">
            {`Redefiniendo el
             Estilo Contemporáneo`}
          </h1>
          <p className="mt-4 text-[12px] md:text-[15px] lg:text-[20px] text-center md:text-start font-gabarito max-w-[270px] md:max-w-[350px] lg:max-w-[450px] mx-auto md:mx-[0px]">
          Buscamos redefinir el estilo mexicano, fusionando conceptos y marcas bajo conceptos audaces de la alta costura.
          </p>
          <p className="mt-2 text-[12px] md:text-[15px] lg:text-[20px] text-center md:text-start font-gabarito max-w-[270px] md:max-w-[350px] lg:max-w-[450px] mx-auto md:mx-[0px]">
          Cada pieza es una expresión única de distinción, 
pensada para aquellos que buscan trascender 
lo convencional, integrando lo moderno, 
lo formal y lo sofisticado en un sólo lugar.
          </p>
        </motion.div>
      </div>

      {/* Sección de Preguntas Frecuentes (FAQ) */}
      <motion.h2
        className="text-center text-[20px] lg:text-[60px] font-anton uppercase mt-8 lg:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Preguntas Frecuentes
      </motion.h2>

      <div className="mt-8 space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-black pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between w-full text-left text-[12px] md:text-[18px] lg:text-[30px] font-gabarito"
            >
              {faq.question}
              <span className='text-[18px] md:text-[24px] lg:text-[30px]'>{openFaq === index ? '-' : '+'}</span>
            </button>
            {openFaq === index && (
              <motion.p
                className="mt-2 text-gray-600 text-[12px] md:text-[18px] lg:text-[30px] "
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                transition={{ duration: 0.4 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
      <Categories/>
    </div>
  );
}

// Datos simulados de preguntas frecuentes
const faqData = [
  {
    question: '¿Hacen envíos a todo México?',
    answer: 'Sí, realizamos envíos a todas las regiones de México.',
  },
  {
    question: '¿Cuál es el costo de envío o varía acorde a la ubicación?',
    answer: 'El costo de envío depende de la ubicación y el peso del paquete. Puedes consultar el precio exacto durante el proceso de compra.',
  },
  {
    question: '¿Cuáles son sus políticas de envío especiales?',
    answer: 'Ofrecemos envíos gratuitos para pedidos superiores a $999 MXN y envíos express para ciertas ubicaciones.',
  },
  {
    question: '¿Cuáles son sus políticas de reembolso y devoluciones?',
    answer: 'Puedes devolver cualquier producto dentro de los primeros 30 días después de la compra. El reembolso se procesará a través del mismo método de pago utilizado.',
  },
];
