import axios from "axios";

const API_URL = "http://localhost:3000/Tareas"; // cambia la URL según tu servidor

export const getTarea = () => axios.get(API_URL);
export const crearTarea = (tarea) => axios.post(API_URL, tarea);
export const eliminarTarea = (id) => axios.delete(`${API_URL}/${id}`);
export const actualizarEstado = (id, nuevoEstado) =>
axios.patch(`${API_URL}/${id}`, { estado: nuevoEstado });