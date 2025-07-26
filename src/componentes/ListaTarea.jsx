import TareaTarjeta from "./tareaTarjeta";

function ListaTarea({ tareas, eliminar, cambiar }) {
  return (
    <div id="listaTareas">
      <ul>
        {tareas.map((t) => (// sirve para recorrer todas las tareas y renderizar alogo por cada una
          <TarjetaTarea key={t.id} tarea={t} eliminar={eliminar} cambiar={cambiar} />//recorre cada elemento del array tareas
        ))}
      </ul>
    </div>
  );
}

export default ListaTarea;