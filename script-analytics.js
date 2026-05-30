// ===================== ANALYTICS ENGINE =====================
const IS_LOCALHOST = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
const ANALYTICS_API = IS_LOCALHOST ? 'http://localhost:3002/api' : '/api'

const Analytics = {
  visitorId: localStorage.getItem('cv_visitor_id') || crypto.randomUUID(),
  sessionId: crypto.randomUUID(),
  initialized: false,

  init() {
    if (this.initialized) return
    this.initialized = true

    if (!localStorage.getItem('cv_visitor_id')) {
      localStorage.setItem('cv_visitor_id', this.visitorId)
    }

    this.trackPageView()
    this.trackEvent('session_start', { referrer: document.referrer || 'direct' })

    const origOpen = XMLHttpRequest.prototype.open
    const self = this
    XMLHttpRequest.prototype.open = function () {
      this.addEventListener('load', () => {
        if (this.responseURL && !this.responseURL.includes('localhost')) return
      })
      return origOpen.apply(this, arguments)
    }
  },

  async track(type, data = {}) {
    try {
      const activePage = document.querySelector('.page.active')?.id?.replace('page-', '') || 'home'
      const payload = {
        visitorId: this.visitorId,
        sessionId: this.sessionId,
        page: activePage,
        title: document.title,
        referrer: document.referrer || '',
        language: navigator.language,
        screenWidth: screen.width,
        screenHeight: screen.height,
        event: data.event || null
      }

      const res = await fetch(`${ANALYTICS_API}/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      return await res.json()
    } catch (e) {
      // Server offline — silently ignore
      return null
    }
  },

  trackPageView() {
    return this.track('pageview')
  },

  trackEvent(type, data = {}) {
    return this.track('event', { event: { type, data } })
  },

  async getSummary() {
    try {
      const res = await fetch(`${ANALYTICS_API}/stats/summary`)
      return await res.json()
    } catch { return null }
  },

  async getPopularPages(limit = 10) {
    try {
      const res = await fetch(`${ANALYTICS_API}/stats/popular-pages?limit=${limit}`)
      return await res.json()
    } catch { return [] }
  },

  async getVisitorsOverTime(days = 30) {
    try {
      const res = await fetch(`${ANALYTICS_API}/stats/visitors-over-time?days=${days}`)
      return await res.json()
    } catch { return [] }
  },

  async getPageViewsOverTime(days = 30) {
    try {
      const res = await fetch(`${ANALYTICS_API}/stats/page-views-over-time?days=${days}`)
      return await res.json()
    } catch { return [] }
  },

  async getDeviceBreakdown() {
    try {
      const res = await fetch(`${ANALYTICS_API}/stats/devices`)
      return await res.json()
    } catch { return [] }
  },

  async getBrowserBreakdown() {
    try {
      const res = await fetch(`${ANALYTICS_API}/stats/browsers`)
      return await res.json()
    } catch { return [] }
  },

  async getRecentVisits(limit = 20) {
    try {
      const res = await fetch(`${ANALYTICS_API}/stats/recent-visits?limit=${limit}`)
      return await res.json()
    } catch { return [] }
  },

  async getOSBreakdown() {
    try {
      const res = await fetch(`${ANALYTICS_API}/stats/os`)
      return await res.json()
    } catch { return [] }
  },

  async getFullSnapshot() {
    try {
      const res = await fetch(`${ANALYTICS_API}/stats/full`)
      return await res.json()
    } catch { return null }
  },

  async configureEmail(config) {
    try {
      const res = await fetch(`${ANALYTICS_API}/email/configure`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      })
      return await res.json()
    } catch { return { error: 'Servidor offline' } }
  },

  async testEmail(recipient) {
    try {
      const res = await fetch(`${ANALYTICS_API}/email/test`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient })
      })
      return await res.json()
    } catch { return { error: 'Servidor offline' } }
  },

  async sendReport(recipient, period = 'daily') {
    try {
      const res = await fetch(`${ANALYTICS_API}/email/send-report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient, period })
      })
      return await res.json()
    } catch { return { error: 'Servidor offline' } }
  },

  async scheduleReport(recipient, reportType = 'daily') {
    try {
      const res = await fetch(`${ANALYTICS_API}/email/schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient, reportType })
      })
      return await res.json()
    } catch { return { error: 'Servidor offline' } }
  },

  async unsubscribeReport(recipient) {
    try {
      const res = await fetch(`${ANALYTICS_API}/email/unsubscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient })
      })
      return await res.json()
    } catch { return { error: 'Servidor offline' } }
  },

  async getEmailStatus() {
    try {
      const res = await fetch(`${ANALYTICS_API}/email/status`)
      return await res.json()
    } catch { return null }
  }
}

// ===================== RENDER ANALYTICS DASHBOARD =====================
let analyticsCharts = []

function destroyCharts() {
  analyticsCharts.forEach(c => { try { c.destroy() } catch {} })
  analyticsCharts = []
}

async function renderAnalyticsDashboard() {
  const container = document.getElementById('analyticsDashboard')
  if (!container) return

  destroyCharts()

  const summary = await Analytics.getSummary()
  if (!summary) {
    container.innerHTML = `
      <div class="analytics-offline">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="opacity:0.3;margin-bottom:16px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
        </svg>
        <h3>Servidor Analytics Offline</h3>
        <p>Para ativar, executa o servidor Node.js na pasta <code>server/</code></p>
        <div class="analytics-code-block">
          <code>cd server<br>npm install<br>npm start</code>
        </div>
        <p style="font-size:12px;color:#666;margin-top:16px">O servidor será iniciado em http://localhost:3002</p>
      </div>
    `
    return
  }

  container.innerHTML = `
    <div class="analytics-header">
      <div class="analytics-header-left">
        <h2 class="analytics-title">📊 Analytics Dashboard</h2>
        <p class="analytics-subtitle">Métricas em tempo real do teu projeto Cabo Verde</p>
      </div>
      <div class="analytics-header-right">
        <span class="analytics-server-status online">🟢 Servidor Online</span>
        <button class="analytics-refresh-btn" onclick="renderAnalyticsDashboard()">↻ Atualizar</button>
      </div>
    </div>

    <div class="analytics-cards">
      <div class="analytics-card" style="--accent:#3b82f6">
        <div class="analytics-card-icon">👥</div>
        <div class="analytics-card-body">
          <div class="analytics-card-value">${summary.totalVisitors}</div>
          <div class="analytics-card-label">Visitantes Totais</div>
        </div>
        <div class="analytics-card-trend">${summary.visitorsToday} hoje</div>
      </div>
      <div class="analytics-card" style="--accent:#22c55e">
        <div class="analytics-card-icon">👁️</div>
        <div class="analytics-card-body">
          <div class="analytics-card-value">${summary.totalPageViews}</div>
          <div class="analytics-card-label">Páginas Vistas</div>
        </div>
        <div class="analytics-card-trend">${summary.pageViewsToday} hoje</div>
      </div>
      <div class="analytics-card" style="--accent:#f59e0b">
        <div class="analytics-card-icon">🟢</div>
        <div class="analytics-card-body">
          <div class="analytics-card-value">${summary.activeSessions}</div>
          <div class="analytics-card-label">Sessões Ativas</div>
        </div>
        <div class="analytics-card-trend">agora</div>
      </div>
      <div class="analytics-card" style="--accent:#ecad29">
        <div class="analytics-card-icon">📨</div>
        <div class="analytics-card-body">
          <div class="analytics-card-value">${summary.feedbackCount}</div>
          <div class="analytics-card-label">Mensagens</div>
        </div>
        <div class="analytics-card-trend">total</div>
      </div>
    </div>

    <div class="analytics-grid">
      <div class="analytics-panel">
        <h3 class="analytics-panel-title">📈 Visitantes ao Longo do Tempo</h3>
        <div class="analytics-chart-container">
          <canvas id="chartVisitorsOverTime"></canvas>
        </div>
      </div>
      <div class="analytics-panel">
        <h3 class="analytics-panel-title">👁️ Visualizações de Páginas</h3>
        <div class="analytics-chart-container">
          <canvas id="chartPageViewsOverTime"></canvas>
        </div>
      </div>
    </div>

    <div class="analytics-grid">
      <div class="analytics-panel">
        <h3 class="analytics-panel-title">🔥 Páginas Mais Populares</h3>
        <div class="analytics-chart-container">
          <canvas id="chartPopularPages"></canvas>
        </div>
      </div>
      <div class="analytics-panel">
        <h3 class="analytics-panel-title">📱 Dispositivos</h3>
        <div class="analytics-chart-container">
          <canvas id="chartDevices"></canvas>
        </div>
      </div>
    </div>

    <div class="analytics-grid">
      <div class="analytics-panel">
        <h3 class="analytics-panel-title">🌐 Navegadores</h3>
        <div class="analytics-chart-container">
          <canvas id="chartBrowsers"></canvas>
        </div>
      </div>
      <div class="analytics-panel">
        <h3 class="analytics-panel-title">💻 Sistemas Operativos</h3>
        <div class="analytics-chart-container">
          <canvas id="chartOS"></canvas>
        </div>
      </div>
    </div>

    <div class="analytics-panel">
      <h3 class="analytics-panel-title">📋 Últimas Visitas</h3>
      <div class="analytics-table-wrapper">
        <table class="analytics-table">
          <thead>
            <tr>
              <th>Visitante</th>
              <th>Página</th>
              <th>Browser</th>
              <th>Dispositivo</th>
              <th>Visitas</th>
              <th>Último Acesso</th>
            </tr>
          </thead>
          <tbody id="analyticsRecentTable"></tbody>
        </table>
      </div>
    </div>

    <div class="analytics-panel">
      <h3 class="analytics-panel-title">📧 Configuração de Email</h3>
      <p style="font-size:13px;color:#999;margin:0 0 16px">Configura o servidor SMTP para receber relatórios automáticos no teu email.</p>
      <form id="analyticsEmailForm" class="analytics-email-form">
        <div class="analytics-email-field">
          <label>Servidor SMTP</label>
          <input type="text" id="analyticsSmtpHost" placeholder="smtp.gmail.com">
        </div>
        <div class="analytics-email-field">
          <label>Porta</label>
          <input type="number" id="analyticsSmtpPort" placeholder="587">
        </div>
        <div class="analytics-email-field">
          <label>Email</label>
          <input type="email" id="analyticsEmailUser" placeholder="teuemail@gmail.com">
        </div>
        <div class="analytics-email-field">
          <label>Palavra-passe App (Gmail)</label>
          <input type="password" id="analyticsEmailPass" placeholder="App Password ou palavra-passe">
          <span style="font-size:10px;color:#666;margin-top:4px;display:block">
            ⚠️ Para Gmail, usa uma <a href="https://support.google.com/accounts/answer/185833" target="_blank" style="color:#ecad29">App Password</a>
          </span>
        </div>
        <div class="analytics-email-btns">
          <button type="submit" class="analytics-btn primary">💾 Salvar Configuração</button>
          <button type="button" class="analytics-btn" id="analyticsTestEmail">📧 Testar Email</button>
        </div>
        <div id="analyticsEmailStatus" class="analytics-email-status"></div>
      </form>

      <hr style="border-color:#2a2a2a;margin:24px 0">

      <h4 style="color:#fff;font-size:14px;margin:0 0 12px">📬 Agendar Relatórios</h4>
      <form id="analyticsScheduleForm" class="analytics-email-form">
        <div class="analytics-email-field">
          <label>Email para receber relatórios</label>
          <input type="email" id="analyticsReportEmail" value="aiiltonnsousa1990@gmail.com" placeholder="aiiltonnsousa1990@gmail.com">
        </div>
        <div class="analytics-email-field">
          <label>Frequência</label>
          <select id="analyticsReportFrequency">
            <option value="hourly">A cada hora</option>
            <option value="daily" selected>Diariamente (8:00)</option>
            <option value="weekly">Semanalmente (Segunda 9:00)</option>
            <option value="monthly">Mensalmente (Dia 1 10:00)</option>
          </select>
        </div>
        <div class="analytics-email-btns">
          <button type="submit" class="analytics-btn primary">✅ Agendar</button>
          <button type="button" class="analytics-btn" id="analyticsSendNow">📤 Enviar Agora</button>
          <button type="button" class="analytics-btn danger" id="analyticsUnsubscribe">🚫 Cancelar</button>
        </div>
        <div id="analyticsScheduleStatus" class="analytics-email-status"></div>
      </form>
    </div>
  `

  // Load charts
  loadCharts()

  // Load recent visits table
  loadRecentVisits()

  // Email form handlers
  document.getElementById('analyticsEmailForm').addEventListener('submit', async (e) => {
    e.preventDefault()
    const status = document.getElementById('analyticsEmailStatus')
    status.textContent = '⏳ A configurar...'
    status.className = 'analytics-email-status'

    const result = await Analytics.configureEmail({
      host: document.getElementById('analyticsSmtpHost').value,
      port: document.getElementById('analyticsSmtpPort').value,
      user: document.getElementById('analyticsEmailUser').value,
      pass: document.getElementById('analyticsEmailPass').value
    })

    if (result.ok) {
      status.textContent = '✅ ' + result.message
      status.className = 'analytics-email-status success'
    } else {
      status.textContent = '❌ ' + (result.error || 'Erro ao configurar')
      status.className = 'analytics-email-status error'
    }
  })

  document.getElementById('analyticsTestEmail').addEventListener('click', async () => {
    const status = document.getElementById('analyticsEmailStatus')
    const email = document.getElementById('analyticsEmailUser').value
    if (!email) {
      status.textContent = '❌ Insere um email primeiro'
      status.className = 'analytics-email-status error'
      return
    }
    status.textContent = '⏳ A enviar teste...'
    status.className = 'analytics-email-status'
    const result = await Analytics.testEmail(email)
    if (result.ok) {
      status.textContent = '✅ Email de teste enviado! Verifica a tua caixa de entrada.'
      status.className = 'analytics-email-status success'
    } else {
      status.textContent = '❌ ' + (result.error || 'Erro ao enviar teste')
      status.className = 'analytics-email-status error'
    }
  })

  document.getElementById('analyticsScheduleForm').addEventListener('submit', async (e) => {
    e.preventDefault()
    const status = document.getElementById('analyticsScheduleStatus')
    const email = document.getElementById('analyticsReportEmail').value
    const freq = document.getElementById('analyticsReportFrequency').value
    if (!email) { status.textContent = '❌ Insere um email'; status.className = 'analytics-email-status error'; return }

    status.textContent = '⏳ A agendar...'
    status.className = 'analytics-email-status'
    const result = await Analytics.scheduleReport(email, freq)
    if (result.ok) {
      status.textContent = '✅ ' + result.message
      status.className = 'analytics-email-status success'
    } else {
      status.textContent = '❌ ' + (result.error || 'Erro ao agendar')
      status.className = 'analytics-email-status error'
    }
  })

  document.getElementById('analyticsSendNow').addEventListener('click', async () => {
    const status = document.getElementById('analyticsScheduleStatus')
    const email = document.getElementById('analyticsReportEmail').value
    const freq = document.getElementById('analyticsReportFrequency').value
    if (!email) { status.textContent = '❌ Insere um email'; status.className = 'analytics-email-status error'; return }

    status.textContent = '⏳ A gerar e enviar relatório...'
    status.className = 'analytics-email-status'
    const result = await Analytics.sendReport(email, freq)
    if (result.ok) {
      status.textContent = '✅ Relatório enviado! Verifica o teu email.'
      status.className = 'analytics-email-status success'
    } else {
      status.textContent = '❌ ' + (result.error || 'Erro ao enviar')
      status.className = 'analytics-email-status error'
    }
  })

  document.getElementById('analyticsUnsubscribe').addEventListener('click', async () => {
    const status = document.getElementById('analyticsScheduleStatus')
    const email = document.getElementById('analyticsReportEmail').value
    if (!email) { status.textContent = '❌ Insere um email'; status.className = 'analytics-email-status error'; return }

    status.textContent = '⏳ A remover...'
    status.className = 'analytics-email-status'
    const result = await Analytics.unsubscribeReport(email)
    if (result.ok) {
      status.textContent = '✅ ' + result.message
      status.className = 'analytics-email-status success'
    } else {
      status.textContent = '❌ ' + (result.error || 'Erro ao cancelar')
      status.className = 'analytics-email-status error'
    }
  })
}

async function loadCharts() {
  try {
    const visitorsData = await Analytics.getVisitorsOverTime(14)
    const viewsData = await Analytics.getPageViewsOverTime(14)
    const popular = await Analytics.getPopularPages(8)
    const devices = await Analytics.getDeviceBreakdown()
    const browsers = await Analytics.getBrowserBreakdown()
    const osData = await Analytics.getOSBreakdown()

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: { color: '#FFFFFFAA', font: { family: 'Inter, sans-serif', size: 11 } }
        }
      },
      scales: {
        x: { ticks: { color: '#FFFFFF66', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#FFFFFF66', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }

    if (visitorsData.length && document.getElementById('chartVisitorsOverTime')) {
      analyticsCharts.push(new Chart(document.getElementById('chartVisitorsOverTime'), {
        type: 'line',
        data: {
          labels: visitorsData.map(d => d.date?.slice(5) || ''),
          datasets: [{
            label: 'Visitantes',
            data: visitorsData.map(d => d.visitors),
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59,130,246,0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: '#3b82f6'
          }]
        },
        options: chartOptions
      }))
    }

    if (viewsData.length && document.getElementById('chartPageViewsOverTime')) {
      analyticsCharts.push(new Chart(document.getElementById('chartPageViewsOverTime'), {
        type: 'bar',
        data: {
          labels: viewsData.map(d => d.date?.slice(5) || ''),
          datasets: [{
            label: 'Visualizações',
            data: viewsData.map(d => d.views),
            backgroundColor: 'rgba(236,173,41,0.6)',
            borderColor: '#ecad29',
            borderWidth: 1,
            borderRadius: 4
          }]
        },
        options: chartOptions
      }))
    }

    if (popular.length && document.getElementById('chartPopularPages')) {
      analyticsCharts.push(new Chart(document.getElementById('chartPopularPages'), {
        type: 'bar',
        data: {
          labels: popular.map(p => p.page?.replace('.html', '').replace(/_/g, ' ') || ''),
          datasets: [{
            label: 'Visualizações',
            data: popular.map(p => p.views),
            backgroundColor: popular.map((_, i) => `hsla(${i * 40}, 80%, 60%, 0.7)`),
            borderRadius: 4
          }]
        },
        options: {
          ...chartOptions,
          indexAxis: 'y',
        }
      }))
    }

    if (devices.length && document.getElementById('chartDevices')) {
      const colors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6']
      analyticsCharts.push(new Chart(document.getElementById('chartDevices'), {
        type: 'doughnut',
        data: {
          labels: devices.map(d => d.device || 'Desconhecido'),
          datasets: [{
            data: devices.map(d => d.count),
            backgroundColor: devices.map((_, i) => colors[i % colors.length]),
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#FFFFFFAA', font: { size: 11 }, padding: 12 } }
          }
        }
      }))
    }

    if (browsers.length && document.getElementById('chartBrowsers')) {
      const colors = ['#ecad29', '#3b82f6', '#22c55e', '#8b5cf6', '#ef4444']
      analyticsCharts.push(new Chart(document.getElementById('chartBrowsers'), {
        type: 'doughnut',
        data: {
          labels: browsers.map(b => b.browser || 'Desconhecido'),
          datasets: [{
            data: browsers.map(b => b.count),
            backgroundColor: browsers.map((_, i) => colors[i % colors.length]),
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#FFFFFFAA', font: { size: 11 }, padding: 12 } }
          }
        }
      }))
    }

    if (osData.length && document.getElementById('chartOS')) {
      const colors = ['#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444', '#ecad29']
      analyticsCharts.push(new Chart(document.getElementById('chartOS'), {
        type: 'doughnut',
        data: {
          labels: osData.map(o => o.os || 'Desconhecido'),
          datasets: [{
            data: osData.map(o => o.count),
            backgroundColor: osData.map((_, i) => colors[i % colors.length]),
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#FFFFFFAA', font: { size: 11 }, padding: 12 } }
          }
        }
      }))
    }
  } catch (e) {
    console.error('[Analytics] Chart error:', e)
  }
}

async function loadRecentVisits() {
  const tbody = document.getElementById('analyticsRecentTable')
  if (!tbody) return
  const visits = await Analytics.getRecentVisits(15)
  if (!visits.length) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#666;padding:20px">Sem visitas registadas</td></tr>'
    return
  }
  tbody.innerHTML = visits.map(v => {
    const time = new Date(v.last_visit + 'Z').toLocaleString('pt-PT')
    const shortId = v.visitor_id?.slice(0, 8) + '...'
    return `<tr>
      <td title="${v.visitor_id}" style="font-size:11px">${shortId}</td>
      <td>${v.page}</td>
      <td>${v.browser || '-'}</td>
      <td>${v.device || '-'}</td>
      <td style="text-align:center;font-weight:700">${v.visit_count}</td>
      <td style="font-size:11px;color:#999">${time}</td>
    </tr>`
  }).join('')
}

// Init analytics tracking
document.addEventListener('DOMContentLoaded', () => Analytics.init())

// Re-track on page change
if (window.__trackPage) {
  const origTrack = window.__trackPage
  window.__trackPage = function(page) {
    origTrack(page)
    Analytics.trackPageView()
    Analytics.trackEvent('page_change', { page })
  }
}
