const Header = () => {
    return (
      <header className="flex items-center justify-between px-4 py-2 bg-black text-white">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-lg font-bold">Premium Jeans</a>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-400 transition-all">Home</a>
            <a href="#" className="hover:text-gray-400 transition-all">Shop</a>
            <a href="#" className="hover:text-gray-400 transition-all">Categories</a>
            <a href="#" className="hover:text-gray-400 transition-all">About</a>
          </nav>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400 transition-all">Login</a>
          <a href="#" className="hover:text-gray-400 transition-all">Cart</a>
        </div>
      </header>
    );
  };
  
  export default Header;
  