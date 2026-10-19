import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Páginas
import Inicio from './pages/Inicio/Inicio';
import CatalogoResiduos from './pages/CatalogoResiduos/CatalogoResiduos';
import Servicios from './pages/Servicios/Servicios';
import SolicitudRecoleccion from './pages/SolicitudRecoleccion/SolicitudRecoleccion';
import ImpactoAmbiental from './pages/ImpactoAmbiental/ImpactoAmbiental';

// Estilos globales
import './styles/global.css';

function App() {
  // Estado para la página activa
  const [paginaActual, setPaginaActual] = useState('inicio');

  const renderizarPagina = () => {
    switch (paginaActual) {
      case 'inicio':
        return <Inicio setPaginaActual={setPaginaActual} />;
      case 'catalogo':
        return <CatalogoResiduos setPaginaActual={setPaginaActual} />;
      case 'servicios':
        return <Servicios setPaginaActual={setPaginaActual} />;
      case 'solicitud':
        return <SolicitudRecoleccion setPaginaActual={setPaginaActual} />;
      case 'impacto':
        return <ImpactoAmbiental setPaginaActual={setPaginaActual} />;
      default:
        return <Inicio setPaginaActual={setPaginaActual} />;
    }
  };

  return (
    <div className="app-layout">
      {/* Barra de navegación superior (Integrante 1) */}
      <Navbar paginaActual={paginaActual} setPaginaActual={setPaginaActual} />

      {/* Contenido dinámico según la página seleccionada */}
      <main className="app-main">
        {renderizarPagina()}
      </main>

      {/* Pie de página institucional (Integrante 1) */}
      <Footer setPaginaActual={setPaginaActual} />
    </div>
  );
}

export default App;
