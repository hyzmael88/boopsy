// components/Shop/Filtros.js
import React, { useState, useEffect } from 'react';

function Filtros({ productos, setFiltros }) {
  // Estados para los filtros
  const [fitOptions, setFitOptions] = useState([]);
  const [tallaOptions, setTallaOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);

  // Extract dynamic options from the products
  useEffect(() => {
    const fits = [...new Set(productos.map((p) => p.fit))]; // Get unique fits
    const tallas = [
      ...new Set(productos.flatMap((p) => p.tallas.map((t) => t.talla))),
    ]; // Get unique tallas
    const colores = [
      ...new Set(productos.flatMap((p) => p.color)),
    ]; // Get unique colores

    setFitOptions(fits);
    setTallaOptions(tallas);
    setColorOptions(colores);
  }, [productos]);

  // Funciones para manejar cambios en los filtros
  const handleFitChange = (e) => {
    const { value, checked } = e.target;
    setFiltros((prev) => ({
      ...prev,
      fit: checked
        ? [...prev.fit, value]
        : prev.fit.filter((fit) => fit !== value),
    }));
  };

  const handleTallaChange = (e) => {
    setFiltros((prev) => ({ ...prev, talla: e.target.value }));
  };

  const handleColorChange = (e) => {
    setFiltros((prev) => ({ ...prev, color: e.target.value }));
  };

  return (
    <div className="hidden md:block w-1/5 p-4 font-gabarito">
      {/* Filtro de Fit */}
      <div className="mb-4">
        <h3 className="uppercase font-bold mb-2">Fit</h3>
        {fitOptions.map((fitOption) => (
          <label key={fitOption} className="block mb-2">
            <input
              type="checkbox"
              value={fitOption}
              onChange={handleFitChange}
            />
            {console.log(fitOption)}
            {console.log(fitOptions)}
            <span className="ml-2">{fitOption}</span>
          </label>
        ))}
      </div>

      {/* Filtro de Talla */}
      <div className="mb-4">
        <h3 className="uppercase font-bold mb-2">Talla</h3>
        {tallaOptions.map((tallaOption) => (
          <label key={tallaOption} className="block mb-2">
            <input
              type="checkbox"
              value={tallaOption}
              name="talla"
              onChange={handleTallaChange}
            />
            <span className="ml-2">{tallaOption}</span>
          </label>
        ))}
      </div>

      {/* Filtro de Color */}
      <div className="mb-4">
        <h3 className="uppercase font-bold mb-2">Color</h3>
        {console.log(colorOptions)}
        {colorOptions.map((colorOption) => (
          <label key={colorOption} className="block mb-2">
            <input
              type="checkbox"
              value={colorOption
              }
              name="color"
              onChange={handleColorChange}
            />
            <span className="ml-2">{colorOption}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filtros;
