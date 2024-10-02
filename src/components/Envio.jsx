import Image from 'next/image'
import React from 'react'

function Worldwide() {
  return (
    <div className='bg-black flex justify-center items-center text-white uppercase font-anton text-[20px] h-[54px]  '>
      <p className='w-full flex items-center justify-center gap-4'>
        A PARTIR DE LA 3ER PIEZA LLÉVATE ENVÍO GRATIS +  ENVÍOS A TODO MÉXICO <Image src={"/assets/mexico.png"} alt='mexico' width={500} height={500} className='w-[31px] h-[17px] '  /> 
        </p>
        </div>
  )
}

export default Worldwide