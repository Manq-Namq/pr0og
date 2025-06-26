import TareaTarjeta  from "./conmponentes/TareaTarjeta";
function Lista({ tareas, onEliminar, onCambiarEstado }) {

  const niveles = { "Alto": 1, "Medio": 2, "Bajo": 3 };
  const tareasOrdenadas = tareas.slice().sort((a, b) => niveles[a.prioridad] - niveles[b.prioridad]);

  return (
    <div className="listaDeTarea">
      {tareasOrdenadas.map(tarea => (
        <TareaTarjeta
          key={tarea.id}
          tarea={tarea}
          onEliminar={onEliminar}
          onCambiarEstado={onCambiarEstado}
        />
      ))}
    </div>
  );
}

export default Lista;