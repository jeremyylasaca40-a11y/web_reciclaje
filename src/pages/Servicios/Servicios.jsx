import './Servicios.css';

export default function Servicios({ setPaginaActual }) {
  return (
    <div className="contenedor pagina-servicios-modulo">
      <div className="modulo-alerta">
        <span className="insignia-peru">Asignado a: Integrante 3</span>
        <h2>Servicios de Recolección y Gestión</h2>
        <p>
          Espacio reservado para el <strong>Integrante 3</strong> (Rama: <code>feature/servicios-recoleccion</code>).
        </p>
        <p>
          Aquí se desarrollarán los servicios para hogares y empresas, usando los datos de <code>data/servicios.js</code> y los componentes <code>TarjetaServicio</code> y <code>Boton</code>.
        </p>
        {setPaginaActual && (
          <button 
            className="btn-ecolim btn-ecolim-primario"
            onClick={() => setPaginaActual('inicio')}
            style={{ marginTop: '1.5rem' }}
          >
            ← Volver al Inicio
          </button>
        )}
      </div>
    </div>
  );
}
