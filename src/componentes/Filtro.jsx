import React from "react";

function Filtro({ categoria, onFiltrar, categorias }) {
  return (
    <select className="buscar" value={categoria} onChange={e => onFiltrar(e.target.value)}>
      <option value="0">Todas las categorías</option>
      {categorias.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}

export default Filtro;