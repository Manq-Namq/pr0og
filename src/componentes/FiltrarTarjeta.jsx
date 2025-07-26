function FiltrarTarjeta({ seleccionar }) {
  return (
    <div className="filtro">
      <select onChange={(e) => seleccionar(e.target.value)}>
        <option value="todas">Todas</option>
        <option value="colegio">Colegio</option>
        <option value="trabajo">Trabajo</option>
        <option value="personal">Personal</option>
      </select>
    </div>
  );
}

export default FiltrarTarjeta;