import { useState } from "react";//impota useState para manejar estados locales

function Formulario({ guardar }) {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("Colegio");
  const [prioridad, setPrioridad] = useState("Alta");
  function crearTarea() {
    if (texto.trim() === "") return;

    const nueva = { //Crea un objeto tarea 
      id: Date.now(),
      titulo: texto,
      prioridad: prioridad,
      categoria: categoria,
      estado: "Pendiente"
    };

    guardar(nueva); //llama la funcion para agregar la tarea al estado principal y limpia el input
    setTexto("");
  }

  return (//Renderiza el formulario con input para texto, selec para categoria y select para prioridad y btn para crear tarea
    <div id="formTarea">
      <div className="formulario">
        <input
          type="text"
          placeholder="Escribir tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <p>Categoría: 
        <select onChange={(e) => setCategoria(e.target.value)}>
          <option value="Colegio">Colegio</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Personal">Personal</option>
        </select></p>
        <p>Prioridad: 
        <select onChange={(e) => setPrioridad(e.target.value)}>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select></p>
      </div>
      <button onClick={crearTarea}>Agregar</button>
    </div>
  );
}

export default Formulario;