// components/Footer.js
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Sección superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-white hover:text-gray-400">Inicio</a>
            <a href="#" className="text-white hover:text-gray-400">Acerca de</a>
            <a href="#" className="text-white hover:text-gray-400">Tienda</a>
            <a href="#" className="text-white hover:text-gray-400">Contacto</a>
          </div>

          <div className="text-gray-400">
            <p>José Domingo Lazo de la Vega s/n, Texcoco.</p>
            <p>+52 55 4025 2669</p>
            <p>example@boopsy.com</p>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Sección inferior */}
        <div className="md:flex justify-between items-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <span>Boopsy - México, 2024</span>
            <a href="#" className="hover:text-gray-200">Tabla de tallas</a>
            <a href="#" className="hover:text-gray-200">Aviso de Privacidad</a>
            <a href="#" className="hover:text-gray-200">Políticas de envío y devoluciones</a>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
