// ==========================================================
// ECOLIM S.A.C. - Datos de Residuos Sólidos (Perú)
// Asignado a: Integrante 2 (Rama: feature/catalogo-residuos)
// ==========================================================

export const residuos = [
  {
    id: 1,
    nombre: 'Papel y Cartón',
    categoria: 'Aprovechable',
    colorTacho: 'Azul (NTP 900.058)',
    descripcion: 'Hojas bond, periódicos, revistas, cajas de cartón corrugado y conos de papel limpios y secos.',
    ejemplos: ['Hojas de oficina', 'Cajas de embalaje', 'Cuadernos usados', 'Folletos'],
    comoSegregar: 'Aplanar las cajas para ahorrar espacio, retirar cintas adhesivas y mantener libre de grasa o líquidos.'
  },
  {
    id: 2,
    nombre: 'Plásticos (PET y PEAD)',
    categoria: 'Aprovechable',
    colorTacho: 'Blanco (NTP 900.058)',
    descripcion: 'Botellas de bebidas, envases de yogurt, champú, detergentes y tapas plásticas limpias.',
    ejemplos: ['Botellas de agua y gaseosa', 'Envases de limpieza', 'Tapitas plásticas'],
    comoSegregar: 'Enjuagar brevemente, escurrir, aplastar la botella y colocar su tapa.'
  },
  {
    id: 3,
    nombre: 'Vidrio',
    categoria: 'Aprovechable',
    colorTacho: 'Plomo / Gris (NTP 900.058)',
    descripcion: 'Botellas de bebidas, frascos de conservas, perfumes y alimentos sin roturas peligrosas.',
    ejemplos: ['Botellas de jugo', 'Frascos de mermelada', 'Botellas de aceite de oliva'],
    comoSegregar: 'Lavar, secar y retirar tapas de metal o corchos antes de entregarlos.'
  },
  {
    id: 4,
    nombre: 'Metales y Latas',
    categoria: 'Aprovechable',
    colorTacho: 'Amarillo (NTP 900.058)',
    descripcion: 'Latas de leche, conservas de pescado, tapas de metal y latas de aluminio.',
    ejemplos: ['Latas de atún', 'Latas de leche evaporada', 'Latas de refresco'],
    comoSegregar: 'Enjuagar para evitar olores y plagas, aplastar si es posible para reducir volumen.'
  }
];
