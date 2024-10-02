import Image from "next/image";
import React from "react";

function Banner2() {
  return (
    <div className="w-full flex flex-col xl:flex-row xl:h-[635px]">
      <div className="w-full xl:w-1/2 bg-black text-white flex flex-col items-center justify-center p-4 xl:p-0 relative">
        <Image
          width={1920}
          height={635}
          src="/assets/home/envios.png"
          alt="banner"
          className="object-cover w-full h-full"
        />
        <div className="w-full flex flex-col  justify-center items-center absolute z-10">
          <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[80px] leading-[40px] sm:leading-[50px] xl:leading-[81px] text-center whitespace-pre-line ">
            {`ENVÍOS A 
            TODO MÉXICO`}
          </h1>
          <p className="text-center text-[16px] sm:text-[20px] max-w-sm mx-auto mt-4">
            ¿Dudas sobre envíos o devoluciones? Consulta nuestras preguntas
            frecuentes.
          </p>
          <button className="rounded-[20px] text-white bg-black h-[50px] font-anton px-4 mt-4">
            FAQS
          </button>
        </div>
      </div>
      <div className="w-full xl:w-1/2 bg-black text-white flex flex-col items-center justify-center p-4 xl:p-0 relative">
        <Image
          width={1920}
          height={635}
          src="/assets/home/marca.png"
          alt="banner"
          className="object-cover w-full h-full"
        />
        <div className="w-full flex flex-col  justify-center items-center absolute z-10">
          <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[80px] leading-[40px] sm:leading-[50px] xl:leading-[81px] text-center whitespace-pre-line  ">
            {`
                SOMOS UNA
                MARCA 100%
                MEXICANA
            `}
          </h1>
          <p className="text-center text-[16px] sm:text-[20px] max-w-sm mx-auto mt-4">
            Descubre cómo nació la marca y nuestro impacto en el país.{" "}
          </p>
          <button className="rounded-[20px] text-white bg-black h-[50px] font-anton px-4 mt-4">
            CONÓCENOS{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
