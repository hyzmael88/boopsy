import { motion } from 'framer-motion';

export default function Privacidad() {
  return (
    <div className="px-4 lg:px-20 py-10">
      {/* Título principal */}
      <motion.h1
        className="text-3xl lg:text-4xl font-bold uppercase text-center mb-10 font-anton"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Aviso de Privacidad
      </motion.h1>

      {/* Sección de aviso de privacidad */}
      <motion.div
        className="text-gray-700 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          En <strong>SELVEDGE</strong>, nos comprometemos a proteger la privacidad y los datos personales de nuestros clientes. Este Aviso de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal cuando realiza una compra en nuestro sitio web <strong>www.selvedge.com</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Responsable del tratamiento de los datos personales</h2>
        <p>
          SELVEDGE con domicilio en [dirección de la empresa o contacto] es responsable de la recopilación y tratamiento de sus datos personales.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Datos que recopilamos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Datos personales: nombre completo, dirección de envío, correo electrónico, número de teléfono.</li>
          <li>Datos de pago: los datos de su tarjeta de crédito/débito se procesan de manera segura a través de la plataforma Stripe. Nosotros no almacenamos información financiera como números de tarjetas o códigos de seguridad.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. Finalidad del tratamiento de los datos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Procesar y completar su compra, incluyendo la entrega de productos.</li>
          <li>Comunicarnos con usted en relación a su pedido, problemas con el envío o servicio al cliente.</li>
          <li>Enviar ofertas promocionales, boletines informativos, y comunicaciones de marketing, siempre y cuando usted haya dado su consentimiento previo.</li>
          <li>Cumplir con obligaciones legales y fiscales.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. Compartición de sus datos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Con proveedores de servicios de pago, como Stripe, para procesar sus transacciones de manera segura.</li>
          <li>Con empresas de mensajería y paquetería para la entrega de su pedido.</li>
          <li>Con agencias de marketing y mailing para el envío de comunicaciones promocionales, si usted ha dado su consentimiento.</li>
          <li>Cuando sea requerido por la ley o para cumplir con alguna disposición legal.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">5. Uso de Stripe para procesamiento de pagos</h2>
        <p>
          Utilizamos Stripe como plataforma para el procesamiento de pagos. Stripe garantiza que los datos de su tarjeta de crédito/débito se manejan de manera segura y cumpliendo con los estándares de seguridad de la industria. Para más información sobre cómo Stripe protege su información, puede consultar su política de privacidad en <a href="https://stripe.com/privacy" className="text-blue-600 underline">https://stripe.com/privacy</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Seguridad de los datos</h2>
        <p>
          Implementamos medidas de seguridad adecuadas para proteger sus datos personales contra el acceso no autorizado, uso indebido o divulgación. Sin embargo, ninguna transmisión de datos por internet es completamente segura, por lo que no podemos garantizar la seguridad absoluta de la información transmitida.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Derechos del titular de los datos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Acceder a sus datos personales.</li>
          <li>Rectificar datos incorrectos o incompletos.</li>
          <li>Solicitar la cancelación de sus datos cuando ya no sean necesarios para los fines para los que fueron recabados.</li>
          <li>Oponerse al tratamiento de sus datos personales para fines específicos, como el marketing.</li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, puede contactarnos a través del correo electrónico <strong>Ejemplo@selvedge.com</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Modificaciones al Aviso de Privacidad</h2>
        <p>
          Nos reservamos el derecho de realizar cambios a este Aviso de Privacidad en cualquier momento. Cualquier modificación será publicada en esta página, por lo que le recomendamos revisarla periódicamente.
        </p>

        <h2 className="text-2xl font-semibold mt-6">9. Contacto</h2>
        <p>
          Si tiene alguna duda o inquietud sobre este Aviso de Privacidad o el tratamiento de sus datos personales, puede contactarnos en <strong>Ejemplo@selvedge.com</strong> o a través de [número de teléfono].
        </p>
      </motion.div>
    </div>
  );
}
