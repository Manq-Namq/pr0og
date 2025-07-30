import { useState } from "react";

function Formulario({ guardar }) {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("Colegio");
  const [prioridad, setPrioridad] = useState("Alta");

  function crearTarea(e) {
    e.preventDefault();

    if (texto.trim() === "") return;

    const nueva = {
      id: Date.now(),
      titulo: texto,
      prioridad,
      categoria,
      estado: "Pendiente"
    };

    guardar(nueva);
    setTexto("");
  }

  return (
    <form id="formTarea" onSubmit={crearTarea}>
      <input
        type="text"
        placeholder="Escribir tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="inputTarea"
      />
      <p>Categoría:
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="Colegio">Colegio</option>
        <option value="Casa">Casa</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Otro">Otro</option>
      </select></p>
      <p>Prioridad:
      <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
        <option className="alta" value="Alta">Alta</option>
        <option className="media" value="Media">Media</option>
        <option className="baja" value="Baja">Baja</option>
      </select></p>

      <button type="submit">Agregar</button>
    </form>
  );
}

export default Formulario;