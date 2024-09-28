const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h4 className="font-bold">Envíos a todo México</h4>
              <a href="#" className="text-gray-400 hover:text-white transition">FAQ</a>
            </div>
            <div>
              <h4 className="font-bold">Somos una marca 100% Mexicana</h4>
              <a href="#" className="text-gray-400 hover:text-white transition">Contáctanos</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            <p>© 2024 Premium Jeans. Todos los derechos reservados.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400 transition">Facebook</a>
              <a href="#" className="hover:text-gray-400 transition">Instagram</a>
              <a href="#" className="hover:text-gray-400 transition">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  