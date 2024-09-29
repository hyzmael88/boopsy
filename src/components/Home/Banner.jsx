import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="w-full xl:h-[635px] flex">
      <div className="w-1/2">
        <Image width={1920} height={635} src="/assets/banner.png" alt="banner"
        className="object-cover" 
        />
      </div>
      <div className=" w-1/2 bg-black text-white flex flex-col items-center justify-center">
        <h1 className="w-full text-[40px] lg:text-[50px] xl:text-[80px] leading-[50px] xl:leading-[81px] text-center max-w-[320px] mx-auto">REDEFINIENDO EL ESTILO CONTEMPORÁNEO</h1>
        <p className="text-center text-[20px] max-w-sm mx-auto">
          Nuevos estilos. Nuevos lanzamientos. Descubre cuál es tu favorito.
        </p>
        <button className="rounded-[20px] text-black bg-white h-[50px] font-anton px-4 mt-4  ">NUEVOS LANZAMIENTOS</button>
      </div>
    </div>
  );
}

export default Banner;
