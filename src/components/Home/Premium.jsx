import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Premium() {
    return (
        <section className="relative h-screen max-h-[582px] mt-4 ">
 <Image src={'/assets/home/premium.png'}  layout="fill" objectFit="cover" alt="hero" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"/>
            <div className=" absolute bottom-12 left-0 right-0 mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-extrabold animate-fade-in uppercase font-anton">PREMIUM QUALITY JEANS</h1>
              <p className="mt-4 text-lg md:text-xl max-w-md mx-auto">Te presentamos nuestra colección premium</p>
              <Link href="#" className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-[28px] text-lg  hover:bg-gray-200 transition font-anton uppercase">
                JEANS PREMIUM
              </Link>
          </div>
        </section>
      );
}

export default Premium