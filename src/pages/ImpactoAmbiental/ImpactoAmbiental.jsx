import './ImpactoAmbiental.css';

export default function ImpactoAmbiental({ setPaginaActual }) {
  return (
    <div className="contenedor pagina-impacto-modulo">
      <div className="modulo-alerta">
        <span className="insignia-peru">Asignado a: Integrante 4</span>
        <h2>Impacto Ambiental y Preguntas Frecuentes</h2>
        <p>
          Espacio reservado para el <strong>Integrante 4</strong> (Rama: <code>feature/impacto-ambiental</code>).
        </p>
        <p>
          Aquí se desarrollarán las estadísticas demostrativas del reciclaje en el Perú, beneficios ecológicos, sección interactiva de preguntas frecuentes (FAQ) y formulario/canales de contacto.
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
