import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';

function Filtros({ productos, setFiltros, mostrarFiltros, mostrarFiltrosMovil, selectedFit }) {
  // Estados para los filtros
  const [fitOptions, setFitOptions] = useState([]);
  const [tallaOptions, setTallaOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [selectedTallas, setSelectedTallas] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);


  // Fetch fit and color options from Sanity
  useEffect(() => {
    const fetchOptions = async () => {
      const fitsQuery = `*[_type == "fit"]{name}`;
      const colorsQuery = `*[_type == "color"]{name, hex}`;

      const [fits, colors] = await Promise.all([
        client.fetch(fitsQuery),
        client.fetch(colorsQuery),
      ]);

      setFitOptions(fits);
      setColorOptions(colors);
    };

    fetchOptions();
  }, []);

  // Extract unique talla options from products
  useEffect(() => {
    const tallas = [
      ...new Set(productos.flatMap((p) => p.tallas.map((t) => t.talla))),
    ]; // Obtener tallas únicas

    setTallaOptions(tallas);
  }, [productos]);

  useEffect(() => {
    if (selectedFit) {
      setFiltros((prev) => ({
        ...prev,
        fit: [selectedFit],
      }));
    }
  }, [selectedFit, setFiltros]);

  // Función para manejar los cambios en el fit
  const handleFitChange = (e) => {
    const { value, checked } = e.target;
    setFiltros((prev) => ({
      ...prev,
      fit: checked
        ? [...prev.fit, value]
        : prev.fit.filter((fit) => fit !== value),
    }));
  };

  const handleTallaChange = (event) => {
    const { value, checked } = event.target;
    setSelectedTallas((prevSelectedTallas) =>
      checked
        ? [...prevSelectedTallas, value]
        : prevSelectedTallas.filter((talla) => talla !== value)
    );
  };

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    setSelectedColors((prevSelectedColors) =>
      checked
        ? [...prevSelectedColors, value]
        : prevSelectedColors.filter((color) => color !== value)
    );
  };

useEffect(() => {
  setFiltros((prev) => ({
    ...prev,
    tallas: selectedTallas,
    colores: selectedColors,
  }));
}, [selectedTallas, selectedColors, setFiltros]);

  return (
    <div className={` ${mostrarFiltrosMovil ? "block lg:hidden " : "hidden"} ${mostrarFiltros && "hidden lg:block w-1/5 p-4"} font-gabarito `}>
      {/* Filtro de Fit */}
      <div className="mb-4">
        <h3 className=" font-gabarito font-bold mb-2 border-b-[1px] border-black/20">Fit</h3>
        {fitOptions.map((fitOption) => (
          <label key={fitOption.name} className="block mb-2">
            <input
              type="checkbox"
              value={fitOption.name}
              onChange={handleFitChange}
            />
            <span className="ml-2">{fitOption.name}</span>
          </label>
        ))}
      </div>

      {/* Filtro de Talla */}
      <div className="mb-4">
        <h3 className="font-bold font-gabarito mb-2 border-b-[1px] border-black/20">Talla</h3>
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
        <h3 className="font-gabarito font-bold mb-2 border-b-[1px] border-black/20">Color</h3>
        {colorOptions.map((colorOption) => (
          <label key={colorOption.name} className="flex gap-1 mb-2">
            <input
              type="checkbox"
              value={colorOption.name}
              name="color"
              onChange={handleColorChange}
            />
            <div className="ml-2 font-gabarito text-[16px] flex gap-2">
              <div
                className="w-[20px] h-[20px] rounded-full"
                style={{ backgroundColor: colorOption.hex }}
              />{" "}
              {colorOption.name}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filtros;
