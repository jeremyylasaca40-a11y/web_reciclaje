import './CatalogoResiduos.css';

export default function CatalogoResiduos({ setPaginaActual }) {
  return (
    <div className="contenedor pagina-modulo">
      <div className="modulo-alerta">
        <span className="insignia-peru">Asignado a: Integrante 2</span>
        <h2>Catálogo de Residuos Sólidos</h2>
        <p>
          Espacio reservado para el <strong>Integrante 2</strong> (Rama: <code>feature/catalogo-residuos</code>).
        </p>
        <p>
          Aquí se implementará el catálogo de papel, cartón, plástico, vidrio y metales, recomendaciones para separar residuos, buscador y filtros interactivos con los datos de <code>data/residuos.js</code> y el componente <code>TarjetaResiduo</code>.
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
