import './Footer.css';

export default function Footer({ setPaginaActual }) {
  const navegarA = (id) => {
    if (setPaginaActual) {
      setPaginaActual(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-ecolim">
      {/* Franja Superior de Cobertura Nacional */}
      <div className="footer-banner-nacional">
        <div className="contenedor banner-nacional-contenido">
          <div className="banner-nacional-texto">
            <span className="insignia-peru" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff' }}>
              <span className="punto-verde" style={{ backgroundColor: '#84cc16', boxShadow: '0 0 10px #84cc16' }}></span>
              Red de Recolección Perú
            </span>
            <h4>¿Tu empresa u hogar genera residuos aprovechables?</h4>
            <p>Atendemos en Lima Metropolitana (Miraflores, San Isidro, Surco, Los Olivos y más) con planes de recojo formal.</p>
          </div>
          <button 
            className="btn-ecolim btn-banner-accion"
            onClick={() => navegarA('solicitud')}
          >
            Registrar Solicitud Ahora
          </button>
        </div>
      </div>

      {/* Contenido Principal del Footer */}
      <div className="contenedor footer-principal">
        {/* Columna 1: Identidad y Marco Legal */}
        <div className="footer-col footer-col-marca">
          <div className="footer-logo">
            <div className="logo-icono" style={{ width: 38, height: 38 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <span className="footer-logo-texto">ECOLIM <span style={{ color: '#10b981' }}>S.A.C.</span></span>
          </div>
          <p className="footer-descripcion">
            Empresa prestadora de servicios de recolección selectiva y valorización de residuos sólidos no peligrosos en el Perú. Fomentamos la economía circular y la segregación en origen bajo el marco del Decreto Legislativo N° 1278.
          </p>
          <div className="footer-certificaciones">
            <span className="chip-certificacion">🌿 D.L. N° 1278 (MINAM)</span>
            <span className="chip-certificacion">♻️ Economía Circular</span>
          </div>
        </div>

        {/* Columna 2: Navegación Rápida */}
        <div className="footer-col">
          <h4 className="footer-subtitulo">Navegación</h4>
          <ul className="footer-lista">
            <li><button onClick={() => navegarA('inicio')}>Inicio</button></li>
            <li><button onClick={() => navegarA('catalogo')}>Catálogo de Residuos</button></li>
            <li><button onClick={() => navegarA('servicios')}>Nuestros Servicios</button></li>
            <li><button onClick={() => navegarA('solicitud')}>Solicitar Recolección</button></li>
            <li><button onClick={() => navegarA('impacto')}>Impacto Ambiental</button></li>
          </ul>
        </div>

        {/* Columna 3: Materiales Aprovechables */}
        <div className="footer-col">
          <h4 className="footer-subtitulo">Residuos Aprovechables</h4>
          <ul className="footer-lista">
            <li><span>📄 Papel bond, revistas y periódicos</span></li>
            <li><span>📦 Cartón corrugado y cartulinas</span></li>
            <li><span>🧴 Plásticos PET, PEAD y tapitas</span></li>
            <li><span>🥫 Latas de aluminio y hojalata</span></li>
            <li><span>🍾 Botellas y frascos de vidrio</span></li>
          </ul>
        </div>

        {/* Columna 4: Contacto y Ubicación en Perú */}
        <div className="footer-col">
          <h4 className="footer-subtitulo">Atención en Perú</h4>
          <div className="footer-contacto-item">
            <span className="contacto-icono">📍</span>
            <div>
              <strong>Sede Central:</strong>
              <p>Av. Javier Prado Este, San Isidro, Lima - Perú</p>
            </div>
          </div>
          <div className="footer-contacto-item">
            <span className="contacto-icono">📞</span>
            <div>
              <strong>Central Telefónica:</strong>
              <p>+51 (01) 500-ECO1 / +51 987 654 321</p>
            </div>
          </div>
          <div className="footer-contacto-item">
            <span className="contacto-icono">⏰</span>
            <div>
              <strong>Horario de Recojo:</strong>
              <p>Lunes a Sábado: 7:30 a.m. – 6:30 p.m.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Franja Inferior de Copyright */}
      <div className="footer-inferior">
        <div className="contenedor footer-inferior-contenido">
          <p>© {new Date().getFullYear()} ECOLIM S.A.C. — RUC 20608976543 • Plataforma de Gestión Ambiental del Perú. Todos los derechos reservados.</p>
          <div className="footer-enlaces-legales">
            <span>Términos del Servicio</span>
            <span>•</span>
            <span>Política de Privacidad</span>
            <span>•</span>
            <span>Libro de Reclamaciones</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
