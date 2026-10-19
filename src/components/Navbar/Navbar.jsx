import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ paginaActual, setPaginaActual }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para aplicar sombra y fondo translúcido
  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const enlaces = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'catalogo', texto: 'Catálogo de Residuos' },
    { id: 'servicios', texto: 'Servicios' },
    { id: 'solicitud', texto: 'Solicitar Recolección' },
    { id: 'impacto', texto: 'Impacto Ambiental' },
  ];

  const navegarA = (id) => {
    setPaginaActual(id);
    setMenuAbierto(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="contenedor navbar-contenedor">
        {/* Logotipo de ECOLIM S.A.C. */}
        <div className="navbar-logo" onClick={() => navegarA('inicio')}>
          <div className="logo-icono">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <div className="logo-texto">
            <span className="logo-titulo">ECOLIM <span className="logo-sac">S.A.C.</span></span>
            <span className="logo-subtitulo">Gestión de Residuos • Perú</span>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="navbar-enlaces">
          {enlaces.map((enlace) => (
            <button
              key={enlace.id}
              onClick={() => navegarA(enlace.id)}
              className={`enlace-nav ${paginaActual === enlace.id ? 'activo' : ''}`}
            >
              {enlace.texto}
              {paginaActual === enlace.id && <span className="indicador-activo" />}
            </button>
          ))}
        </nav>

        {/* Botón de Acción Rápida (Desktop) */}
        <div className="navbar-accion">
          <button 
            className="btn-ecolim btn-ecolim-primario btn-nav-cta"
            onClick={() => navegarA('solicitud')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            <span>Pedir Recolección</span>
          </button>
        </div>

        {/* Botón Menú Hamburguesa (Mobile) */}
        <button
          className={`hamburguesa ${menuAbierto ? 'abierto' : ''}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú de navegación"
        >
          <span className="linea"></span>
          <span className="linea"></span>
          <span className="linea"></span>
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      <div className={`menu-movil ${menuAbierto ? 'activo' : ''}`}>
        <div className="menu-movil-contenido">
          <div className="menu-movil-badge">
            <span className="insignia-peru">
              <span className="punto-verde"></span>
              Plataforma Nacional
            </span>
          </div>
          {enlaces.map((enlace) => (
            <button
              key={enlace.id}
              onClick={() => navegarA(enlace.id)}
              className={`enlace-movil ${paginaActual === enlace.id ? 'activo' : ''}`}
            >
              {enlace.texto}
            </button>
          ))}
          <div className="menu-movil-cta">
            <button 
              className="btn-ecolim btn-ecolim-primario"
              onClick={() => navegarA('solicitud')}
              style={{ width: '100%' }}
            >
              Solicitar Recolección
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
