// ============================================================
// VIEW — templates: funciones puras que reciben datos y
// devuelven strings HTML. Sin lógica de negocio aquí.
// ============================================================

const Views = {

  // ---------- NAVBAR ----------
  // ---------- NAVBAR ----------
  renderNav(navegacion, paginaActual) {
    const links = navegacion.map(item => `
      <li>
        <a onclick="Controller.navigate('${item.id}')"
           data-page="${item.id}"
           class="${item.id === paginaActual ? 'active' : ''}">
          ${item.label}
        </a>
      </li>
    `).join('');

    return `
      <a class="logo" href="#" onclick="Controller.navigate('inicio'); return false;">
        <!-- Reemplazo de Icono y Texto por Imagen PNG -->
        <img src="img/logo.png" alt="Cuidado Operativo 360°" style="height: 60px; width: auto; display: block;margin-left: 40px;">
      </a>
      <ul class="nav-links" id="navLinks">${links}</ul>
      <button class="btn-demo" onclick="Controller.openModal()">Solicitar demo →</button>
    `;
  },

  // ---------- PÁGINA: INICIO ----------
  renderInicio(dashboard, features) {
    const actividadHTML = dashboard.actividadReciente.map(item => `
      <div class="activity-item">
        <div class="activity-left">
          <div class="activity-dot" style="background:${item.color}"></div>
          ${item.texto}
        </div>
        <span class="activity-time">${item.tiempo}</span>
      </div>
    `).join('');

    const featuresHTML = features.map(f => `
      <div class="feature-card">
        <div class="feat-icon" style="background:${f.colorFondo}">${f.icono}</div>
        <div>
          <div class="feat-title">${f.titulo}</div>
          <p class="feat-desc">${f.descripcion}</p>
        </div>
      </div>
    `).join('');

    return `
      <div class="hero">
        <div>
          <div class="hero-badge">Plataforma integral para IPS</div>
          <h1>
            <span class="accent">Digitaliza el SG-SST</span><br>
            de tu IPS en una<br>
            <span class="accent-green">sola plataforma</span>
          </h1>
          <p style="text-align: justify;">Cuidado Operativo 360° centraliza tamizajes, automatiza indicadores, envía alertas preventivas y genera reportes listos para auditoría. Todo lo que tu IPS necesita, en un solo lugar.</p>
          <div class="hero-btns">
            <button class="btn-primary" onclick="Controller.navigate('interfases')">Ver interfaces</button>
            <button class="btn-outline" onclick="Controller.navigate('tienda')">Conocer la tienda</button>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="dash-header">
            <h3>Estado general de la IPS</h3>
            <div class="status-live">En tiempo real</div>
          </div>
          <div class="stats-row">
            <div class="stat-box navy">
              <span class="stat-num" id="counter1">0</span>
              <span class="stat-label">Tamizajes</span>
            </div>
            <div class="stat-box green">
              <span class="stat-num" id="counter2">0</span>
              <span class="stat-label">Alertas</span>
            </div>
            <div class="stat-box blue-light">
              <span class="stat-num" id="counter3">0%</span>
              <span class="stat-label">Cumplimiento</span>
            </div>
          </div>
          <div class="activity-title">Actividad reciente</div>
          ${actividadHTML}
          <button class="btn-report">Ver todos los reportes</button>
        </div>
      </div>

      <div class="features">
        <div class="features-inner">${featuresHTML}</div>
      </div>
    `;
  },

  // ---------- PÁGINA: INTERFASES ----------
  renderInterfases(interfases) {
    // Previews visuales fijos por tipo de interfaz
    const previewHTML = {
      panel: `
        <div class="iface-preview-header">
          <div class="dot" style="background:#EF4444"></div>
          <div class="dot" style="background:#F59E0B"></div>
          <div class="dot" style="background:#22C55E"></div>
          <span style="font-size:8px;color:white;margin-left:4px">Dashboard</span>
        </div>
        <div class="preview-body">
          <div class="preview-stat-row">
            <div class="mini-stat" style="background:#1E2A4A">128</div>
            <div class="mini-stat" style="background:#22C55E">9</div>
            <div class="mini-stat" style="background:#1B4FD8">84%</div>
          </div>
          <div class="preview-line" style="width:70%"></div>
          <div class="preview-line" style="width:50%"></div>
          <div class="preview-line" style="width:80%"></div>
        </div>`,

      tamizajes: `
  <div class="iface-preview-header">
    <div class="dot" style="background:#EF4444"></div>
    <div class="dot" style="background:#F59E0B"></div>
    <div class="dot" style="background:#22C55E"></div>
    <span style="font-size:8px;color:white;margin-left:4px">Tamizajes</span>
    <span style="background:#22C55E;color:white;font-size:7px;padding:1px 5px;border-radius:4px;margin-left:auto">Nuevo</span>
  </div>
  <div class="preview-body">
    <!-- Encabezado de 4 columnas -->
    <div style="font-size:7px;color:#6B7280;display:grid;grid-template-columns:repeat(4, 1fr);padding:2px 0;border-bottom:1px solid #E5E7EB;margin-bottom:3px">
      <span>Paciente</span><span>Tipo</span><span>Fecha</span><span>Estado</span>
    </div>
    
    <!-- Filas con 4 columnas cada una -->
    <div class="preview-row" style="display:grid; grid-template-columns:repeat(4, 1fr); align-items:center;">
      <div style="display:flex; align-items:center; gap:2px;">
        <div class="preview-dot" style="background:#22C55E"></div><span>María</span>
      </div>
      <span>Cardio</span><span>12/10</span><span style="color:#22C55E">Al día</span>
    </div>

    <div class="preview-row" style="display:grid; grid-template-columns:repeat(4, 1fr); align-items:center;">
      <div style="display:flex; align-items:center; gap:2px;">
        <div class="preview-dot" style="background:#22C55E"></div><span>Carlos</span>
      </div>
      <span>Osteo</span><span>11/10</span><span style="color:#22C55E">Al día</span>
    </div>

    <div class="preview-row" style="display:grid; grid-template-columns:repeat(4, 1fr); align-items:center;">
      <div style="display:flex; align-items:center; gap:2px;">
        <div class="preview-dot" style="background:#EF4444"></div><span>Ana</span>
      </div>
      <span>Visual</span><span>10/10</span><span style="color:#EF4444">Crítico</span>
    </div>

    <div class="preview-row" style="display:grid; grid-template-columns:repeat(4, 1fr); align-items:center;">
      <div style="display:flex; align-items:center; gap:2px;">
        <div class="preview-dot" style="background:#F59E0B"></div><span>Luis</span>
      </div>
      <span>Auditivo</span><span>09/10</span><span style="color:#F59E0B">Pendiente</span>
    </div>
  </div>`,

      alertas: `
        <div class="iface-preview-header">
          <div class="dot" style="background:#EF4444"></div>
          <div class="dot" style="background:#F59E0B"></div>
          <div class="dot" style="background:#22C55E"></div>
          <span style="font-size:8px;color:white;margin-left:4px">Alertas</span>
          <span style="background:#1B4FD8;color:white;font-size:7px;padding:1px 5px;border-radius:4px;margin-left:auto">+ Nuevo</span>
        </div>
        <div class="preview-body">
          <div class="preview-row" style="border-bottom:1px solid #FEE2E2;background:#FFF5F5;border-radius:3px;margin-bottom:3px">
            <div class="preview-dot" style="background:#EF4444"></div>
            <span style="font-size:7px">Riesgo cardiovascular elevado</span>
          </div>
          <div class="preview-row" style="border-bottom:1px solid #FEF3C7;background:#FFFBEB;border-radius:3px;margin-bottom:3px">
            <div class="preview-dot" style="background:#F59E0B"></div>
            <span style="font-size:7px">Dolor lumbar recurrente</span>
          </div>
          <div class="preview-row" style="border-bottom:1px solid #DCFCE7;background:#F0FDF4;border-radius:3px">
            <div class="preview-dot" style="background:#22C55E"></div>
            <span style="font-size:7px">Estrés laboral alto</span>
          </div>
        </div>`,

      reportes: `
        <div class="iface-preview-header">
          <div class="dot" style="background:#EF4444"></div>
          <div class="dot" style="background:#F59E0B"></div>
          <div class="dot" style="background:#22C55E"></div>
          <span style="font-size:8px;color:white;margin-left:4px">Reportes</span>
        </div>
        <div class="preview-body">
          <div style="display:flex;gap:3px;margin-bottom:6px;font-size:7px;color:#6B7280">
            <span style="border-bottom:1px solid #1B4FD8;padding-bottom:2px;color:#1B4FD8">Resumen</span>
            <span>Tamizajes</span><span>Alertas</span><span>Auditoría</span>
          </div>
          <div style="display:flex;gap:4px;align-items:center;margin-bottom:8px">
            <div style="background:#1E2A4A;color:white;font-size:10px;font-weight:700;padding:4px 8px;border-radius:4px">128</div>
            <div style="font-size:9px;color:#22C55E;font-weight:700">94%</div>
          </div>
          <div style="width:50px;height:50px;border-radius:50%;border:5px solid #22C55E;border-top-color:#E5E7EB;float:right;margin-top:-30px"></div>
          <div class="preview-line" style="width:60%;clear:both;margin-top:4px"></div>
        </div>`,
    };

    const cardsHTML = interfases.map(item => {
      const btnClass = item.botonEstilo === 'primary' ? 'primary' : '';
      const accion = item.id === 'reportes'
        ? `Controller.showToast('📄 Exportando PDF...')`
        : `Controller.navigate('inicio')`;

      return `
        <div class="interface-card">
          <div class="iface-preview">${previewHTML[item.id]}</div>
          <div class="iface-info">
            <h3>${item.titulo}</h3>
            <p style="text-align: justify;">${item.descripcion}</p>
            <button class="btn-interface ${btnClass}" onclick="${accion}">${item.botonTexto}</button>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="page-header">
        <h2>
          <span style="color: #1B4FD8;">Así se ve</span><br> 
          <span class="accent-green">la plataforma en</span> 
          <span style="color: #1E2A4A;">uso</span>
        </h2>
        <p style="text-align: justify;">Interfaces diseñadas para líderes del SG-SST, gestión del talento humano y monitoreo operacional en IPS.</p>
      </div>
      <div class="interfaces-grid">${cardsHTML}</div>
    `;
  },

  // ---------- PÁGINA: NOSOTROS ----------
  renderNosotros(valores, equipo) {
    const valoresHTML = valores.map(v => `
      <div class="value-card">
        <div class="val-icon">${v.icono}</div>
        <h4>${v.titulo}</h4>
        <p style="text-align: justify;">${v.descripcion}</p>
      </div>
    `).join('');

    const equipoHTML = equipo.map(m => `
      <div class="team-member">
        <div class="avatar">${m.emoji}</div>
        <span>${m.nombre}</span>
      </div>
    `).join('');

    return `
      <div class="nosotros-hero">
        <div>
          <div class="hero-badge">Plataforma integral para IPS</div>
          <h1>
            <span style="color: #1B4FD8;">Un equipo que convierte</span><br> 
            <span class="accent-green">la prevención laboral en</span> 
            <span style="color: #1E2A4A;">datos útiles</span>
          </h1>
          <p style="text-align: justify;">Cuidado Operativo 360° nació como un proyecto de emprendimiento e innovación para apoyar a las instituciones de salud en la digitalización de sus indicadores del SG-SST, automatizar la prevención y mejorar su preparación para auditorías. Todo lo que tu IPS necesita, en un solo lugar.</p>
        </div>
        <div class="nosotros-icon-big">
          <div class="big-logo-circle">
            <img src="img/logo_main.png" alt="Cuidado Operativo 360°" >
          </div>
        </div>
      </div>

      <div class="values-row">${valoresHTML}</div>

      <div class="team-section">
        <div class="team-inner">
          <div class="team-header">
            <div>
              <h3>Nuestro equipo ABR</h3>
              <p>Un equipo comprometido con la innovación y la transformación digital en salud.</p>
            </div>
          </div>
          <div class="team-grid">${equipoHTML}</div>
        </div>
      </div>
    `;
  },

  // ---------- PÁGINA: TIENDA ----------
  renderTienda(planes, garantias) {
    const planesHTML = planes.map(plan => {
      const badge  = plan.destacado ? `<div class="plan-badge-top">${plan.badgeTexto}</div>` : '';
      const moneda = plan.moneda ? `<span>${plan.moneda}</span>` : '';
      const btnClass = plan.destacado ? 'green' : '';
      const accion = plan.botonAccion === 'openModal'
        ? `Controller.openModal()`
        : `Controller.showToast('✅ Redirigiendo al pago...')`;

      const featsHTML = plan.caracteristicas.map(c =>
        `<li><span class="check">✓</span> ${c}</li>`
      ).join('');

      return `
        <div class="plan-card ${plan.destacado ? 'featured' : ''}">
          ${badge}
          <div class="plan-icon" style="background:${plan.colorIcono}">${plan.icono}</div>
          <div class="plan-name">${plan.nombre}</div>
          <div class="plan-price">${plan.precio} ${moneda}</div>
          <p class="plan-desc">${plan.descripcion}</p>
          <ul class="plan-features">${featsHTML}</ul>
          <button class="btn-plan ${btnClass}" onclick="${accion}">${plan.botonTexto}</button>
        </div>
      `;
    }).join('');

    const garantiasHTML = garantias.map(g => `
      <div class="trust-item">
        <div class="trust-check">✓</div>
        <div>
          <strong>${g.titulo}</strong>
          <p>${g.descripcion}</p>
        </div>
      </div>
    `).join('');

    return `
      <div class="tienda-header">
        <div class="tienda-badge">Planes de implementación para IPS</div>
        <h2>
          <span style="color: #1B4FD8;">Elige cómo implementar</span><br> 
          <span class="accent-green">Cuidado Operativo 360°</span>
        </h2>
        <p>Planes flexibles y escalables para que tu IPS digitalice sus procesos, mejore el control operativo y eleve la calidad del cuidado.</p>
      </div>
      <div class="plans-grid">${planesHTML}</div>
      <div class="trust-bar">${garantiasHTML}</div>
    `;
  },

  // ---------- MODAL DEMO ----------
  renderModal(form) {
    const cargosHTML = form.cargosOpciones.map(c =>
      `<option>${c}</option>`
    ).join('');

    return `
      <button class="modal-close" onclick="Controller.closeModal()">×</button>
      <h3>Solicitar demo</h3>
      <p>Completa el formulario y un asesor se pondrá en contacto contigo en menos de 24 horas.</p>

      <div class="form-grid">
        <div class="form-group">
          <label>Nombre *</label>
          <input type="text" id="demoNombre" placeholder="Tu nombre">
        </div>
        <div class="form-group">
          <label>Apellido *</label>
          <input type="text" id="demoApellido" placeholder="Tu apellido">
        </div>
      </div>
      <div class="form-group">
        <label>Correo institucional *</label>
        <input type="email" id="demoEmail" placeholder="correo@ips.com.co">
      </div>
      <div class="form-group">
        <label>IPS / Institución *</label>
        <input type="text" id="demoIPS" placeholder="Nombre de tu IPS">
      </div>
      <div class="form-group">
        <label>Cargo</label>
        <select id="demoCargo">
          <option value="">Selecciona tu cargo</option>
          ${cargosHTML}
        </select>
      </div>
      <button class="btn-submit" onclick="Controller.submitDemo()">Solicitar demo →</button>
    `;
  },

  // ---------- CHAT ----------
  renderChat() {
    return `
      <div class="chat-head">
        <div>
          <h4>Cuidado Operativo 360°</h4>
          <p>¿En qué podemos ayudarte?</p>
        </div>
        <button class="chat-close" onclick="Controller.toggleChat()">×</button>
      </div>
      <div class="chat-body">
        <div class="chat-msg">¡Hola! 👋 Soy el asistente de Cuidado Operativo 360°. ¿Te gustaría solicitar una demo o tienes alguna pregunta?</div>
        <div class="chat-form">
          <input type="text" id="chatInput" placeholder="Escribe tu mensaje..."
                 onkeydown="if(event.key==='Enter') Controller.sendChat()">
          <button onclick="Controller.sendChat()">→</button>
        </div>
      </div>
    `;
  },
};
