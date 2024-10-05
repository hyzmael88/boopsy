import Image from "next/image";
import React from "react";

function Banner2() {
  return (
    <div className="w-full hidden lg:flex flex-col lg:flex-row xl:h-[635px]">
      <div className="w-full xl:w-1/2   text-white flex flex-col items-center justify-center   relative">
        <Image
          width={1920}
          height={635}
          src="/assets/home/envios.png"
          alt="banner"
          className="object-cover w-full h-full"
        />
        <div className="w-full flex flex-col  justify-center items-center absolute z-10">
          <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[80px] leading-[40px] sm:leading-[50px] xl:leading-[81px] text-center whitespace-pre-line font-anton pt-32">
            {`ENVÍOS A 
            TODO MÉXICO`}
          </h1>
          <p className="text-center text-[16px] sm:text-[20px] max-w-sm mx-auto mt-4">
            ¿Dudas sobre envíos o devoluciones? Consulta nuestras preguntas
            frecuentes.
          </p>
          <button className="rounded-[20px] text-white bg-black w-[144px] h-[50px] font-anton px-4 mt-4 text-[30px]">
            FAQS
          </button>
        </div>
      </div>
      <div className="w-full xl:w-1/2 bg-black text-white flex flex-col items-center justify-center  relative">
        <Image
          width={1920}
          height={635}
          src="/assets/home/marca.png"
          alt="banner"
          className="object-cover w-full h-full"
        />
        <div className="w-full h-full  absolute z-10 ">

        <Image
        width={1920}
        height={635}
         src="/assets/home/hashtaggreen.png"
         alt="banner"
         className="object-contain h-full w-full "
         />
         </div>

        <div className="w-full flex flex-col  justify-center items-center absolute z-20">
          <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[80px] leading-[40px] sm:leading-[50px] xl:leading-[81px] text-center whitespace-pre-line font-anton  ">
            {`
                ESTILO QUE
                TRASCIENDE
            `}
          </h1>
          <p className="text-center text-[16px] lg::text-[20px] max-w-sm mx-auto mt-4">
          Descubre cómo vamos más allá de las tendencias,
          fusionando lo mejor de lo formal, casual y moderno.
          </p>
          <button className="rounded-[20px] text-white bg-black w-[308px] h-[50px] font-anton px-4 mt-4 text-[30px]">
            CONÓCENOS{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
