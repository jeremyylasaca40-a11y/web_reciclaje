import { useState } from 'react';
import './ImpactoAmbiental.css';

const indicadores = [
  {
    numero: '3 pasos',
    titulo: 'para reciclar mejor',
    descripcion: 'Separa, limpia y entrega tus residuos aprovechables.',
    icono: '01',
  },
  {
    numero: '5 grupos',
    titulo: 'de materiales comunes',
    descripcion: 'Papel, cartón, plástico, vidrio y metales.',
    icono: '02',
  },
  {
    numero: '1 hábito',
    titulo: 'que genera cambios',
    descripcion: 'La constancia hace que separar residuos sea parte de tu rutina.',
    icono: '03',
  },
];

const beneficios = [
  {
    icono: '↻',
    titulo: 'Aprovechamos materiales',
    descripcion:
      'El reciclaje permite que materiales útiles vuelvan a la cadena productiva y tengan una nueva oportunidad.',
  },
  {
    icono: '☘',
    titulo: 'Cuidamos los recursos',
    descripcion:
      'Separar correctamente ayuda a reducir la demanda de materias primas y favorece un uso más responsable de los recursos.',
  },
  {
    icono: '⌂',
    titulo: 'Creamos comunidades limpias',
    descripcion:
      'Cuando hogares, negocios y organizaciones colaboran, es más sencillo mantener espacios ordenados y limpios.',
  },
  {
    icono: '♧',
    titulo: 'Impulsamos la economía circular',
    descripcion:
      'Los residuos aprovechables pueden convertirse en insumos para nuevos productos en lugar de desecharse.',
  },
];

const preguntas = [
  {
    pregunta: '¿Qué residuos puedo separar para reciclar?',
    respuesta:
      'Puedes empezar por papel, cartón, botellas y envases plásticos, frascos de vidrio y latas metálicas. Revisa las indicaciones de tu programa de recolección para confirmar qué materiales reciben.',
  },
  {
    pregunta: '¿Tengo que lavar los envases antes de entregarlos?',
    respuesta:
      'Sí. Retira los restos de comida o líquidos y deja que los envases escurran. No es necesario gastar mucha agua: una limpieza básica suele ser suficiente para evitar malos olores y contaminación de otros materiales.',
  },
  {
    pregunta: '¿Puedo mezclar todos los materiales en una sola bolsa?',
    respuesta:
      'Lo ideal es separarlos por tipo de material y seguir las indicaciones del servicio de recolección. Mantenerlos separados facilita su clasificación y aprovechamiento.',
  },
  {
    pregunta: '¿Qué hago con pilas, focos o residuos electrónicos?',
    respuesta:
      'No los mezcles con los residuos reciclables comunes. Busca puntos de acopio especiales o programas autorizados para residuos peligrosos y aparatos eléctricos o electrónicos.',
  },
  {
    pregunta: '¿Cómo puedo solicitar una recolección con ECOLIM?',
    respuesta:
      'Entra a la sección “Solicitar Recolección” desde el menú de la página y completa los datos solicitados. El formulario de solicitud forma parte de la demostración web del proyecto.',
  },
];

export default function ImpactoAmbiental({ setPaginaActual }) {
  const [preguntaAbierta, setPreguntaAbierta] = useState(0);
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    tema: 'Consulta sobre reciclaje',
    mensaje: '',
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const irA = (pagina) => {
    if (setPaginaActual) {
      setPaginaActual(pagina);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const actualizarCampo = (evento) => {
    const { name, value } = evento.target;
    setFormulario((actual) => ({ ...actual, [name]: value }));
    setMensajeEnviado(false);
  };

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    setMensajeEnviado(true);
    setFormulario({
      nombre: '',
      correo: '',
      tema: 'Consulta sobre reciclaje',
      mensaje: '',
    });
  };

  return (
    <div className="pagina-impacto">
      <section className="impacto-hero">
        <div className="contenedor impacto-hero-grid">
          <div className="impacto-hero-texto">
            <span className="insignia-peru">
              <span className="punto-verde" />
              CADA ACCIÓN CUENTA
            </span>
            <h1>
              Un futuro más limpio <span>empieza contigo.</span>
            </h1>
            <p>
              Reciclar es mucho más que separar residuos: es una decisión diaria
              que ayuda a aprovechar recursos, reducir desperdicios y construir
              comunidades más responsables.
            </p>
            <div className="impacto-hero-acciones">
              <button
                className="btn-ecolim btn-ecolim-primario"
                onClick={() => irA('catalogo')}
              >
                Aprende a separar residuos <span aria-hidden="true">→</span>
              </button>
              <a className="impacto-enlace" href="#beneficios">
                Descubre los beneficios
              </a>
            </div>
            <div className="impacto-hero-nota">
              <span className="impacto-nota-icono" aria-hidden="true">i</span>
              <p>Pequeños hábitos, grandes oportunidades para el planeta.</p>
            </div>
          </div>
          <div className="impacto-hero-visual" aria-label="Ilustración de una planta creciendo entre hojas">
            <div className="impacto-circulo impacto-circulo-grande" />
            <div className="impacto-circulo impacto-circulo-pequeno" />
            <div className="impacto-hoja impacto-hoja-uno">❧</div>
            <div className="impacto-hoja impacto-hoja-dos">❧</div>
            <div className="impacto-visual-centro">
              <span className="impacto-visual-simbolo" aria-hidden="true">♻</span>
              <span>EL CAMBIO<br />ES CIRCULAR</span>
            </div>
            <div className="impacto-flotante impacto-flotante-arriba">
              <span>01</span>
              <div><strong>Reduce</strong><small>lo que desechas</small></div>
            </div>
            <div className="impacto-flotante impacto-flotante-abajo">
              <span>02</span>
              <div><strong>Reutiliza</strong><small>antes de descartar</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="impacto-estadisticas" aria-labelledby="impacto-estadisticas-titulo">
        <div className="contenedor">
          <div className="impacto-seccion-intro">
            <span className="impacto-etiqueta">EMPECEMOS POR LO ESENCIAL</span>
            <h2 id="impacto-estadisticas-titulo">El impacto comienza con tus hábitos</h2>
            <p>
              No necesitas cambiarlo todo de un día para otro. Aprende estos
              principios básicos y aplícalos en casa, en el estudio o en el trabajo.
            </p>
          </div>
          <div className="impacto-indicadores">
            {indicadores.map((indicador) => (
              <article className="impacto-indicador tarjeta-elevada" key={indicador.icono}>
                <span className="impacto-indicador-numero">{indicador.icono}</span>
                <div>
                  <strong>{indicador.numero}</strong>
                  <h3>{indicador.titulo}</h3>
                  <p>{indicador.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="impacto-aclaracion">
            Estos indicadores son una guía educativa del proyecto, no estadísticas oficiales ni resultados medidos de ECOLIM.
          </p>
        </div>
      </section>

      <section className="impacto-beneficios" id="beneficios" aria-labelledby="impacto-beneficios-titulo">
        <div className="contenedor">
          <div className="impacto-seccion-intro">
            <span className="impacto-etiqueta">¿POR QUÉ RECICLAR?</span>
            <h2 id="impacto-beneficios-titulo">Beneficios que van más allá de la basura</h2>
            <p>
              Separar correctamente los residuos ayuda a que los materiales
              aprovechables puedan tener una nueva vida.
            </p>
          </div>
          <div className="impacto-beneficios-grid">
            {beneficios.map((beneficio, indice) => (
              <article className="impacto-beneficio tarjeta-elevada" key={beneficio.titulo}>
                <div className={`impacto-beneficio-icono impacto-beneficio-icono-${indice + 1}`} aria-hidden="true">
                  {beneficio.icono}
                </div>
                <h3>{beneficio.titulo}</h3>
                <p>{beneficio.descripcion}</p>
                <span className="impacto-beneficio-numero">0{indice + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impacto-guia">
        <div className="contenedor impacto-guia-grid">
          <div>
            <span className="impacto-etiqueta">TU RUTINA SOSTENIBLE</span>
            <h2>Tres pasos para reciclar mejor</h2>
            <p>
              Una buena separación comienza antes de que el residuo llegue al
              contenedor. Sigue esta guía sencilla.
            </p>
          </div>
          <div className="impacto-pasos">
            <article className="impacto-paso">
              <span>1</span>
              <div><h3>Separa</h3><p>Clasifica los materiales según su tipo y las indicaciones locales.</p></div>
            </article>
            <article className="impacto-paso">
              <span>2</span>
              <div><h3>Limpia y prepara</h3><p>Retira restos de comida, aplana cajas y deja secar los envases.</p></div>
            </article>
            <article className="impacto-paso">
              <span>3</span>
              <div><h3>Entrega correctamente</h3><p>Usa los contenedores o servicios de recolección adecuados.</p></div>
            </article>
          </div>
          <div className="impacto-guia-accion">
            <p>¿No sabes en qué contenedor va un material?</p>
            <button className="btn-ecolim btn-ecolim-primario" onClick={() => irA('catalogo')}>
              Consultar catálogo de residuos →
            </button>
          </div>
        </div>
      </section>

      <section className="impacto-faq" aria-labelledby="impacto-faq-titulo">
        <div className="contenedor impacto-faq-grid">
          <div className="impacto-faq-intro">
            <span className="impacto-etiqueta">RESOLVEMOS TUS DUDAS</span>
            <h2 id="impacto-faq-titulo">Preguntas frecuentes</h2>
            <p>
              Encuentra respuestas rápidas para empezar a separar tus residuos
              con más confianza.
            </p>
            <div className="impacto-faq-ayuda">
              <span aria-hidden="true">?</span>
              <div><strong>¿Tienes otra consulta?</strong><p>Escríbenos en el formulario de contacto.</p></div>
            </div>
          </div>
          <div className="impacto-faq-lista">
            {preguntas.map((item, indice) => {
              const abierta = preguntaAbierta === indice;
              return (
                <article className={`impacto-faq-item ${abierta ? 'abierta' : ''}`} key={item.pregunta}>
                  <button
                    className="impacto-faq-pregunta"
                    type="button"
                    aria-expanded={abierta}
                    onClick={() => setPreguntaAbierta(abierta ? -1 : indice)}
                  >
                    <span>{item.pregunta}</span>
                    <span className="impacto-faq-signo" aria-hidden="true">{abierta ? '−' : '+'}</span>
                  </button>
                  {abierta && <p className="impacto-faq-respuesta">{item.respuesta}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="impacto-contacto" id="contacto" aria-labelledby="impacto-contacto-titulo">
        <div className="contenedor impacto-contacto-grid">
          <div className="impacto-contacto-texto">
            <span className="impacto-etiqueta">HABLEMOS</span>
            <h2 id="impacto-contacto-titulo">¿Tienes una idea para un mundo más limpio?</h2>
            <p>
              Comparte tu consulta o conoce más sobre las opciones de recolección
              y separación de residuos disponibles en nuestra plataforma.
            </p>
            <div className="impacto-contacto-dato">
              <span aria-hidden="true">⌖</span>
              <div><strong>Atención</strong><p>Lima Metropolitana y Callao</p></div>
            </div>
            <div className="impacto-contacto-dato">
              <span aria-hidden="true">@</span>
              <div><strong>Correo de referencia</strong><p>contacto@ecolim.pe</p></div>
            </div>
            <p className="impacto-contacto-nota">
              Sitio académico demostrativo: los datos de contacto son referenciales.
            </p>
          </div>

          <form className="impacto-formulario tarjeta-elevada" onSubmit={enviarFormulario}>
            <h3>Envíanos un mensaje</h3>
            <p>Completa los campos y te mostraremos la confirmación de tu consulta.</p>
            <div className="impacto-form-fila">
              <label>
                Nombre completo
                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={actualizarCampo}
                  placeholder="Ej. María Pérez"
                  autoComplete="name"
                  required
                  minLength={2}
                />
              </label>
              <label>
                Correo electrónico
                <input
                  type="email"
                  name="correo"
                  value={formulario.correo}
                  onChange={actualizarCampo}
                  placeholder="tu@correo.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>
            <label>
              Motivo de contacto
              <select name="tema" value={formulario.tema} onChange={actualizarCampo}>
                <option>Consulta sobre reciclaje</option>
                <option>Solicitud de recolección</option>
                <option>Alianzas y empresas</option>
                <option>Sugerencia para ECOLIM</option>
              </select>
            </label>
            <label>
              Tu mensaje
              <textarea
                name="mensaje"
                value={formulario.mensaje}
                onChange={actualizarCampo}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows="4"
                required
                minLength={10}
              />
            </label>
            <button className="btn-ecolim btn-ecolim-primario impacto-form-enviar" type="submit">
              Enviar consulta <span aria-hidden="true">→</span>
            </button>
            {mensajeEnviado && (
              <p className="impacto-form-exito" role="status">
                ¡Gracias! Tu consulta se validó correctamente en esta demostración. No se envió a un servidor.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="impacto-cierre">
        <div className="contenedor impacto-cierre-contenido">
          <div>
            <span>EL PRÓXIMO PASO ESTÁ EN TUS MANOS</span>
            <h2>Haz que tus residuos tengan una nueva oportunidad.</h2>
          </div>
          <button className="btn-ecolim btn-ecolim-claro" onClick={() => irA('solicitud')}>
            Solicitar recolección →
          </button>
        </div>
      </section>
    </div>
  );
}
