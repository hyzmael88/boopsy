import { AppContext } from '@/context/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { set } from 'sanity';

function Navbar() {

   const { cart ,getCart } = useContext(AppContext);

   const router = useRouter();

   const [totalItems, setTotalItems] = useState(0);

   useEffect(() => {
      getCart(); 
      setTotalItems(cart.reduce((acc, item) => acc + item.qty, 0));

    }, [cart]);



  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full h-[78px] flex justify-between items-center px-4 md:px-10 relative max-w-[1440px] min-w-sm mx-auto'>
      {/* Ícono del menú en versión móvil */}
      <div className="md:hidden">
        <FaBars className="text-xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Logo */}  
      <div className='relative z-10'>
        <Image src="/assets/logo.png" width={150} height={50} alt="Logo" />
      </div>

      {/* Enlaces del centro para versión de escritorio */}
      <div className='hidden md:flex gap-x-6 font-anton uppercase absolute left-1/2 transform -translate-x-1/2'>
        <Link href="/">Inicio</Link>
        <Link href="/About">Acerca De</Link>
        <Link href="/Shop">Tienda</Link>
      </div>

      {/* Íconos a la derecha */}
      <div className='flex space-x-4 z-10 '>
        <Link href="/Cart">
        <FaShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute right-2 top-5 md:top-5 md:right-7 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {totalItems}
                </span>
              )}
        </Link>
        {/* <FaSearch className='cursor-pointer' /> */}
      </div>

      {/* Menú móvil */}
      <div className={`fixed top-0 left-0 w-full h-full pt-[100px] bg-white z-50 p-6 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}> 
        {/* Botón para cerrar el menú */}
        <div className="flex justify-start">
          <FaTimes className="text-[30px] cursor-pointer" onClick={toggleMenu} />
        </div>

        
      {/* Logo */}  
      <div className='w-full flex justify-center mt-[63px]'>
        <Image src="/assets/logo.png" width={278} height={44} alt="Logo" />
      </div>

        {/* Enlaces del menú móvil */}
        <div className="mt-10 flex flex-col space-y-[15px] text-[26px]">
          <Link href="/" onClick={toggleMenu}
          className={router.pathname === '/' ? 'font-bold' : ''}
          >Inicio</Link>
          <Link href="/About" onClick={toggleMenu}
          className={router.pathname === '/About' ? 'font-bold' : ''}
          >Acerca De</Link>
          <Link href="/Shop" onClick={toggleMenu}
          className={router.pathname === '/Shop' ? 'font-bold' : ''}
          >Tienda</Link>
          <div className='w-[90%] border-t-[1px] border-black h-[10px]'/>

          {/* Íconos de redes sociales */}
          <div className="flex space-x-6 mt-8">
            <FaFacebook className='text-2xl cursor-pointer' />
            <FaInstagram className='text-2xl cursor-pointer' />
            <FaTiktok className='text-2xl cursor-pointer' />
          </div>

          {/* Enlaces de políticas */}
          <div className="flex flex-col mt-6 text-sm text-black font-gabarito">
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
