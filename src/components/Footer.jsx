// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  const router = useRouter();

  return (
    <>
    {router.pathname.startsWith("/Login") || router.pathname.startsWith("/Dashboard") ? null : (
    <footer className="bg-black text-white py-10 mt-4 font-gabarito">
      <div className="max-w-7xl mx-auto px-4">
        {/* Sección superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2 text-center lg:text-start">
            <Image src="/assets/logob.svg" width={150} height={50} className='mb-4' alt="Logo Boopsy" />
            <Link href="/" className="text-white hover:text-gray-400">Inicio</Link>
            <Link href="/About" className="text-white hover:text-gray-400">Acerca de</Link>
            <Link href="/Shop" className="text-white hover:text-gray-400">Tienda</Link>
          </div>

          <div className="text-gray-400 text-[10px] text-center lg:text-start flex flex-col gap-[8px]">
            <p>José Domingo Lazo de la Vega s/n, Texcoco.</p>
            <p>+52 55 4025 2669</p>
            <p>example@boopsy.com</p>
          </div>
        </div>

        {/* Separador */}
        <div className="hidden lg:block border-t border-gray-700 my-6"></div>

        {/* Sección inferior */}
        <div className="md:flex justify-between items-center text-sm text-gray-400">
          <div className="hidden lg:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <span>Boopsy - México, 2024</span>
            <Link href="/" className="hover:text-gray-200">Tabla de tallas</Link>
            <Link href="Privacidad" className="hover:text-gray-200">Aviso de Privacidad</Link>
            <Link href="Terminos" className="hover:text-gray-200">Políticas de envío y devoluciones</Link>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-4 md:mt-0">
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
          <div className="lg:hidden border-t border-gray-700 my-6"></div>
            <p className='lg:hidden text-center'>Boopsy - México, {year}</p>
        </div>
      </div>
    </footer>
    )}
    </>
  );
};

export default Footer;
