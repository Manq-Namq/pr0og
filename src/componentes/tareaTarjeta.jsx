function TareaTarjeta({ tarea, eliminar, cambiar }) {
  let clase = "";
  if (tarea.estado === "Pendiente") clase = "pendiente";
  else if (tarea.estado === "En proceso") clase = "en-proceso";
  else clase = "finalizada";

  return (
    <li className={clase}>
      <h4>{tarea.titulo}</h4>
      <p>Categoría: {tarea.categoria}</p>
       <p>Prioridad: {tarea.prioridad}</p>
      <p>Estado: {tarea.estado}</p>
      <button onClick={() => cambiar(tarea.id)}>Cambiar estado</button>
      <button onClick={() => eliminar(tarea.id)}>Eliminar</button>
    </li>
  );
}

export default TareaTarjeta;