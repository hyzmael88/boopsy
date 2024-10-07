import { motion } from 'framer-motion';

export default function Terminos() {
  return (
    <div className="px-4 lg:px-20 py-10">
      {/* Título principal */}
      <motion.h1
        className="text-3xl lg:text-4xl font-anton uppercase text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Términos y Condiciones
      </motion.h1>

      {/* Sección de términos y condiciones */}
      <motion.div
        className="text-gray-700 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Bienvenido a <strong>SELVEDGE</strong>. Estos Términos y Condiciones regulan el uso de nuestro sitio web [URL del sitio] y las transacciones que realice a través de nuestra tienda en línea. Al acceder y utilizar este sitio, usted acepta cumplir con estos términos. Le recomendamos leerlos cuidadosamente antes de realizar cualquier compra.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Información General</h2>
        <p>
          SELVEDGE es una tienda en línea dedicada a la venta de ropa. Toda la información de contacto, como dirección de la empresa y correo de atención al cliente, se encuentra disponible en la sección de Contacto de nuestro sitio web.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Uso del Sitio</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Usted se compromete a utilizar este sitio únicamente para fines legales y de acuerdo con los presentes Términos y Condiciones.</li>
          <li>Está prohibido utilizar el sitio para transmitir contenido que sea ofensivo, amenazante, difamatorio, que vulnere los derechos de terceros o que infrinja cualquier ley aplicable.</li>
          <li>Nos reservamos el derecho de bloquear o restringir el acceso a cualquier usuario que no cumpla con estas disposiciones.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. Productos y Precios</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Los precios de los productos están expresados en pesos mexicanos (MXN) y pueden estar sujetos a cambios sin previo aviso.</li>
          <li>Hacemos todo lo posible para mostrar con precisión los colores y características de los productos en el sitio, pero no podemos garantizar que su pantalla represente fielmente los colores reales.</li>
          <li>Todos los pedidos están sujetos a disponibilidad. Si un producto no está disponible después de haber realizado su pedido, le informaremos de inmediato y procederemos a la cancelación del pedido y reembolso correspondiente, si aplica.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. Procesamiento de Pagos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Aceptamos pagos a través de Stripe, una plataforma segura que maneja toda la información relacionada con las transacciones financieras. No almacenamos información sensible como números de tarjetas de crédito o débito en nuestros servidores.</li>
          <li>Al utilizar nuestros servicios, usted acepta cumplir con las políticas de uso de Stripe. Puede consultar su política de privacidad en <a href="https://stripe.com/privacy" className="text-blue-600 underline">https://stripe.com/privacy</a>.</li>
          <li>Todos los pagos deben realizarse en el momento de la compra. Nos reservamos el derecho de cancelar cualquier pedido si el pago no es aprobado.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">5. Política de Envío</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Realizamos envíos a [especificar las áreas geográficas de envío] a través de [nombre de la empresa de mensajería].</li>
          <li>Los tiempos de entrega pueden variar según su ubicación. Después de realizar el pedido, recibirá un correo de confirmación con los detalles de envío.</li>
          <li>SELVEDGE no se hace responsable de retrasos en la entrega por causas ajenas a nosotros, como problemas con la empresa de mensajería o circunstancias fuera de nuestro control.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">6. Política de Devoluciones y Reembolsos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Aceptamos devoluciones dentro de los [número de días] días posteriores a la recepción del producto, siempre que el producto esté en su estado original, sin usar y con sus etiquetas intactas.</li>
          <li>Los gastos de envío de las devoluciones correrán por cuenta del cliente, salvo en casos de productos defectuosos o errores en el envío.</li>
          <li>Una vez que recibamos la devolución y confirmemos su estado, emitiremos un reembolso a través del mismo método de pago utilizado para la compra.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">7. Promociones y Ofertas</h2>
        <p>
          Ocasionalmente, podemos ofrecer descuentos o promociones especiales en nuestro sitio web. Estas ofertas estarán disponibles por tiempo limitado y estarán sujetas a términos específicos que se comunicarán al momento de su activación. Nos reservamos el derecho de cancelar cualquier oferta o promoción en caso de abuso o uso indebido.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Propiedad Intelectual</h2>
        <p>
          Todo el contenido disponible en este sitio, incluyendo textos, gráficos, logotipos, imágenes, y software, es propiedad de SELVEDGE y proveedores de marca o de nuestros proveedores de contenido, y está protegido por las leyes de propiedad intelectual. Usted no puede reproducir, distribuir, modificar o utilizar ningún contenido de este sitio sin nuestro consentimiento previo por escrito.
        </p>

        <h2 className="text-2xl font-semibold mt-6">9. Limitación de Responsabilidad</h2>
        <p>
          SELVEDGE no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de este sitio, incluso si hemos sido advertidos de la posibilidad de dichos daños. No garantizamos que el sitio esté libre de errores, virus u otros componentes dañinos.
        </p>

        <h2 className="text-2xl font-semibold mt-6">10. Modificaciones a los Términos y Condiciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio será publicado en esta página, por lo que le recomendamos revisarla periódicamente. El uso continuado del sitio web después de la publicación de los cambios constituirá su aceptación de dichos cambios.
        </p>

        <h2 className="text-2xl font-semibold mt-6">11. Jurisdicción y Ley Aplicable</h2>
        <p>
          Estos Términos y Condiciones se rigen por las leyes mexicanas. Cualquier disputa que surja en relación con el uso de este sitio será sometida a la jurisdicción exclusiva de los tribunales de la República Mexicana.
        </p>

        <h2 className="text-2xl font-semibold mt-6">12. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con estos Términos y Condiciones, por favor contáctenos en [correo electrónico de contacto] o a través de [número de teléfono].
        </p>
      </motion.div>
    </div>
  );
}
