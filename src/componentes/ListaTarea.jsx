import { useEffect, useState } from "react";
import { getTareas, eliminarTarea, actualizarEstado } from "./services/TareasAPI.jsx";
import TareaTarjeta from "./TareaTarjeta.jsx";
import FiltrarTarjeta from "./FiltrarTarjeta.jsx";

function ListaTarea() {
  const [tareas, setTareas] = useState([]);
  const [categoria, setCategoria] = useState("Todas");

  // Cargar tareas al inicio
  useEffect(() => {
    getTareas().then((res) => setTareas(res.data));
  }, []);

  // Eliminar tarea
  const handleEliminar = (id) => {
    eliminarTarea(id).then(() => {
      setTareas(tareas.filter((t) => t.id !== id));
    });
  };

  // Cambiar estado
  const handleCambiar = (id, estadoActual) => {
    const nuevoEstado =
      estadoActual === "Pendiente"
        ? "En proceso"
        : estadoActual === "En proceso"
        ? "Completada"
        : "Pendiente";

    actualizarEstado(id, nuevoEstado).then(() => {
      setTareas(
        tareas.map((t) =>
          t.id === id ? { ...t, estado: nuevoEstado } : t
        )
      );
    });
  };

  // Ordenar por prioridad
  const prioridadValor = { Alta: 1, Media: 2, Baja: 3 };

  const tareasFiltradas = (categoria === "Todas"
    ? tareas
    : tareas.filter((t) => t.categoria === categoria)
  ).sort(
    (a, b) => prioridadValor[a.prioridad] - prioridadValor[b.prioridad]
  );

  return (
    <div id="listaTareas">
      <FiltrarTarjeta seleccionar={setCategoria} />
      <ul>
        {tareasFiltradas.map((t) => (
          <TareaTarjeta
            key={t.id}
            tarea={t}
            eliminar={() => handleEliminar(t.id)}
            cambiar={() => handleCambiar(t.id, t.estado)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaTarea;