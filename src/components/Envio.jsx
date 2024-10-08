import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'

function Worldwide() {

  const router = useRouter();

  return (
    <>
    {router.pathname.startsWith("/Login") || router.pathname.startsWith("/Dashboard") ? null : (
    <div className='bg-black flex justify-center items-center text-white uppercase font-anton text-[10px] lg:text-[20px] h-[54px]  '>
      <p className='w-full flex items-center justify-center gap-2 lg:gap-4'>
        A PARTIR DE LA 3ER PIEZA LLÉVATE ENVÍO GRATIS +  ENVÍOS A TODO MÉXICO <Image src={"/assets/mexico.png"} alt='mexico' width={500} height={500} className='w-[15px] lg:w-[31px] h-[8px] lg:h-[17px] '  /> 
        </p>
        </div>
        )}
        </>
  )
}

export default Worldwide