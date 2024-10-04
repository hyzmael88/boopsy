// components/Shop/Productos.js
import React from 'react';

function Productos({ productosFiltrados }) {
  return (
    <div className="w-3/4 p-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {productosFiltrados.map((producto) => (
        <div key={producto.slug} className="border p-2">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-64 object-cover"
          />
          <h3 className="mt-2 font-bold">{producto.nombre}</h3>
          <p>{producto.precio} MXN</p>
        </div>
      ))}
    </div>
  );
}

export default Productos;
