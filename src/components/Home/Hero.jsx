import Link from "next/link";

const Hero = () => {
    return (
      <section className="relative h-screen max-h-[608px] bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-hero-image.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"/>
          <div className=" absolute bottom-12 left-0 right-0 mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold animate-fade-in uppercase font-anton">Unleash Your Style</h1>
            <p className="mt-4 text-lg md:text-xl max-w-md mx-auto">Redefiniendo lo contemporáneo, 
            imponiendo tendencias</p>
            <Link href="#" className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-[28px] text-lg font-bold hover:bg-gray-200 transition font-anton uppercase">
              Ver Tienda
            </Link>
        </div>
      </section>
    );
  };
  
  export default Hero;
  