function FiltrarTarjeta({ seleccionar }) {
  return (
    <div className="filtro">
      <select onChange={(e) => seleccionar(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Colegio">Colegio</option>
        <option value="Casa">Casa</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Otro">Otro</option>
      </select>
    </div>
  );
}

export default FiltrarTarjeta;