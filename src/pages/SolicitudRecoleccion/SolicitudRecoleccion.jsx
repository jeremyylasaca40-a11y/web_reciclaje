import { useState } from 'react';
import Boton from '../../components/Boton/Boton';
import './SolicitudRecoleccion.css';

const distritosLima = [
  'Ancón',
  'Ate',
  'Barranco',
  'Breña',
  'Callao',
  'Carabayllo',
  'Chorrillos',
  'Comas',
  'El Agustino',
  'Independencia',
  'Jesús María',
  'La Molina',
  'La Victoria',
  'Lima Cercado',
  'Los Olivos',
  'Lurigancho-Chosica',
  'Miraflores',
  'Pueblo Libre',
  'Rímac',
  'San Borja',
  'San Isidro',
  'San Juan de Lurigancho',
  'San Juan de Miraflores',
  'San Martín de Porres',
  'San Miguel',
  'Santa Anita',
  'Surco',
  'Surquillo',
  'Villa El Salvador',
  'Villa María del Triunfo',
];

function obtenerFechaMinima() {
  const hoy = new Date();
  const fechaLocal = new Date(
    hoy.getTime() - hoy.getTimezoneOffset() * 60_000
  );
  return fechaLocal.toISOString().slice(0, 10);
}

export default function SolicitudRecoleccion({ setPaginaActual }) {
  const [confirmacion, setConfirmacion] = useState('');

  function enviarSolicitud(event) {
    event.preventDefault();
    const formulario = event.currentTarget;

    if (!formulario.reportValidity()) return;

    const datos = new FormData(formulario);
    setConfirmacion(datos.get('nombre'));
    formulario.reset();
  }

  return (
    <div className="pagina-solicitud">
      <section className="solicitud-hero">
        <div className="contenedor">
          <span className="insignia-peru">COORDINA TU RECOJO</span>
          <h1>Solicita una recolección</h1>
          <p>
            Completa tus datos y cuéntanos qué materiales deseas reciclar.
            Nuestro equipo podrá coordinar contigo el servicio.
          </p>
        </div>
      </section>

      <section className="contenedor solicitud-contenido">
        {confirmacion ? (
          <div className="solicitud-confirmacion" role="status" aria-live="polite">
            <span className="solicitud-confirmacion-icono" aria-hidden="true">
              ✓
            </span>
            <h2>¡Gracias, {confirmacion}!</h2>
            <p>
              El formulario se validó correctamente. Esta demostración no
              conecta con un servidor, por lo que tus datos no se han enviado
              ni guardado.
            </p>
            <Boton onClick={() => setConfirmacion('')}>
              Registrar otra solicitud
            </Boton>
          </div>
        ) : (
          <form className="solicitud-formulario" onSubmit={enviarSolicitud}>
            <div className="solicitud-formulario-encabezado">
              <h2>Datos para coordinar el recojo</h2>
              <p>Los campos marcados con * son obligatorios.</p>
            </div>

            <div className="solicitud-campos">
              <label className="solicitud-campo" htmlFor="solicitud-nombre">
                Nombre completo *
                <input
                  id="solicitud-nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  minLength="2"
                  maxLength="100"
                  required
                />
              </label>

              <label className="solicitud-campo" htmlFor="solicitud-tipo-cliente">
                Tipo de cliente *
                <select id="solicitud-tipo-cliente" name="tipoCliente" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="hogar">Hogar o junta vecinal</option>
                  <option value="empresa">Empresa o negocio</option>
                  <option value="comunidad">Colegio o comunidad</option>
                </select>
              </label>

              <label className="solicitud-campo" htmlFor="solicitud-correo">
                Correo electrónico *
                <input
                  id="solicitud-correo"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  maxLength="254"
                  required
                />
              </label>

              <label className="solicitud-campo" htmlFor="solicitud-telefono">
                Teléfono de contacto *
                <input
                  id="solicitud-telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9 +]{7,20}"
                  title="Ingresa un teléfono de 7 a 20 caracteres: números, espacios o +."
                  maxLength="20"
                  required
                />
              </label>

              <label className="solicitud-campo" htmlFor="solicitud-distrito">
                Distrito *
                <select id="solicitud-distrito" name="distrito" required defaultValue="">
                  <option value="" disabled>
                    Selecciona tu distrito
                  </option>
                  {distritosLima.map((distrito) => (
                    <option key={distrito} value={distrito}>
                      {distrito}
                    </option>
                  ))}
                </select>
              </label>

              <label className="solicitud-campo" htmlFor="solicitud-direccion">
                Dirección de recojo *
                <input
                  id="solicitud-direccion"
                  name="direccion"
                  type="text"
                  autoComplete="street-address"
                  minLength="5"
                  maxLength="160"
                  required
                />
              </label>

              <label className="solicitud-campo" htmlFor="solicitud-residuo">
                Tipo de residuo *
                <select id="solicitud-residuo" name="residuo" required defaultValue="">
                  <option value="" disabled>
                    Selecciona el material
                  </option>
                  <option value="papel-carton">Papel y cartón</option>
                  <option value="plasticos">Plásticos</option>
                  <option value="vidrio">Vidrio</option>
                  <option value="metales">Metales y latas</option>
                  <option value="varios">Materiales mixtos</option>
                </select>
              </label>

              <label className="solicitud-campo" htmlFor="solicitud-volumen">
                Volumen estimado (kg) *
                <input
                  id="solicitud-volumen"
                  name="volumen"
                  type="number"
                  min="1"
                  max="100000"
                  step="1"
                  inputMode="numeric"
                  required
                />
              </label>

              <label className="solicitud-campo" htmlFor="solicitud-fecha">
                Fecha preferida *
                <input
                  id="solicitud-fecha"
                  name="fecha"
                  type="date"
                  min={obtenerFechaMinima()}
                  required
                />
              </label>

              <label className="solicitud-campo solicitud-campo-ancho" htmlFor="solicitud-detalle">
                Detalles adicionales
                <textarea
                  id="solicitud-detalle"
                  name="detalle"
                  rows="4"
                  maxLength="500"
                  placeholder="Indica referencias para llegar o información útil del material."
                />
              </label>
            </div>

            <p className="solicitud-aviso">
              Esta versión es una demostración: el formulario valida los datos
              en tu navegador, pero todavía no los envía a un servidor.
            </p>
            <div className="solicitud-acciones">
              <Boton type="submit">Validar solicitud</Boton>
              {setPaginaActual && (
                <Boton
                  tipo="secundario"
                  onClick={() => setPaginaActual('servicios')}
                >
                  Ver servicios
                </Boton>
              )}
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
