// Datos utilizados por el catálogo de residuos de ECOLIM.
// Los colores de las tarjetas serán decorativos.

export const residuos = [
  {
    id: 1,
    tipo: 'papel',
    nombre: 'Papel',
    categoria: 'Aprovechable',
    descripcion:
      'Dale otra oportunidad al papel que usas para estudiar, trabajar o informarte.',
    ejemplos: [
      'Hojas de oficina',
      'Periódicos',
      'Revistas',
      'Cuadernos sin espiral',
    ],
    comoSegregar:
      'Reúne el papel limpio y seco. Separa elementos de plástico o metal y guárdalo lejos de la humedad.',
    evitar:
      'No mezcles papel higiénico, servilletas usadas ni papel con restos de comida.',
  },
  {
    id: 2,
    tipo: 'carton',
    nombre: 'Cartón',
    categoria: 'Aprovechable',
    descripcion:
      'Las cajas y los empaques limpios pueden convertirse en nuevos materiales.',
    ejemplos: [
      'Cajas de embalaje',
      'Cajas de cereal',
      'Tubos de cartón',
    ],
    comoSegregar:
      'Vacía y aplana las cajas. Retira cintas y envolturas plásticas cuando sea posible y conserva el cartón seco.',
    evitar:
      'Separa las partes con grasa o restos de alimentos. Los envases multicapa requieren una recolección específica.',
  },
  {
    id: 3,
    tipo: 'plastico',
    nombre: 'Plástico',
    categoria: 'Aprovechable',
    descripcion:
      'Empieza por separar tus botellas y envases de uso cotidiano.',
    ejemplos: [
      'Botellas de agua',
      'Botellas de gaseosa',
      'Envases de champú',
      'Envases de detergente',
    ],
    comoSegregar:
      'Vacía los envases, retira restos de producto y déjalos escurrir. Consulta qué tipos de plástico recibe tu punto de acopio.',
    evitar:
      'No mezcles envases de sustancias peligrosas. No todos los plásticos se reciben en los mismos programas.',
  },
  {
    id: 4,
    tipo: 'vidrio',
    nombre: 'Vidrio',
    categoria: 'Aprovechable',
    descripcion:
      'Separa botellas y frascos para que el vidrio pueda aprovecharse nuevamente.',
    ejemplos: [
      'Botellas de bebidas',
      'Frascos de mermelada',
      'Frascos de conservas',
    ],
    comoSegregar:
      'Vacía los frascos y botellas, retira restos de alimentos y separa las tapas. Almacénalos con cuidado para evitar roturas.',
    evitar:
      'No mezcles cerámica, espejos ni focos con los envases de vidrio. Consulta cómo entregar piezas rotas.',
  },
  {
    id: 5,
    tipo: 'metales',
    nombre: 'Metales',
    categoria: 'Aprovechable',
    descripcion:
      'Las latas de aluminio y otros envases metálicos también tienen una segunda vida.',
    ejemplos: [
      'Latas de atún',
      'Latas de leche',
      'Latas de bebidas',
      'Tapas metálicas',
    ],
    comoSegregar:
      'Vacía y enjuaga las latas para retirar residuos de alimentos. Déjalas escurrir y evita manipular bordes cortantes.',
    evitar:
      'No mezcles pilas, baterías ni aerosoles con las latas de alimentos y bebidas; requieren manejo diferenciado.',
  },
];