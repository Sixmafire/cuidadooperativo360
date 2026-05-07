// ============================================================
// MODEL — datos y estado de la aplicación
// Aquí viven todos los datos que la app necesita mostrar.
// El controlador los lee; las vistas los renderizan.
// ============================================================

const AppData = {

  // ---------- Estado global ----------
  state: {
    paginaActual: 'inicio',
    chatAbierto: false,
    modalAbierto: false,
  },

  // ---------- Dashboard (página Inicio) ----------
  dashboard: {
    tamizajes: 128,
    alertas: 9,
    cumplimiento: 94,          // porcentaje
    actividadReciente: [
      { texto: '3 tamizajes subidos hoy',    tiempo: 'Hace 1h',  color: '#22C55E' },
      { texto: '1 alerta cardiovascular',    tiempo: 'Hace 2h',  color: '#F59E0B' },
      { texto: 'Reporte mensual disponible', tiempo: 'Hace 3h',  color: '#3B82F6' },
    ],
  },

  // ---------- Features (página Inicio) ----------
  features: [
    {
      icono: '🔄',
      colorFondo: '#DCFCE7',
      titulo: 'Menos reprocesos',
      descripcion: 'Información centralizada y trazable que elimina duplicidad y errores.',
    },
    {
      icono: '🔔',
      colorFondo: '#FEF3C7',
      titulo: 'Alertas a tiempo',
      descripcion: 'Prevención de riesgos ocupacionales mediante alertas inteligentes.',
    },
    {
      icono: '🛡️',
      colorFondo: '#EEF2FF',
      titulo: 'Auditoría rápida',
      descripcion: 'Reportes PDF y Excel listos para revisión y auditoría institucional.',
    },
  ],

  // ---------- Interfases ----------
  interfases: [
    {
      id: 'panel',
      titulo: 'Panel web',
      descripcion: 'Visión general en tiempo real del estado de la IPS, cumplimiento, alertas y actividad reciente.',
      botonTexto: 'Ir al panel',
      botonEstilo: 'primary',
    },
    {
      id: 'tamizajes',
      titulo: 'Tamizajes',
      descripcion: 'Registra y gestiona los tamizajes ocupacionales de tus colaboradores de forma ágil y segura.',
      botonTexto: 'Nuevo registro',
      botonEstilo: 'outline',
    },
    {
      id: 'alertas',
      titulo: 'Alertas preventivas',
      descripcion: 'Detecta y atiende riesgos a tiempo con alertas inteligentes y flujos de seguimiento.',
      botonTexto: 'Ver alertas',
      botonEstilo: 'outline',
    },
    {
      id: 'reportes',
      titulo: 'Reportes',
      descripcion: 'Genera reportes y auditorías listas para revisión y cumplimiento institucional.',
      botonTexto: 'Exportar PDF',
      botonEstilo: 'outline',
    },
  ],

  // ---------- Equipo (página Nosotros) ----------
  equipo: [
    { nombre: 'Meiry',       emoji: '<img src="img/woman.png" style="width:55px;">' },
    { nombre: 'Brandon',      emoji: '<img src="img/man.png" style="width:55px;">' },
    { nombre: 'Laura Rumbo',  emoji: '<img src="img/woman.png" style="width:55px;">' },
    { nombre: 'Daneivys',     emoji: '<img src="img/woman.png" style="width:55px;">' },
    { nombre: 'Sugelis',      emoji: '<img src="img/woman.png" style="width:55px;">' },
    { nombre: 'Betsy',        emoji: '<img src="img/woman.png" style="width:55px;">' },
  ],

  valores: [
    {
      icono: '🎯',
      titulo: 'Nuestro propósito',
      descripcion: 'Digitalizar el SG-SST en las IPS para convertir la prevención en decisiones inteligentes y medibles.',
    },
    {
      icono: '💚',
      titulo: 'Lo que nos mueve',
      descripcion: 'Creemos en la prevención como motor de bienestar, cumplimiento y sostenibilidad en salud.',
    },
    {
      icono: '✅',
      titulo: 'Nuestro enfoque',
      descripcion: 'Tecnología intuitiva, automatización de procesos y datos confiables para una gestión del SG-SST sin fricciones.',
    },
  ],

  // ---------- Planes (página Tienda) ----------
  planes: [
    {
      id: 'piloto',
      icono: '🔷',
      colorIcono: '#EEF2FF',
      nombre: 'Plan Piloto',
      precio: 'Demo',
      descripcion: 'Conoce la plataforma con un prototipo y una demostración guiada.',
      destacado: false,
      botonTexto: 'Solicitar demo',
      botonAccion: 'openModal',
      caracteristicas: [
        'Demostración guiada de la plataforma',
        'Prototipo funcional con datos de prueba',
        'Exploración de funcionalidades clave',
        'Orientación personalizada para tu IPS',
      ],
    },
    {
      id: 'ips',
      icono: '➕',
      colorIcono: '#DCFCE7',
      nombre: 'Implementación IPS',
      precio: '$53.384,00',
      moneda: 'COP',
      descripcion: 'Implementación inicial completa para poner en marcha Cuidado Operativo 360° en tu IPS.',
      destacado: true,
      badgeTexto: '⭐ MÁS RECOMENDADO',
      botonTexto: 'Comprar ahora',
      botonAccion: 'comprar',
      caracteristicas: [
        'Configuración y parametrización inicial',
        'Carga de datos y puesta en marcha',
        'Capacitación para tu equipo',
        'Soporte técnico y actualizaciones incluidas',
      ],
    },
    {
      id: 'escalable',
      icono: '↗️',
      colorIcono: '#F0FDF4',
      nombre: 'Plan Escalable',
      precio: 'A convenir',
      descripcion: 'Expande la plataforma según las necesidades y crecimiento de tu IPS.',
      destacado: false,
      botonTexto: 'Cotizar plan',
      botonAccion: 'openModal',
      caracteristicas: [
        'Expansión de módulos y funcionalidades',
        'Integraciones avanzadas a medida',
        'Acompañamiento estratégico continuo',
        'Planes adaptados a tu crecimiento',
      ],
    },
  ],

  garantias: [
    {
      titulo: 'Seguridad y cumplimiento',
      descripcion: 'Cumplimos con estándares de seguridad y normativas de salud.',
    },
    {
      titulo: 'Implementación ágil',
      descripcion: 'Puesta en marcha rápida y acompañamiento experto.',
    },
    {
      titulo: 'Soporte continuo',
      descripcion: 'Acompañamiento cercano antes, durante y después.',
    },
    {
      titulo: 'Tu información, siempre segura',
      descripcion: 'Protegemos los datos de tu IPS con tecnología de punta.',
    },
  ],

  // ---------- Navegación ----------
  navegacion: [
    { id: 'inicio',     label: 'Inicio' },
    { id: 'interfases', label: 'Interfaces' },
    { id: 'nosotros',   label: 'Nosotros' },
    { id: 'tienda',     label: 'Tienda' },
  ],

  // ---------- Formulario demo (valores en blanco por defecto) ----------
  formularioDemo: {
    nombre: '',
    apellido: '',
    email: '',
    ips: '',
    cargo: '',
    cargosOpciones: [
      'Coordinador SG-SST',
      'Director Médico',
      'Gerente General',
      'Jefe de Recursos Humanos',
      'Otro',
    ],
  },
};
