function TareaTarjeta({ tarea, eliminar, cambiar }) {
  let clase = "";
  if (tarea.estado === "Pendiente") clase = "pendiente";
  else if (tarea.estado === "En proceso") clase = "en-proceso";
  else clase = "finalizada";

  let prioridadStyle = {};
  if (tarea.prioridad === "Alta") prioridadStyle = { color: "red", fontWeight: "bold" };
  else if (tarea.prioridad === "Media") prioridadStyle = { color: "orange", fontWeight: "bold" };
  else prioridadStyle = { color: "green", fontWeight: "bold" };
  return (
    <li className={clase}>
      <h2>{tarea.titulo}</h2>
      <p>Categoría: {tarea.categoria}</p>
      <p style={prioridadStyle}>{tarea.prioridad}</p>
      <p>Estado: {tarea.estado}</p>
      <button onClick={() => cambiar(tarea.id)}>Cambiar estado</button>
      <button onClick={() => eliminar(tarea.id)}>Eliminar</button>
    </li>
  );
}

export default TareaTarjeta;