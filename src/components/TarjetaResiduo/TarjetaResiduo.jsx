import { useState } from 'react';
import './TarjetaResiduo.css';

// Recibe la información de un material mediante la prop "residuo".
export default function TarjetaResiduo({ residuo }) {
  const [abierta, setAbierta] = useState(false);

  if (!residuo) return null;

  // Iconos para cada tipo de material.
  const iconos = {
    papel: (
      <>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
        <path d="M14 3v6h6M8 13h8M8 17h6" />
      </>
    ),
    carton: (
      <>
        <path d="m12 3 9 5-9 5-9-5Z" />
        <path d="M3 8v9l9 5 9-5V8M12 13v9M7.5 5.5l9 5" />
      </>
    ),
    plastico: (
      <path d="M9 2h6v4H9zM9 6v3l-3 4v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7l-3-4V6M6 14h12M6 18h12" />
    ),
    vidrio: (
      <path d="M10 2h4v7l3 5v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6l3-5ZM10 5h4M7 16h10" />
    ),
    metales: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 17c0 1.7 3.1 3 7 3s7-1.3 7-3M9 11h6" />
      </>
    ),
  };

  return (
    <article className={`residuo-card residuo-card--${residuo.tipo}`}>
      {/* Icono y categoría */}
      <div className="residuo-card__cabecera">
        <span className="residuo-card__icono" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {iconos[residuo.tipo]}
          </svg>
        </span>

        <span className="residuo-card__etiqueta">
          {residuo.categoria}
        </span>
      </div>

      {/* Nombre y descripción */}
      <h3>{residuo.nombre}</h3>

      <p className="residuo-card__descripcion">
        {residuo.descripcion}
      </p>

      {/* Ejemplos del material */}
      <h4 className="residuo-card__subtitulo">
        ¿Qué puedes separar?
      </h4>

      <ul className="residuo-card__ejemplos">
        {residuo.ejemplos.map((ejemplo) => (
          <li key={ejemplo}>{ejemplo}</li>
        ))}
      </ul>

      {/* Botón para mostrar u ocultar los consejos */}
      <button
        type="button"
        className="residuo-card__boton"
        aria-expanded={abierta}
        aria-controls={`consejos-residuo-${residuo.id}`}
        aria-label={`${
          abierta ? 'Ocultar' : 'Ver'
        } consejos para separar ${residuo.nombre.toLowerCase()}`}
        onClick={() => setAbierta(!abierta)}
      >
        <span>
          {abierta ? 'Ocultar consejos' : 'Cómo separarlo'}
        </span>

        <svg
          className={
            abierta
              ? 'residuo-card__flecha abierta'
              : 'residuo-card__flecha'
          }
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Información desplegable */}
      <div
        id={`consejos-residuo-${residuo.id}`}
        className="residuo-card__consejos"
        hidden={!abierta}
      >
        <h4>Prepara tu material</h4>
        <p>{residuo.comoSegregar}</p>

        <h4>Ten en cuenta</h4>
        <p>{residuo.evitar}</p>
      </div>
    </article>
  );
}