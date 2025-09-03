import App from "./App.jsx";
import { getTareas, eliminarTarea, actualizarEstado } from "./services/TareasAPI.jsx";
import TareaTarjeta from "../componentes/TareaTarjeta.jsx";
import FiltrarTarjeta from "./componentes/FiltrarTarjeta.jsx";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [categoria, setCategoria] = useState("Todas");

  useEffect(() => {
    getTareas().then(res => setTareas(res.data));
  }, []);

  const handleEliminar = (id) => {
    eliminarTarea(id).then(() => {
      setTareas(tareas.filter(t => t.id !== id));
    });
  };

  const handleCambiar = (id, estado) => {
    actualizarEstado(id, estado).then(() => {
      setTareas(tareas.map(t => (t.id === id ? { ...t, estado } : t)));
    });
  };

  const prioridadValor = { Alta: 1, Media: 2, Baja: 3 };

  const tareasFiltradas = (categoria === "Todas"
    ? tareas
    : tareas.filter((t) => t.categoria === categoria)
  ).sort((a, b) => prioridadValor[a.prioridad] - prioridadValor[b.prioridad]);

  return (
    <>
      <FiltrarTarjeta seleccionar={setCategoria} />
      <ul className="lista-tareas">
        {tareasFiltradas.map((t) => (
          <TareaTarjeta
            key={t.id}
            tarea={t}
            Eliminar={() => handleEliminar(t.id)}
            CambiarEstado={() =>
              handleCambiar(t.id, t.estado === "Pendiente" ? "En proceso" : "Completada")
            }
          />
        ))}
      </ul>
    </>
  );
}