import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="w-full flex flex-col xl:flex-row xl:h-[635px]">
      <div className="w-full xl:w-1/2">
        <Image
          width={1920}
          height={635}
          src="/assets/banner.png"
          alt="banner"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full xl:w-1/2 bg-black text-white flex flex-col items-center justify-center p-4 xl:p-0">
      <div className="w-full flex flex-col  justify-center items-center">

        <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[80px] leading-[40px] sm:leading-[50px] xl:leading-[81px] text-center  ">
          REDEFINIENDO EL ESTILO CONTEMPORÁNEO
        </h1>
        <p className="text-center text-[16px] sm:text-[20px] max-w-sm mx-auto mt-4">
          Nuevos estilos. Nuevos lanzamientos. Descubre cuál es tu favorito.
        </p>
        <button className="rounded-[20px] text-black bg-white h-[50px] font-anton px-4 mt-4">
          NUEVOS LANZAMIENTOS
        </button>
      </div>
    </div>
    
    </div>
  );
}

export default Banner;