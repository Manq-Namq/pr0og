import TareaTarjeta from "./TareaTarjeta";

function ListaTarea({ tareas, eliminar, cambiar }) {
  return (
    <div id="listaTareas">
      <ul>
        {tareas.map((t) => (
          <TareaTarjeta key={t.id} 
          tarea={t} 
          eliminar={eliminar} 
          cambiar={cambiar} />
        ))}
      </ul>
    </div>
  );
}

export default ListaTarea;