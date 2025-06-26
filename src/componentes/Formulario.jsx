import { useState } from "react";

function Formulario({ onAgregar }) {}
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [prioridad, setPrioridad] = useState("");

  const limpiar = () => {
    setNombre("");
    setDescripcion("");
    setCategoria("");
    setPrioridad("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !categoria || !prioridad) {
      alert("Por favor, completa todos los campos obligatorios: Nombre, Categoría y Nivel de Prioridad.");
      return;
    }
    onAgregar({
      id: Date.now(),
      nombre,
      descripcion,
      categoria,
      prioridad,
      estado: "Pendiente"
    });
    limpiar();
  };

  return (
    <form className="formulario">
      <select onChange={ (e) => setCategoria(e.target.value)}>
        <option value="categoria">Categoría</option>
        <option value="colegio">Colegio</option>
        <option value="casa">Casa</option>  
      <select/>
      <select className="opcion" value={prioridad} onChange={e => setPrioridad(e.target.value)}>
        <option value="Prioridad">Prioridad</option>
        <option value="Alto">Alto</option>
        <option value="Medio">Medio</option>
        <option value="Bajo">Bajo</option>
      </select>
      <button id="guardar" onClick={handleSubmit}>Guardar</button>
      <button id="eliminar" type="button" onClick={limpiar}>Limpiar</button>
    </form>
  );
}

export default Formulario;