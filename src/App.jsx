import React, { useState } from "react";
import Formulario from "./componentes/Formulario";
import ListaTarea from "./componentes/ListaTarea";
import FiltrarTarjeta from "./componentes/FiltrarTarjeta";
import "./index.css";
//importa los componentes necesarios
function App() {
  const [tareas, setTareas] = useState([]); //tareas guarda el array de tareas creadas
  //setTareas es la función que actualiza el estado de tareas
  //useState inicializa el estado de tareas como un array vacío
  //useState es un hook de React que permite manejar el estado en componentes funcionales
  const [categoria, setCategoria] = useState("Todas");//estado para filtrar por categoría
  //setCategoria es la función que actualiza el estado de categoria
  function agregarTarea(nueva) { // función para agregar una nueva tarea
    setTareas([...tareas, nueva]); //actualiza el estado de tareas agregando la nueva tarea al array existente
    //el operador spread (...) se usa para crear un nuevo array que incluye todas las tareas existentes
  }

  function borrarTarea(id) { // función para eliminar una tarea por su id
    //id es el identificador único de la tarea a eliminar
    setTareas(tareas.filter((t) => t.id !== id));//actualiza el estado de tareas filtrando las tareas que no coinciden con el id proporcionado
    //filter crea un nuevo array que incluye solo las tareas que no tienen el id especificado
  }

  function cambiarEstado(id) { 
    setTareas(tareas.map((t) => {
      //map crea un nuevo array con las tareas modificadas
      if (t.id === id) { //si la tarea actual tiene el id que se pasa como argumento
        //cambia su estado entre "Pendiente", "En proceso" y "Completada"
         
        let nuevoEstado = t.estado === "Pendiente" //
          ? "En proceso"
          : t.estado === "En proceso"
          ? "Completada"
          : "Pendiente";
        return { ...t, estado: nuevoEstado };
      }
      return t;
    }));
  }

  const prioridadValor = { Alta: 1, Media: 2, Baja: 3 };

  const tareasFiltradas = (categoria === "Todas"
    ? tareas
    : tareas.filter((t) => t.categoria === categoria)
  ).sort((a, b) => prioridadValor[a.prioridad] - prioridadValor[b.prioridad]);

  return (
    <>
      <Formulario guardar={agregarTarea} />
      <FiltrarTarjeta seleccionar={setCategoria} />
      <ListaTarea tareas={tareasFiltradas} eliminar={borrarTarea} cambiar={cambiarEstado} />
    </>
  );
}

export default App;