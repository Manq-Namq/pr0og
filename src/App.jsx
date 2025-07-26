import React, { useState } from "react";
import Formulario from "./componentes/Formulario";
import ListaTarea from "./componentes/ListaTarea";
import FiltrarTarjeta from "./componentes/FiltrarTarjeta";
import "./index.css";

function App() {
  const [tareas, setTareas] = useState([]);//arreglo tareas inicialmente vacio
  const [categoria, setCategoria] = useState("Todas");

  function agregarTarea(nueva) {
    setTareas([...tareas, nueva]);
  }

  function borrarTarea(id) {
    
    setTareas(tareas.filter(t => t.id !== id));//elimina la tarea con el id especificado del arreglo tareas
  }

  function cambiarEstado(id) {
    setTareas(tareas.map(t => {
      if (t.id === id) {
        let nuevoEstado;
        if (t.estado === "Pendiente") nuevoEstado = "En proceso";
        else if (t.estado === "En proceso") nuevoEstado = "Completada";
        else nuevoEstado = "Pendiente";
        return { ...t, estado: nuevoEstado };
      }
      return t;//Cambia el estado de la tarea segun su id ciclando entre "Pendiente", etc
    }));
  }

  const prioridadValor = { Alta: 1, Media: 2, Baja: 3 };//asigna valores num para ordenarlas

  const tareasFiltradas = (categoria === "Todas"
    ? tareas
    : tareas.filter(t => t.categoria === categoria)
  ).sort((a, b) => prioridadValor[a.prioridad] - prioridadValor[b.prioridad]);//Filtra tareas por categoria selec y las ordena segun su prioridad

  return (//3 componentes con las props
    <>
     <Formulario guardar={agregarTarea} />
     <FiltrarTarjeta seleccionar={setCategoria} />
      <ListaTarea 
        tareas={tareasFiltradas} 
        eliminar={borrarTarea} 
        cambiar={cambiarEstado} 
      />
    </>
  );
}

export default App;