// ==========================================================
// ECOLIM S.A.C. - Servicios de Recolección (Perú)
// Asignado a: Integrante 3 (Rama: feature/servicios-recoleccion)
// ==========================================================

export const servicios = [
  {
    id: 'hogar',
    titulo: 'Recolección Residencial & Vecinal',
    dirigidoA: 'Casas, departamentos y juntas de vecinos',
    descripcion: 'Servicio programado de recojo selectivo de materiales reciclables en la puerta de tu domicilio.',
    frecuencia: 'Semanal o quincenal',
    distritos: ['Miraflores', 'San Isidro', 'Surco', 'San Borja', 'Los Olivos', 'Jesús María']
  },
  {
    id: 'corporativo',
    titulo: 'Gestión Integral para Empresas & Negocios',
    dirigidoA: 'Oficinas, restaurantes, cafeterías y comercios',
    descripcion: 'Retiro periódico de cartón, plásticos y papel de oficina con pesaje y certificado de destino final.',
    frecuencia: 'Programada según volumen',
    distritos: ['Toda Lima Metropolitana y Callao']
  },
  {
    id: 'capacitacion',
    titulo: 'Asesoría y Talleres de Segregación',
    dirigidoA: 'Comunidades, colegios y equipos de trabajo',
    descripcion: 'Orientación técnica sobre el Decreto Legislativo N° 1278 y colocación de puntos ecológicos.',
    frecuencia: 'A demanda',
    distritos: ['Modalidad presencial y virtual']
  }
];
