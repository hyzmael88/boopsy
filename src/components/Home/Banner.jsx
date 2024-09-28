const Banner = () => {
    return (
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-banner.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold animate-fade-in">Redefiniendo el Estilo Contemporáneo</h2>
            <a href="#" className="inline-block mt-4 px-8 py-3 bg-white text-black rounded-md text-lg font-bold hover:bg-gray-200 transition">
              Ver la Colección
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;
  