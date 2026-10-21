import TarjetaServicio from '../../components/TarjetaServicio/TarjetaServicio';
import { servicios } from '../../data/servicios';
import './Servicios.css';

export default function Servicios({ setPaginaActual }) {
  function solicitarRecoleccion() {
    if (!setPaginaActual) return;
    setPaginaActual('solicitud');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="pagina-servicios">
      <section className="servicios-hero">
        <div className="contenedor">
          <span className="insignia-peru">SOLUCIONES DE RECICLAJE</span>
          <h1>Un servicio para cada forma de reciclar</h1>
          <p>
            Conectamos hogares, empresas y comunidades con una gestión
            responsable de sus residuos aprovechables.
          </p>
          <button
            className="btn-ecolim btn-ecolim-primario"
            onClick={solicitarRecoleccion}
          >
            Solicitar una recolección
          </button>
        </div>
      </section>

      <section
        className="contenedor servicios-listado"
        aria-labelledby="servicios-titulo"
      >
        <div className="servicios-encabezado">
          <h2 id="servicios-titulo">Nuestros servicios</h2>
          <p>Elige la solución que mejor se adapte a tus necesidades.</p>
        </div>
        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <TarjetaServicio
              key={servicio.id}
              servicio={servicio}
              onSolicitar={solicitarRecoleccion}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
