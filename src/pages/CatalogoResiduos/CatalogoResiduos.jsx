import { useState } from 'react';
import TarjetaResiduo from '../../components/TarjetaResiduo/TarjetaResiduo';
import { residuos } from '../../data/residuos';
import './CatalogoResiduos.css';

// Permite buscar sin distinguir mayúsculas ni tildes.
function normalizarTexto(texto) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export default function CatalogoResiduos({ setPaginaActual }) {
  const [busqueda, setBusqueda] = useState('');
  const [tipoSeleccionado, setTipoSeleccionado] = useState('todos');

  const palabras = normalizarTexto(busqueda)
    .split(/\s+/)
    .filter(Boolean);

  const hayFiltros =
    busqueda !== '' || tipoSeleccionado !== 'todos';

  // Combina la búsqueda y la categoría seleccionada.
  const residuosFiltrados = residuos.filter((residuo) => {
    const coincideTipo =
      tipoSeleccionado === 'todos' ||
      residuo.tipo === tipoSeleccionado;

    const texto = normalizarTexto(
      `${residuo.nombre} ${residuo.descripcion} ${residuo.ejemplos.join(' ')}`
    );

    const coincideBusqueda = palabras.every((palabra) =>
      texto.includes(palabra)
    );

    return coincideTipo && coincideBusqueda;
  });

  function limpiarFiltros() {
    setBusqueda('');
    setTipoSeleccionado('todos');
  }

  function solicitarRecoleccion() {
    setPaginaActual('solicitud');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="catalogo-residuos">
      {/* Presentación del catálogo */}
      <section
        className="catalogo-hero"
        aria-labelledby="catalogo-titulo"
      >
        <div className="contenedor catalogo-hero__interior">
          <div className="catalogo-hero__texto">
            <span className="insignia-peru">
              GUÍA DE RECICLAJE
            </span>

            <h1 id="catalogo-titulo">
              Separar bien es
              <br />
              el <span>primer paso.</span>
            </h1>

            <p>
              Descubre qué materiales puedes aprovechar y cómo
              prepararlos. Una pequeña acción en casa puede
              darles una nueva vida.
            </p>

            <a
              className="btn-ecolim btn-ecolim-primario"
              href="#catalogo-materiales"
            >
              Explorar materiales
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <aside
            className="catalogo-hero__guia"
            aria-label="Resumen de la guía"
          >
            <div
              className="catalogo-hero__simbolo"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 21 7-12a4 4 0 0 1 7 0l8 14M34 22l10 1 4-9M47 32l7 12a4 4 0 0 1-3 6H35M40 41l-5 9 6 7M24 50H10a4 4 0 0 1-3-6l8-14M19 40l-4-10-10 1" />
              </svg>
            </div>

            <span className="catalogo-hero__numero">
              {residuos.length} materiales
            </span>

            <h2>Muchas formas de empezar.</h2>

            <p>
              Papel, cartón, plástico, vidrio y metales.
              Aprende a reconocerlos y sepáralos desde el origen.
            </p>

            <div className="catalogo-hero__pasos">
              <span>Identifica</span>
              <span>Prepara</span>
              <span>Separa</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Buscador, filtros y tarjetas */}
      <section
        id="catalogo-materiales"
        className="contenedor catalogo-materiales"
        aria-labelledby="materiales-titulo"
      >
        <div className="catalogo-materiales__encabezado">
          <div>
            <span className="catalogo-residuos__antetitulo">
              CATÁLOGO DE RESIDUOS
            </span>

            <h2 id="materiales-titulo">
              Encuentra tu material
            </h2>

            <p>Busca un residuo o explora las categorías.</p>
          </div>

          <span className="catalogo-materiales__indicacion">
            Limpios, secos y separados.
          </span>
        </div>

        <div className="catalogo-herramientas">
          <label
            className="catalogo-buscador"
            htmlFor="busqueda-residuos"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 5 5" />
            </svg>

            <span className="catalogo-residuos__solo-lector">
              Buscar por material o ejemplo
            </span>

            <input
              id="busqueda-residuos"
              type="search"
              value={busqueda}
              onChange={(event) =>
                setBusqueda(event.target.value)
              }
              placeholder="Busca botellas, cajas, latas…"
              autoComplete="off"
            />
          </label>

          <div
            className="catalogo-filtros"
            role="group"
            aria-label="Filtrar por tipo de material"
          >
            <button
              type="button"
              className={
                tipoSeleccionado === 'todos'
                  ? 'catalogo-filtro activo'
                  : 'catalogo-filtro'
              }
              aria-pressed={tipoSeleccionado === 'todos'}
              onClick={() => setTipoSeleccionado('todos')}
            >
              Todos <span>{residuos.length}</span>
            </button>

            {residuos.map((residuo) => (
              <button
                type="button"
                key={residuo.tipo}
                className={
                  tipoSeleccionado === residuo.tipo
                    ? 'catalogo-filtro activo'
                    : 'catalogo-filtro'
                }
                aria-pressed={
                  tipoSeleccionado === residuo.tipo
                }
                onClick={() =>
                  setTipoSeleccionado(residuo.tipo)
                }
              >
                {residuo.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="catalogo-resultados">
          <p role="status" aria-live="polite">
            <strong>{residuosFiltrados.length}</strong>{' '}
            {residuosFiltrados.length === 1
              ? 'material encontrado'
              : 'materiales encontrados'}
          </p>

          {hayFiltros && (
            <button
              type="button"
              className="catalogo-limpiar"
              onClick={limpiarFiltros}
            >
              Limpiar filtros
              <span aria-hidden="true">×</span>
            </button>
          )}
        </div>

        {/* Tarjetas o mensaje sin resultados */}
        {residuosFiltrados.length > 0 ? (
          <div className="catalogo-grid">
            {residuosFiltrados.map((residuo) => (
              <TarjetaResiduo
                key={residuo.id}
                residuo={residuo}
              />
            ))}
          </div>
        ) : (
          <div className="catalogo-vacio">
            <svg
              className="catalogo-vacio__icono"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 5 5M8 10.5h5" />
            </svg>

            <h3>No encontramos coincidencias</h3>

            <p>
              Prueba con otro nombre o cambia la categoría
              seleccionada.
            </p>

            <button
              type="button"
              className="btn-ecolim btn-ecolim-secundario"
              onClick={limpiarFiltros}
            >
              Ver todos los materiales
            </button>
          </div>
        )}

        {/* Información complementaria */}
        <div className="catalogo-nota">
          <span
            className="catalogo-nota__icono"
            aria-hidden="true"
          >
            i
          </span>

          <p>
            <strong>Antes de entregar:</strong> confirma qué
            materiales recibe tu programa municipal o punto
            de acopio. Las condiciones pueden variar según
            el lugar.{' '}
            <a
              href="https://perulimpio.minam.gob.pe/yo-reciclo/"
              target="_blank"
              rel="noreferrer"
            >
              Consulta la guía del MINAM{' '}
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>

        {/* Navegación al módulo del integrante 3 */}
        {setPaginaActual && (
          <section
            className="catalogo-cta"
            aria-labelledby="catalogo-cta-titulo"
          >
            <div>
              <span className="catalogo-residuos__antetitulo">
                EL SIGUIENTE PASO
              </span>

              <h2 id="catalogo-cta-titulo">
                ¿Ya separaste tus materiales?
              </h2>

              <p>
                Continúa a la solicitud de recolección de ECOLIM.
              </p>
            </div>

            <button
              type="button"
              className="btn-ecolim btn-ecolim-primario"
              onClick={solicitarRecoleccion}
            >
              Solicitar recolección
              <span aria-hidden="true">→</span>
            </button>
          </section>
        )}
      </section>
    </div>
  );
}