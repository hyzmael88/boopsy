const Subscribe = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Suscríbete</h2>
          <p className="mt-4">Recibe ofertas exclusivas y las últimas noticias.</p>
          <div className="mt-6 flex items-center justify-center">
            <input type="email" placeholder="Tu correo electrónico" className="p-3 w-2/3 md:w-1/2 border border-gray-300 rounded-md focus:outline-none" />
            <button className="ml-2 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-700 transition">Suscribirse</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Subscribe;
  