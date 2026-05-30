const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const path = require('path')
const UAParser = require('ua-parser-js')
const { initDatabase, queries } = require('./database')
const { initTransporter, isReady, sendReport, sendTestEmail } = require('./email-service')
const { startScheduler, restartScheduler } = require('./scheduler')

async function main() {
  await initDatabase()
  console.log('[DB] SQLite database initialized')

  const app = express()
  const PORT = process.env.PORT || 3002

  app.use(cors({ origin: true }))
  app.use(express.json({ limit: '50kb' }))

  const apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message: { error: 'Muitos pedidos. Tenta novamente mais tarde.' }
  })
  app.use('/api/', apiLimiter)

  // ─── EMAIL CONFIG STORED IN-APP ───
  let emailConfig = {}
  try {
    const fs = require('fs')
    const configPath = path.join(__dirname, 'email-config.json')
    if (fs.existsSync(configPath)) {
      emailConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
      if (emailConfig.user && emailConfig.pass) {
        initTransporter(emailConfig)
        console.log('[Email] Transporter initialized from saved config')
      }
    }
  } catch (e) { /* ignore */ }

  function saveEmailConfig(config) {
    const fs = require('fs')
    emailConfig = config
    const configPath = path.join(__dirname, 'email-config.json')
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
  }

  // ─── ANALYTICS TRACKING ───
  app.post('/api/track', (req, res) => {
    try {
      const { visitorId, sessionId, page, title, event } = req.body
      if (!visitorId || !page) return res.json({ ok: false })

      const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip
      const ua = req.headers['user-agent'] || ''
      const parser = new UAParser(ua)
      const browser = parser.getBrowser()
      const os = parser.getOS()
      const device = parser.getDevice()

      const visitData = {
        ip,
        userAgent: ua,
        browser: browser.name || 'Desconhecido',
        browserVersion: browser.version || '',
        os: os.name || 'Desconhecido',
        device: device.type || 'desktop',
        page,
        referrer: req.body.referrer || '',
        language: req.body.language || '',
        screenWidth: req.body.screenWidth || null,
        screenHeight: req.body.screenHeight || null
      }

      queries.trackVisit(visitorId, visitData)

      if (sessionId) {
        queries.createSession(sessionId, visitorId)
        queries.updateSession(sessionId)
      }

      queries.trackPageView(visitorId, page, title || page, sessionId)

      if (event && event.type) {
        queries.trackEvent(visitorId, event.type, event.data || {}, page)
      }

      res.json({ ok: true })
    } catch (err) {
      console.error('[Track] Error:', err.message)
      res.json({ ok: false })
    }
  })

  // ─── FEEDBACK ───
  app.post('/api/feedback', (req, res) => {
    try {
      const { name, email, subject, message, page } = req.body
      if (!email || !message) return res.status(400).json({ error: 'Email e mensagem são obrigatórios' })

      queries.saveFeedback(name || 'Anónimo', email, subject || 'Geral', message, page || 'desconhecida')
      res.json({ ok: true })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  // ─── ANALYTICS DATA ───
  app.get('/api/stats/summary', (req, res) => {
    try {
      res.json({
        totalVisitors: queries.getTotalVisitors().total,
        visitorsToday: queries.getVisitorsToday().total,
        totalPageViews: queries.getTotalPageViews().total,
        pageViewsToday: queries.getPageViewsToday().total,
        activeSessions: queries.getActiveSessions().active,
        feedbackCount: queries.getFeedbackCount().total
      })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/stats/popular-pages', (req, res) => {
    try {
      res.json(queries.getPopularPages(parseInt(req.query.limit) || 10))
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/stats/visitors-over-time', (req, res) => {
    try {
      const days = parseInt(req.query.days) || 30
      res.json(queries.getVisitorsOverTime(days))
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/stats/page-views-over-time', (req, res) => {
    try {
      const days = parseInt(req.query.days) || 30
      res.json(queries.getPageViewsOverTime(days))
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/stats/devices', (req, res) => {
    try {
      res.json(queries.getDeviceBreakdown())
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/stats/browsers', (req, res) => {
    try {
      res.json(queries.getBrowserBreakdown())
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/stats/os', (req, res) => {
    try {
      res.json(queries.getOSBreakdown())
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/stats/recent-visits', (req, res) => {
    try {
      res.json(queries.getRecentVisits(parseInt(req.query.limit) || 20))
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/stats/events-today', (req, res) => {
    try {
      res.json(queries.getEventsToday())
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/stats/full', (req, res) => {
    try {
      res.json(queries.getAnalyticsSnapshot())
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  // ─── EMAIL CONFIGURATION ───
  app.post('/api/email/configure', async (req, res) => {
    try {
      const { host, port, user, pass } = req.body
      if (!user || !pass) return res.status(400).json({ error: 'Email e palavra-passe são obrigatórios' })

      const config = { host: host || '', port: port || '', user, pass }
      const success = initTransporter(config)

      if (!success) {
        return res.status(400).json({ error: 'Falha ao configurar o servidor de email. Verifica as credenciais.' })
      }

      saveEmailConfig(config)
      res.json({ ok: true, message: 'Servidor de email configurado com sucesso!' })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.post('/api/email/test', async (req, res) => {
    try {
      const { recipient } = req.body
      if (!recipient) return res.status(400).json({ error: 'Destinatário é obrigatório' })
      if (!isReady()) return res.status(400).json({ error: 'Servidor de email não configurado' })

      await sendTestEmail(recipient)
      res.json({ ok: true, message: 'Email de teste enviado com sucesso!' })
    } catch (err) {
      res.status(500).json({ error: 'Falha ao enviar email: ' + err.message })
    }
  })

  app.post('/api/email/send-report', async (req, res) => {
    try {
      const { recipient, period } = req.body
      if (!recipient) return res.status(400).json({ error: 'Destinatário é obrigatório' })
      if (!isReady()) return res.status(400).json({ error: 'Servidor de email não configurado' })

      const snapshot = queries.getAnalyticsSnapshot()
      const periodNames = { hourly: 'Horário', daily: 'Diário', weekly: 'Semanal', monthly: 'Mensal' }
      await sendReport(recipient, snapshot, periodNames[period] || 'Diário')

      res.json({ ok: true, message: 'Relatório enviado com sucesso!' })
    } catch (err) {
      res.status(500).json({ error: 'Falha ao enviar relatório: ' + err.message })
    }
  })

  app.post('/api/email/schedule', (req, res) => {
    try {
      const { recipient, reportType } = req.body
      if (!recipient) return res.status(400).json({ error: 'Email é obrigatório' })

      queries.setEmailReport(recipient, reportType || 'daily')
      restartScheduler()

      res.json({ ok: true, message: `Relatório ${reportType || 'diário'} agendado para ${recipient}` })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.post('/api/email/unsubscribe', (req, res) => {
    try {
      const { recipient } = req.body
      if (!recipient) return res.status(400).json({ error: 'Email é obrigatório' })

      queries.unsubscribe(recipient)
      restartScheduler()

      res.json({ ok: true, message: 'Inscrição removida com sucesso' })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  app.get('/api/email/status', (req, res) => {
    try {
      res.json({
        configured: isReady(),
        reports: queries.getEmailReports()
      })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  // ─── MARKET PRICES ───
  let priceHistory = {}

  app.get('/api/precos', async (req, res) => {
    try {
      const exchangeRes = await fetch('https://open.er-api.com/v6/latest/EUR', { signal: AbortSignal.timeout(8000) })
      const exchange = await exchangeRes.json()
      const rateCVE = exchange.rates?.CVE || 110.0

      const baseOffers = [
        { id: 0, titulo: 'Escapada ao Sal', precoBase: 599 },
        { id: 1, titulo: 'Aventura no Fogo', precoBase: 799 },
        { id: 2, titulo: 'Trekking Santo Antão', precoBase: 899 },
        { id: 3, titulo: 'Pacote Boa Vista', precoBase: 649 },
        { id: 4, titulo: 'Cultura em Mindelo', precoBase: 549 },
        { id: 5, titulo: 'Roteiro Santiago Histórico', precoBase: 469 },
        { id: 6, titulo: 'Paraíso Escondido Maio', precoBase: 529 },
        { id: 7, titulo: 'São Nicolau Autêntico', precoBase: 449 },
        { id: 8, titulo: 'Relax na Brava', precoBase: 399 },
        { id: 9, titulo: 'Sal & Boa Vista Combo', precoBase: 949 },
        { id: 10, titulo: 'Cabo Verde Completo', precoBase: 1899 },
        { id: 11, titulo: 'Luxo no Sal', precoBase: 1499 }
      ]

      const now = Date.now()
      const hour = new Date().getHours()
      const dayOfWeek = new Date().getDay()

      const demandFactor = 0.85 + (hour >= 10 && hour <= 20 ? 0.1 : 0) + (dayOfWeek >= 5 ? 0.08 : 0)
      const volatility = 0.92 + Math.random() * 0.16

      const offers = baseOffers.map(o => {
        if (!priceHistory[o.id]) {
          priceHistory[o.id] = { lowest: o.precoBase * rateCVE * 0.008 }
        }
        const rawEuro = o.precoBase * demandFactor * volatility
        const priceEUR = Math.round(rawEuro * 10) / 10
        const priceCVE = Math.round(priceEUR * rateCVE)
        const lowestEUR = Math.round(priceHistory[o.id].lowest * 10) / 10

        if (priceEUR < lowestEUR) {
          priceHistory[o.id].lowest = priceEUR
        }

        const savings = Math.round((1 - priceEUR / o.precoBase) * 100)
        const priceChange = Math.round((Math.random() - 0.5) * 8)

        return {
          id: o.id,
          titulo: o.titulo,
          precoEUR: priceEUR,
          precoCVE: priceCVE,
          precoBase: o.precoBase,
          lowestEUR: lowestEUR,
          lowestCVE: Math.round(lowestEUR * rateCVE),
          savings: Math.min(Math.max(savings, 5), 60),
          change: priceChange,
          disponivel: true
        }
      })

      res.json({
        timestamp: now,
        exchangeRate: rateCVE,
        currency: 'EUR',
        offers
      })
    } catch (err) {
      console.error('[Precos] Error:', err.message)
      res.status(500).json({ error: 'Erro ao buscar preços' })
    }
  })

  // ─── START ───
  app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════╗
║       🌍 CABO VERDE ANALYTICS SERVER            ║
║══════════════════════════════════════════════════║
║  API:    http://localhost:${PORT}/api/precos       ║
║  Dashboard: http://localhost:${PORT}/api/stats/summary ║
║  Status: 🟢 Online                               ║
╚══════════════════════════════════════════════════╝
    `)

    startScheduler()
  })
}

main().catch(err => {
  console.error('[FATAL] Server failed to start:', err)
  process.exit(1)
})
