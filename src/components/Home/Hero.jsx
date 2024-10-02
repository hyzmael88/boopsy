import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
      <section className="relative h-screen max-h-[425px] lg:max-h-[608px] realitve " >
        <Image src={'/assets/home/hero.png'}  layout="fill" objectFit="cover" alt="hero" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"/>
          <div className=" absolute bottom-12 left-0 right-0 mx-auto text-center text-white">
            <h1 className="text-[40px] md:text-7xl animate-fade-in uppercase font-anton">Unleash Your Style</h1>
            <p className="text-[12px] md:text-xl max-w-md mx-auto whitespace-pre-line">
              {`Redefiniendo lo contemporáneo, 
            imponiendo tendencias
            `}
            </p>
            <Link href="#" className="inline-block mt-4 w-[134px] h-[27px] bg-black text-white rounded-[28px] text-[16px]  hover:bg-gray-200 transition font-anton uppercase">
              Ver Tienda
            </Link>
        </div>
      </section>
    );
  };
  
  export default Hero;
  