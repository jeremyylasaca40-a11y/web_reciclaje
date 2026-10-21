import Boton from '../Boton/Boton';
import './TarjetaServicio.css';

export default function TarjetaServicio({ servicio, onSolicitar }) {
  if (!servicio) return null;

  return (
    <article className="tarjeta-servicio-base tarjeta-elevada">
      <div className="tarjeta-servicio-icono" aria-hidden="true">
        {servicio.icono}
      </div>
      <span className="tarjeta-servicio-dirigido">{servicio.dirigidoA}</span>
      <h2>{servicio.titulo}</h2>
      <p className="tarjeta-servicio-descripcion">{servicio.descripcion}</p>

      <div className="tarjeta-servicio-detalle">
        <h3>Frecuencia</h3>
        <p>{servicio.frecuencia}</p>
      </div>

      <div className="tarjeta-servicio-detalle">
        <h3>Cobertura</h3>
        <ul>
          {servicio.distritos.map((distrito) => (
            <li key={distrito}>{distrito}</li>
          ))}
        </ul>
      </div>

      <Boton onClick={onSolicitar}>Solicitar este servicio</Boton>
    </article>
  );
}
