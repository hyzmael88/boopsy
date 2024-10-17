import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Fit from '@/components/Home/Fit';

export default function About() {
  // Estado para manejar las preguntas abiertas
  const [openFaq, setOpenFaq] = useState(null);

  // Función para manejar el colapsado/expandido de las preguntas
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="px-4 lg:px-20 py-10 max-w-[1440px] min-w-sm mx-auto">
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
            className="w-[395px] lg:w-full max-h-[222px] md:max-h-[549px] object-cover rounded-t-[35px] md:rounded-r-[0px] md:rounded-l-[79px]"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pl-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-[35px] lg:text-[50px] font-anton uppercase text-center md:text-left whitespace-pre-line lg:leading-[50px]">
            {`Redefiniendo el\nEstilo Contemporáneo`}
          </h1>
          <p className="mt-4 text-[12px] md:text-[15px] lg:text-[20px] text-center md:text-start font-gabarito max-w-[270px] md:max-w-[350px] lg:max-w-[450px] mx-auto md:mx-[0px]">
            Buscamos redefinir el estilo mexicano, fusionando conceptos y marcas bajo conceptos audaces de la alta costura.
          </p>
          <p className="mt-2 text-[12px] md:text-[15px] lg:text-[20px] text-center md:text-start font-gabarito max-w-[270px] md:max-w-[350px] lg:max-w-[450px] mx-auto md:mx-[0px]">
            Cada pieza es una expresión única de distinción, pensada para aquellos que buscan trascender lo convencional, integrando lo moderno, lo formal y lo sofisticado en un sólo lugar.
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
              <span className="text-[18px] md:text-[24px] lg:text-[30px]">{openFaq === index ? '-' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {openFaq === index && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mt-2 text-gray-600 text-[12px] md:text-[18px] lg:text-[30px]">
                    {faq.answer}{' '}
                    {faq.link && (
                      <a href={faq.link} target="_blank" rel="noreferrer" className="font-bold underline">
                        Más información
                      </a>
                    )}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <Fit />
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
    answer: 'El costo de envío es de $150, a partir de la 3er pieza llévate envío gratis. Puedes consultar el precio exacto durante el proceso de compra.',
  },
  {
    question: 'Me interesa ser distribuidor',
    answer: 'Puedes contactarnos vía WhatsApp para acordar cantidades, precio, forma de envío y acceso a la preventa de la siguiente temporada. ',
    link: 'https://wa.me/+525540252669?text=Hola!%20Estoy%20interesado%20en%20ser%20distribuidor%20y%20quisiera%20acordar%20cantidades,%20precio,%20forma%20de%20envío,%20y%20acceso%20a%20la%20preventa%20de%20la%20siguiente%20temporada.',
  },
  {
    question: '¿Es el mismo precio al por mayor? ',
    answer: 'Pregunta por nuestros códigos de descuento en compras a partir de 12 piezas.',
    link: 'https://wa.me/+525540252669?text=Hola!%20Quisiera%20saber%20si%20es%20el%20mismo%20precio%20al%20por%20mayor%20y%20más%20información%20sobre%20códigos%20de%20descuento%20en%20compras%20de%20más%20de%2012%20piezas.',
  },
  {
    question: '¿Cuáles son sus políticas de reembolso y devoluciones?',
    answer: 'Puedes devolver cualquier producto dentro de los primeros 30 días después de la compra. El reembolso se procesará a través del mismo método de pago utilizado.',
  },
];
