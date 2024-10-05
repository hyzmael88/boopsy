const Subscribe = () => {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-anton">SUSCRÍBETE</h2>
          <p className="mt-4 lg:mt-0 whitespace-pre-line font-gabarito">
            {
              `
              Recibe novedades, obtén recompensas
          y descubre nuevos lanzamientos antes que nadie
              `
            }
            </p>
          <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start justify-center">
            <div className="w-[80%]">
            <input type="email" placeholder="Ingresa tu correo electrónico" className="w-full h-[48px]  rounded-[28px] border-black lg:bg-[#F0F0F0] border lg:border-gray-300 focus:outline-none lg:placeholder:text-[20px] font-gabarito
            placeholder-black  placeholder:text-center lg:placeholder:text-start pl-4
            
            " />
             <p className="text-left hidden lg:block text-[7px] lg:text-[14px] font-gabarito mb-4 whitespace-pre-line">
              {
                `
                * Al suscribirte aceptas nuestras Políticas de Privacidad. Consulta nuestro aviso`}
              <span className="underline"> aquí.</span>
            </p>
            </div>
            <p className="lg:hidden text-[7px]  font-gabarito mb-4 whitespace-pre-line">
              {
                `
                * Al suscribirte aceptas nuestras Políticas de Privacidad. 
                  Consulta nuestro aviso`}
              <span className="underline"> aquí.</span>
            </p>
            <button className="ml-2 w-[134px] lg:w-[265px] h-[27px] lg:h-[50px] bg-black text-white rounded-[28px] hover:bg-gray-700 transition uppercase font-anton text-[16px] lg:text-[30px]">Suscribirse</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Subscribe;
  