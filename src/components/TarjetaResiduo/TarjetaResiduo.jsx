import './TarjetaResiduo.css';

// Componente asignado a: Integrante 2 (feature/catalogo-residuos)
export default function TarjetaResiduo({ residuo }) {
  if (!residuo) return null;
  return (
    <div className="tarjeta-residuo-base tarjeta-elevada">
      <div className="tacho-indicador">{residuo.colorTacho}</div>
      <h4>{residuo.nombre}</h4>
      <p>{residuo.descripcion}</p>
    </div>
  );
}
