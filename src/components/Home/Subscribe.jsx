const Subscribe = () => {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-anton">SUSCRÍBETE</h2>
          <p className="mt-4 max-w-sm mx-auto">Recibe novedades, obtén recompensas
          y descubre nuevos lanzamientos antes que nadie</p>
          <div className="mt-6 flex items-center justify-center">
            <input type="email" placeholder="Ingresa tu correo electrónico" className="p-3 w-[80%] rounded-[28px] bg-[#F0F0F0] border border-gray-300 focus:outline-none" />
            <button className="ml-2 px-6 py-3 bg-black text-white rounded-[28px] hover:bg-gray-700 transition uppercase font-anton">Suscribirse</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Subscribe;
  