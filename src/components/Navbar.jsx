import Link from 'next/link'
import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='w-full h-[78px] flex justify-around items-center '>
        <div>

        </div>
        <div className='flex gap-x-4 font-anton uppercase '>
            <Link href={"/"}>
                Inicio
            </Link>
            <Link href={"/"}>
                Acerca De
            </Link>
            <Link href={"/"}>
                Tienda
            </Link>
            <Link href={"/"}>
                Contacto
            </Link>
        </div>
    
        <div className='flex space-x-4'>
                <FaShoppingCart className='cursor-pointer' />
                <FaSearch className='cursor-pointer' />
            
        </div>

    </div>
  )
}

export default Navbar