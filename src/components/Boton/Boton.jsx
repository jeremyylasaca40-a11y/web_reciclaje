import './Boton.css';

// Componente asignado a: Integrante 3 (feature/servicios-recoleccion)
export default function Boton({ children, tipo = 'primario', onClick, type = 'button', disabled = false }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn-ecolim btn-ecolim-${tipo}`}
    >
      {children}
    </button>
  );
}
