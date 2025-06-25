import React from "react";

function TareaTarjeta({ tarea, onEliminar, onCambiarEstado }) {
  return (
    <div className="tarea" data-categoria={tarea.categoria} data-prioridad={tarea.prioridad} data-estado={tarea.estado}>
      <div className="tarjeta">
        <button className="eliminar-tarea" onClick={() => onEliminar(tarea.id)}>X</button>
        <h2 className="nomTarea parraf">{tarea.nombre}</h2>
        <p className="descripcion parraf">{tarea.descripcion || ""}</p>
        <p className="categoria parraf">{tarea.categoria}</p>
        <p className="prioridad parraf">{tarea.prioridad}</p>
        <p className="estado parraf">{tarea.estado}</p>
        <button className="cambiar-estado" onClick={() => onCambiarEstado(tarea.id)}>Cambiar Estado</button>
      </div>
    </div>
  );
}
function Lista({ tareas, onEliminar, onCambiarEstado }) {
  // Ordenar por prioridad
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
export { TareaTarjeta };

