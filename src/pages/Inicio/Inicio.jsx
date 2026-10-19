import { useState } from 'react';
import './Inicio.css';

export default function Inicio({ setPaginaActual }) {
  // Estado para la calculadora interactiva de reciclaje
  const [tipoMaterial, setTipoMaterial] = useState('plastico');
  const [kilosMes, setKilosMes] = useState(20);

  const factoresImpacto = {
    plastico: { nombre: 'Plásticos (PET / PEAD)', co2: 1.5, agua: 25, arboles: 0.01, emoji: '🧴' },
    papel: { nombre: 'Papel y Cartón', co2: 0.9, agua: 15, arboles: 0.017, emoji: '📦' },
    vidrio: { nombre: 'Vidrio', co2: 0.3, agua: 4, arboles: 0.002, emoji: '🍾' },
    metal: { nombre: 'Metales y Latas', co2: 2.1, agua: 30, arboles: 0.025, emoji: '🥫' }
  };

  const factorActivo = factoresImpacto[tipoMaterial];
  const co2Ahorrado = (kilosMes * factorActivo.co2).toFixed(1);
  const aguaAhorrada = (kilosMes * factorActivo.agua).toFixed(0);
  const arbolesProtegidos = (kilosMes * factorActivo.arboles).toFixed(2);

  const irA = (pagina) => {
    if (setPaginaActual) {
      setPaginaActual(pagina);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pagina-inicio">
      {/* 1. SECCIÓN HERO */}
      <section className="inicio-hero">
        <div className="contenedor hero-grid">
          <div className="hero-texto">
            <div className="insignia-peru">
              <span className="punto-verde"></span>
              Plataforma Nacional de Reciclaje • Perú
            </div>

            <h1 className="hero-titulo">
              Transformando los <span className="texto-destacado-verde">Residuos Sólidos</span> en Oportunidades para el Perú
            </h1>

            <p className="hero-bajada">
              En el Perú se generan más de <strong>21,000 toneladas diarias de basura</strong> y más del 70% puede ser valorizado. En <strong>ECOLIM S.A.C.</strong> conectamos hogares, comercios e industrias con recolección formal, segregación correcta y economía circular.
            </p>

            <div className="hero-botones">
              <button 
                className="btn-ecolim btn-ecolim-primario btn-grande"
                onClick={() => irA('solicitud')}
              >
                <span>Solicitar Recolección</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </button>

              <button 
                className="btn-ecolim btn-ecolim-secundario btn-grande"
                onClick={() => irA('catalogo')}
              >
                <span>Ver Catálogo de Residuos</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </button>
            </div>

            {/* Micro-estadísticas del Hero */}
            <div className="hero-indicadores">
              <div className="indicador-item">
                <span className="indicador-numero">+21 Mil</span>
                <span className="indicador-etiqueta">Toneladas generadas al día en Perú</span>
              </div>
              <div className="indicador-separador"></div>
              <div className="indicador-item">
                <span className="indicador-numero">70%</span>
                <span className="indicador-etiqueta">Materiales potencialmente aprovechables</span>
              </div>
              <div className="indicador-separador"></div>
              <div className="indicador-item">
                <span className="indicador-numero">100%</span>
                <span className="indicador-etiqueta">Trazabilidad bajo D.L. N° 1278</span>
              </div>
            </div>
          </div>

          {/* Tarjeta Visual Interactiva del Hero */}
          <div className="hero-tarjeta-visual">
            <div className="tarjeta-glow"></div>
            <div className="tarjeta-contenedor-visual">
              <div className="tarjeta-cabecera-visual">
                <div className="circulo-icono-hero">♻️</div>
                <div>
                  <span className="etiqueta-pequena">Operaciones ECOLIM S.A.C.</span>
                  <h3 className="titulo-tarjeta-hero">Circuito Limpio Perú</h3>
                </div>
              </div>

              <div className="pasos-reciclaje-hero">
                <div className="paso-item">
                  <span className="paso-numero">1</span>
                  <div>
                    <strong>Segregación en Origen</strong>
                    <p>Clasificación de plástico, papel, cartón y vidrio en casa o empresa.</p>
                  </div>
                </div>

                <div className="paso-item">
                  <span className="paso-numero">2</span>
                  <div>
                    <strong>Recolección Programada</strong>
                    <p>Unidades autorizadas recogen los materiales en tu distrito de Lima.</p>
                  </div>
                </div>

                <div className="paso-item">
                  <span className="paso-numero">3</span>
                  <div>
                    <strong>Valorización & Certificación</strong>
                    <p>Reingreso a la cadena productiva con constancia de disposición.</p>
                  </div>
                </div>
              </div>

              <div className="tarjeta-pie-hero">
                <span className="badge-lima">📍 Lima Metropolitana & Callao</span>
                <button 
                  className="btn-enlace-hero"
                  onClick={() => irA('servicios')}
                >
                  Conocer Servicios →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CALCULADORA INTERACTIVA DE RECICLAJE */}
      <section className="seccion-calculadora">
        <div className="contenedor">
          <div className="seccion-encabezado text-center">
            <span className="insignia-peru">Simulador Interactivo</span>
            <h2 className="seccion-titulo">Calcula tu Impacto Ecológico Mensual</h2>
            <p className="seccion-subtitulo">
              Descubre cuántos recursos vitales proteges al segregar tus materiales con <strong>ECOLIM S.A.C.</strong>
            </p>
          </div>

          <div className="calculadora-caja tarjeta-elevada">
            <div className="calculadora-controles">
              <label className="control-label">1. Selecciona el tipo de residuo:</label>
              <div className="materiales-selector">
                {Object.entries(factoresImpacto).map(([clave, item]) => (
                  <button
                    key={clave}
                    className={`btn-material ${tipoMaterial === clave ? 'activo' : ''}`}
                    onClick={() => setTipoMaterial(clave)}
                  >
                    <span className="material-emoji">{item.emoji}</span>
                    <span className="material-nombre">{item.nombre}</span>
                  </button>
                ))}
              </div>

              <div className="slider-grupo">
                <div className="slider-cabecera">
                  <label className="control-label">2. Cantidad estimada a reciclar al mes:</label>
                  <span className="slider-valor">{kilosMes} kg/mes</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={kilosMes}
                  onChange={(e) => setKilosMes(Number(e.target.value))}
                  className="rango-input"
                />
                <div className="slider-marcas">
                  <span>5 kg (Hogar pequeño)</span>
                  <span>50 kg (Condominio)</span>
                  <span>200 kg (Empresa / Local)</span>
                </div>
              </div>
            </div>

            {/* Resultados del Impacto */}
            <div className="calculadora-resultados">
              <h4 className="resultados-titulo">Aporte ambiental estimado:</h4>
              <div className="tarjetas-metricas">
                <div className="metrica-tarjeta">
                  <span className="metrica-icono">💨</span>
                  <span className="metrica-cifra">{co2Ahorrado} <small>kg</small></span>
                  <span className="metrica-desc">CO₂ evitado en la atmósfera</span>
                </div>

                <div className="metrica-tarjeta">
                  <span className="metrica-icono">💧</span>
                  <span className="metrica-cifra">{aguaAhorrada} <small>L</small></span>
                  <span className="metrica-desc">Litros de agua ahorrados</span>
                </div>

                <div className="metrica-tarjeta">
                  <span className="metrica-icono">🌳</span>
                  <span className="metrica-cifra">{arbolesProtegidos}</span>
                  <span className="metrica-desc">Equivalente en árboles preservados</span>
                </div>
              </div>

              <div className="resultado-accion">
                <button 
                  className="btn-ecolim btn-ecolim-primario"
                  onClick={() => irA('solicitud')}
                  style={{ width: '100%' }}
                >
                  ¡Quiero reciclar estos {kilosMes} kg con ECOLIM!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROPÓSITO Y MARCO PERUANO (D.L. 1278) */}
      <section className="seccion-mision">
        <div className="contenedor">
          <div className="mision-grid">
            <div className="mision-contenido">
              <span className="insignia-peru">Marco Institucional</span>
              <h2 className="seccion-titulo">Comprometidos con el Desarrollo Sostenible del Perú</h2>
              <p>
                La gestión deficiente de los residuos en las ciudades peruanas satura los botaderos informales y afecta la salud pública. Bajo los lineamientos de la <strong>Ley de Gestión Integral de Residuos Sólidos (D.L. N° 1278)</strong>, ECOLIM S.A.C. promueve la minimización y valorización de materiales como principio prioritario.
              </p>
              
              <div className="lista-beneficios-peru">
                <div className="beneficio-item">
                  <span className="beneficio-check">✓</span>
                  <div>
                    <strong>Segregación conforme a la Norma Técnica Peruana</strong>
                    <p>Adopción de estándares de código de colores (NTP 900.058) para facilitar la clasificación de reciclables.</p>
                  </div>
                </div>
                <div className="beneficio-item">
                  <span className="beneficio-check">✓</span>
                  <div>
                    <strong>Inclusión y Trazabilidad Formal</strong>
                    <p>Fomentamos el trabajo seguro y la alianza con recicladores formales reconocidos por las municipalidades.</p>
                  </div>
                </div>
                <div className="beneficio-item">
                  <span className="beneficio-check">✓</span>
                  <div>
                    <strong>Certificado de Disposición Final</strong>
                    <p>Emitimos constancia para negocios y empresas que sustentan su cumplimiento ambiental ante OEFA y MINAM.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mision-resumen-cajas">
              <div className="caja-valor">
                <span className="caja-valor-icono">🏡</span>
                <h3>Para Hogares & Familias</h3>
                <p>Aprende qué residuos separar, reduce tu basura semanal y coordina recojo gratuito o programado.</p>
                <button className="link-simple" onClick={() => irA('catalogo')}>Ver qué reciclar →</button>
              </div>

              <div className="caja-valor">
                <span className="caja-valor-icono">🏢</span>
                <h3>Para Negocios & Oficinas</h3>
                <p>Planes a medida para restaurantes, comercios y empresas que generan cartón, botellas y plásticos.</p>
                <button className="link-simple" onClick={() => irA('servicios')}>Ver planes corporativos →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACCESO RÁPIDO A LAS SECCIONES DE LA PLATAFORMA */}
      <section className="seccion-accesos">
        <div className="contenedor">
          <div className="seccion-encabezado text-center">
            <span className="insignia-peru">Navegación Integral</span>
            <h2 className="seccion-titulo">Explora los Módulos de ECOLIM S.A.C.</h2>
            <p className="seccion-subtitulo">
              Nuestra plataforma está pensada para cubrir todas las fases de la gestión de residuos en el Perú.
            </p>
          </div>

          <div className="grid-accesos">
            {/* Tarjeta 1: Catálogo */}
            <div className="tarjeta-modulo tarjeta-elevada" onClick={() => irA('catalogo')}>
              <div className="modulo-icono">📚</div>
              <h3>Catálogo de Residuos</h3>
              <p>Conoce los tipos de papel, cartón, plástico, vidrio y metales aprovechables en el Perú con recomendaciones de segregación.</p>
              <span className="modulo-link">Explorar Catálogo →</span>
            </div>

            {/* Tarjeta 2: Servicios */}
            <div className="tarjeta-modulo tarjeta-elevada" onClick={() => irA('servicios')}>
              <div className="modulo-icono">🚛</div>
              <h3>Servicios de Recolección</h3>
              <p>Rutas selectivas para residencias, galerías, oficinas y convenios especiales de gestión ambiental.</p>
              <span className="modulo-link">Ver Servicios →</span>
            </div>

            {/* Tarjeta 3: Solicitud */}
            <div className="tarjeta-modulo tarjeta-elevada" onClick={() => irA('solicitud')}>
              <div className="modulo-icono">📝</div>
              <h3>Solicitar Recolección</h3>
              <p>Formulario ágil para registrar tu dirección, distrito de Lima, tipo de residuo y fecha solicitada de recojo.</p>
              <span className="modulo-link">Registrar Solicitud →</span>
            </div>

            {/* Tarjeta 4: Impacto */}
            <div className="tarjeta-modulo tarjeta-elevada" onClick={() => irA('impacto')}>
              <div className="modulo-icono">📊</div>
              <h3>Impacto Ambiental</h3>
              <p>Indicadores demostrativos, preguntas frecuentes y beneficios ecológicos para nuestro país.</p>
              <span className="modulo-link">Revisar Estadísticas →</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BANNER FINAL CTA */}
      <section className="seccion-cta-final">
        <div className="contenedor">
          <div className="cta-caja">
            <h2>¿Listo para marcar la diferencia en tu comunidad?</h2>
            <p>
              Súmate a la red de segregación de ECOLIM S.A.C. y contribuye activamente al cuidado del medio ambiente en el Perú.
            </p>
            <div className="cta-acciones">
              <button 
                className="btn-ecolim btn-ecolim-primario btn-grande"
                onClick={() => irA('solicitud')}
              >
                Solicitar mi Primera Recolección
              </button>
              <button 
                className="btn-ecolim btn-ecolim-secundario btn-grande"
                onClick={() => irA('catalogo')}
              >
                Aprender a Separar Residuos
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
