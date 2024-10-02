const Subscribe = () => {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-anton">SUSCRÍBETE</h2>
          <p className="mt-4 max-w-sm mx-auto whitespace-pre-line">
            {
              `
              Recibe novedades, obtén recompensas
          y descubre nuevos lanzamientos antes que nadie
              `
            }
            </p>
          <div className="mt-6 flex flex-col lg:flex-row items-center justify-center">
            <input type="email" placeholder="Ingresa tu correo electrónico" className="py-1 lg:p-3 w-[80%] rounded-[28px] border-black lg:bg-[#F0F0F0] border lg:border-gray-300 focus:outline-none
            placeholder-black placeholder:text-center pl-4
            
            " />
            <p className="text-[7px] mb-4 whitespace-pre-line">
              {
                `
                * Al suscribirte aceptas nuestras Políticas de Privacidad. 
                  Consulta nuestro aviso`}
              <span className="underline"> aquí.</span>
            </p>
            <button className="ml-2 w-[134px] h-[27px] bg-black text-white rounded-[28px] hover:bg-gray-700 transition uppercase font-anton text-[16px]">Suscribirse</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Subscribe;
  