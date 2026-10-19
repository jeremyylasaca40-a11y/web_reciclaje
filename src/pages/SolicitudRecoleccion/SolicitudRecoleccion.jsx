import './SolicitudRecoleccion.css';

export default function SolicitudRecoleccion({ setPaginaActual }) {
  return (
    <div className="contenedor pagina-solicitud-modulo">
      <div className="modulo-alerta">
        <span className="insignia-peru">Asignado a: Integrante 3</span>
        <h2>Solicitud de Recolección de Residuos</h2>
        <p>
          Espacio reservado para el <strong>Integrante 3</strong> (Rama: <code>feature/servicios-recoleccion</code>).
        </p>
        <p>
          Aquí se desarrollará el formulario para registrar datos de contacto, distrito de Lima/Perú, dirección, tipo de residuo, volumen estimado, fecha solicitada y confirmación de envío.
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
