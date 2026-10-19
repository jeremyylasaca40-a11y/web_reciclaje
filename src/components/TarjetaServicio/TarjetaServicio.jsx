import './TarjetaServicio.css';

// Componente asignado a: Integrante 3 (feature/servicios-recoleccion)
export default function TarjetaServicio({ servicio }) {
  if (!servicio) return null;
  return (
    <div className="tarjeta-servicio-base tarjeta-elevada">
      <h4>{servicio.titulo}</h4>
      <p>{servicio.descripcion}</p>
    </div>
  );
}
