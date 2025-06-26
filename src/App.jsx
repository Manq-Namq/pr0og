import React, { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";
import Lista from "./componentes/Lista";
import Filtro from "./componentes/Filtro";;
import './App.css'

const categoriasPredeterminadas = ["colegio", "casa", "trabajo", "otro"];

function App() {
  const [tareas, setTareas] = useState([]);
  const [categoriaFiltro, setCategoriaFiltro] = useState("0");

  // Cargar tareas de localStorage al iniciar
  useEffect(() => {
    const guardadas = localStorage.getItem("tareas");
    if (guardadas) setTareas(JSON.parse(guardadas));
  }, []);

  // Guardar tareas en localStorage cuando cambian
 

  const agregarTarea = (tarea) => setTareas([...tareas, tarea]);

  const eliminarTarea = (id) => setTareas(tareas.filter(t => t.id !== id));

  const cambiarEstado = (id) => {
    setTareas(tareas.map(t => {
      if (t.id !== id) return t;
      let nuevoEstado = "Pendiente";
      if (t.estado === "Pendiente") nuevoEstado = "En Proceso";
      else if (t.estado === "En Proceso") nuevoEstado = "Finalizado";
      return { ...t, estado: nuevoEstado };
    }));
  };

  const tareasFiltradas = categoriaFiltro === "0"
    ? tareas
    : tareas.filter(t => t.categoria === categoriaFiltro);

  // Extraer categorías únicas para el filtro
  const categorias = Array.from(new Set(tareas.map(t => t.categoria)));

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Formulario onAgregar={agregarTarea} />
      <Filtro categoria={categoriaFiltro} onFiltrar={setCategoriaFiltro} categorias={categorias} />
      <Lista tareas={tareasFiltradas} onEliminar={eliminarTarea} onCambiarEstado={cambiarEstado} />
    </div>
  );
}

export default App;
