// ============================================================
// CONTROLLER — lógica de la aplicación
// Une el Model con la View: lee datos, llama templates,
// inyecta HTML en el DOM y maneja eventos.
// ============================================================

const Controller = {

  // ──────────────────────────────────────────────────────────
  // INICIALIZACIÓN
  // ──────────────────────────────────────────────────────────
  init() {
    this._renderNav();
    this._renderAllSections();
    this._renderModal();
    this._renderChat();
    this.navigate(AppData.state.paginaActual);
    this._startLiveCounter();
  },

  // ──────────────────────────────────────────────────────────
  // NAVEGACIÓN
  // ──────────────────────────────────────────────────────────
  navigate(pagina) {
    // Ocultar todas las secciones
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));

    // Mostrar la sección destino
    const target = document.getElementById(pagina);
    if (target) target.classList.add('active');

    // Actualizar estado
    AppData.state.paginaActual = pagina;

    // Actualizar link activo en nav
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.dataset.page === pagina);
    });

    window.scrollTo(0, 0);

    // Si volvemos a Inicio, reanimar los contadores
    if (pagina === 'inicio') {
      this._animateCounters();
    }
  },

  // ──────────────────────────────────────────────────────────
  // RENDER SECCIONES
  // ──────────────────────────────────────────────────────────
  _renderNav() {
    const navEl = document.querySelector('nav .nav-inner');
    if (!navEl) return;
    navEl.innerHTML = Views.renderNav(AppData.navegacion, AppData.state.paginaActual);
  },

  _renderAllSections() {
    document.getElementById('inicio').innerHTML =
      Views.renderInicio(AppData.dashboard, AppData.features);

    document.getElementById('interfases').innerHTML =
      Views.renderInterfases(AppData.interfases);

    document.getElementById('nosotros').innerHTML =
      Views.renderNosotros(AppData.valores, AppData.equipo);

    document.getElementById('tienda').innerHTML =
      Views.renderTienda(AppData.planes, AppData.garantias);
  },

  _renderModal() {
    const modal = document.querySelector('.modal');
    if (modal) modal.innerHTML = Views.renderModal(AppData.formularioDemo);
  },

  _renderChat() {
    const chat = document.getElementById('chatPanel');
    if (chat) chat.innerHTML = Views.renderChat();
  },

  // ──────────────────────────────────────────────────────────
  // MODAL DEMO
  // ──────────────────────────────────────────────────────────
  openModal() {
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    AppData.state.modalAbierto = true;
  },

  closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
    AppData.state.modalAbierto = false;
  },

  closeModalOutside(event) {
    if (event.target === document.getElementById('modalOverlay')) {
      this.closeModal();
    }
  },

  submitDemo() {
    const nombre = document.getElementById('demoNombre').value.trim();
    const email  = document.getElementById('demoEmail').value.trim();

    // Validación básica
    if (!nombre || !email) {
      this.showToast('⚠️ Por favor completa los campos requeridos');
      return;
    }

    if (!email.includes('@')) {
      this.showToast('⚠️ Ingresa un correo válido');
      return;
    }

    // Guardar en modelo (en producción: llamar a una API aquí)
    AppData.formularioDemo.nombre = nombre;
    AppData.formularioDemo.email  = email;

    this.closeModal();
    this.showToast('🎉 ¡Demo solicitada! Te contactaremos pronto.');
  },

  // ──────────────────────────────────────────────────────────
  // CHAT
  // ──────────────────────────────────────────────────────────
  toggleChat() {
    const panel = document.getElementById('chatPanel');
    const isOpen = panel.classList.toggle('open');
    AppData.state.chatAbierto = isOpen;
  },

  sendChat() {
    const input = document.getElementById('chatInput');
    const val   = input.value.trim();
    if (!val) return;
    input.value = '';
    // En producción: aquí iría la llamada a un servicio de chat
    this.showToast('Mensaje enviado ✓');
  },

  // ──────────────────────────────────────────────────────────
  // TOAST
  // ──────────────────────────────────────────────────────────
  showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
  },

  // ──────────────────────────────────────────────────────────
  // ANIMACIÓN DE CONTADORES
  // ──────────────────────────────────────────────────────────
  _animateCounter(id, target, suffix = '') {
    const el = document.getElementById(id);
    if (!el) return;
    let current = 0;
    const step  = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 20);
  },

  _animateCounters() {
    setTimeout(() => {
      this._animateCounter('counter1', AppData.dashboard.tamizajes);
      this._animateCounter('counter2', AppData.dashboard.alertas);
      this._animateCounter('counter3', AppData.dashboard.cumplimiento, '%');
    }, 400);
  },

  // ──────────────────────────────────────────────────────────
  // SIMULACIÓN DATOS EN VIVO
  // Simula que llegan nuevos tamizajes en tiempo real.
  // En producción: reemplazar por un WebSocket o polling a API.
  // ──────────────────────────────────────────────────────────
  _startLiveCounter() {
    setInterval(() => {
      const estaEnInicio = AppData.state.paginaActual === 'inicio';
      if (!estaEnInicio) return;

      const c1 = document.getElementById('counter1');
      if (!c1) return;

      if (Math.random() < 0.1) {
        AppData.dashboard.tamizajes += 1;
        c1.textContent = AppData.dashboard.tamizajes;
      }
    }, 5000);
  },
};

// ──────────────────────────────────────────────────────────
// ARRANQUE: cuando el DOM esté listo
// ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => Controller.init());
