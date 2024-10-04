import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full h-[78px] flex justify-between items-center px-4 md:px-10'>
      {/* Ícono del menú en versión móvil */}
      <div className="md:hidden">
        <FaBars className="text-xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Logo */}  
      <div>
        <Image src="/assets/logo.png" width={150} height={50} alt="Logo" />
      </div>

      {/* Enlaces del centro para versión de escritorio */}
      <div className='hidden md:flex gap-x-4 font-anton uppercase'>
        <Link href="/">Inicio</Link>
        <Link href="/About">Acerca De</Link>
        <Link href="/Shop">Tienda</Link>
      </div>

      {/* Íconos a la derecha */}
      <div className='flex space-x-4'>
        <FaShoppingCart className='cursor-pointer' />
{/*         <FaSearch className='cursor-pointer' />
 */}      </div>

      {/* Menú móvil */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 p-6 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Botón para cerrar el menú */}
        <div className="flex justify-end">
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Enlaces del menú móvil */}
        <div className="mt-10 flex flex-col space-y-6 text-[26px]">
          <Link href="/" onClick={toggleMenu}>Inicio</Link>
          <Link href="/About" onClick={toggleMenu}>Acerca De</Link>
          <Link href="/Shop" onClick={toggleMenu}>Tienda</Link>
          <div className='w-[90%] border-t-[1px] border-black h-[10px]'/>
          
          {/* Íconos de redes sociales */}
          <div className="flex space-x-6 mt-8">
            <FaFacebook className='text-2xl cursor-pointer' />
            <FaInstagram className='text-2xl cursor-pointer' />
            <FaTiktok className='text-2xl cursor-pointer' />
          </div>

          {/* Enlaces de políticas */}
          <div className="flex flex-col mt-6 text-sm text-black font-semibold">
            <Link href="/size-guide" onClick={toggleMenu}>Tabla de tallas</Link>
            <Link href="/privacy-policy" onClick={toggleMenu}>Aviso de Privacidad</Link>
            <Link href="/shipping-policy" onClick={toggleMenu}>Políticas de envío y devoluciones</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
