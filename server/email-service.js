const nodemailer = require('nodemailer')

let transporter = null

function initTransporter(config) {
  const { host, port, user, pass } = config

  if (host && port && user && pass) {
    transporter = nodemailer.createTransport({
      host,
      port: parseInt(port),
      secure: parseInt(port) === 465,
      auth: { user, pass }
    })
    return true
  }

  if (user && pass) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    })
    return true
  }

  return false
}

function isReady() {
  return transporter !== null
}

function buildReportHTML(snapshot, period = 'diário') {
  const formatDate = (d) => {
    if (!d) return '-'
    const date = new Date(d + 'T00:00:00')
    return date.toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit' })
  }

  const popularRows = snapshot.popularPages.map((p, i) =>
    `<tr><td>${i + 1}</td><td>${p.page}</td><td style="text-align:right;font-weight:700;color:#ecad29">${p.views}</td></tr>`
  ).join('')

  const deviceRows = snapshot.deviceBreakdown.map(d =>
    `<tr><td>${d.device || 'Desconhecido'}</td><td style="text-align:right;font-weight:600">${d.count}</td></tr>`
  ).join('')

  const browserRows = snapshot.browserBreakdown.map(b =>
    `<tr><td>${b.browser || 'Desconhecido'}</td><td style="text-align:right;font-weight:600">${b.count}</td></tr>`
  ).join('')

  const recentRows = snapshot.recentVisits.map(v =>
    `<tr>
      <td style="font-size:11px;max-width:80px;overflow:hidden;text-overflow:ellipsis">${v.visitor_id}</td>
      <td>${v.page}</td>
      <td>${v.device || '-'}</td>
      <td style="text-align:right">${v.visit_count}</td>
      <td style="font-size:11px;color:#999">${new Date(v.last_visit + 'Z').toLocaleString('pt-PT')}</td>
    </tr>`
  ).join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a">
        <tr>
          <td style="background:linear-gradient(135deg,#003893,#009940);padding:30px;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:24px;letter-spacing:2px;text-transform:uppercase">📊 Relatório ${period}</h1>
            <p style="color:rgba(255,255,255,0.7);margin:8px 0 0;font-size:13px">Cabo Verde - Turismo Analytics</p>
          </td>
        </tr>

        <tr><td style="padding:24px">
          <h2 style="color:#ecad29;font-size:14px;text-transform:uppercase;letter-spacing:1px;margin:0 0 16px">📈 Resumo Geral</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              ${[
                ['Visitantes Totais', snapshot.totalVisitors, '#3b82f6'],
                ['Hoje', snapshot.visitorsToday, '#22c55e'],
                ['Páginas Vistas', snapshot.totalPageViews, '#8b5cf6'],
                ['Hoje', snapshot.pageViewsToday, '#f59e0b']
              ].map(([label, value, color]) => `
                <td align="center" style="padding:12px 8px">
                  <div style="font-size:28px;font-weight:800;color:${color}">${value}</div>
                  <div style="font-size:11px;color:#999;margin-top:4px">${label}</div>
                </td>
              `).join('')}
            </tr>
          </table>
        </td></tr>

        <tr><td style="padding:0 24px 24px">
          <h2 style="color:#ecad29;font-size:14px;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px">🔥 Páginas Mais Populares</h2>
          <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse">
            <tr style="border-bottom:1px solid #2a2a2a;font-size:11px;color:#999;text-transform:uppercase">
              <th style="text-align:left">#</th><th style="text-align:left">Página</th><th style="text-align:right">Visualizações</th>
            </tr>
            ${popularRows || '<tr><td colspan="3" style="text-align:center;color:#666;padding:16px">Sem dados</td></tr>'}
          </table>
        </td></tr>

        <tr><td style="padding:0 24px 24px">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="50%" valign="top">
                <h2 style="color:#ecad29;font-size:13px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">📱 Dispositivos</h2>
                <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:13px">
                  ${deviceRows || '<tr><td style="color:#666">Sem dados</td></tr>'}
                </table>
              </td>
              <td width="50%" valign="top">
                <h2 style="color:#ecad29;font-size:13px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">🌐 Navegadores</h2>
                <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:13px">
                  ${browserRows || '<tr><td style="color:#666">Sem dados</td></tr>'}
                </table>
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td style="padding:0 24px 24px">
          <h2 style="color:#ecad29;font-size:14px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">🕐 Sessões Ativas</h2>
          <p style="font-size:24px;font-weight:800;color:#22c55e;margin:0">${snapshot.activeSessions} <span style="font-size:13px;color:#999;font-weight:400">agora</span></p>
        </td></tr>

        <tr><td style="padding:0 24px 24px">
          <h2 style="color:#ecad29;font-size:14px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">📋 Últimas Visitas</h2>
          <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:12px">
            <tr style="border-bottom:1px solid #2a2a2a;color:#999;text-transform:uppercase;font-size:10px">
              <th style="text-align:left">ID</th><th style="text-align:left">Página</th><th style="text-align:left">Dispositivo</th><th style="text-align:right">Visitas</th><th style="text-align:right">Último</th>
            </tr>
            ${recentRows || '<tr><td colspan="5" style="text-align:center;color:#666;padding:16px">Sem dados</td></tr>'}
          </table>
        </td></tr>

        <tr><td style="padding:0 24px 24px;text-align:center">
          <p style="font-size:11px;color:#555;margin:0">
            Este relatório foi gerado automaticamente pelo sistema de analytics do <strong style="color:#777">Cabo Verde Turismo</strong>.<br>
            ${new Date().toLocaleString('pt-PT')}
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

async function sendReport(recipient, snapshot, period = 'diário') {
  if (!transporter) {
    throw new Error('Transporter not initialized. Configure email settings first.')
  }

  const html = buildReportHTML(snapshot, period)

  const info = await transporter.sendMail({
    from: '"Cabo Verde Analytics" <noreply@caboverturismo.analytics>',
    to: recipient,
    subject: `📊 Relatório ${period} - Cabo Verde Turismo Analytics`,
    html,
    attachments: []
  })

  return info
}

async function sendTestEmail(recipient) {
  if (!transporter) {
    throw new Error('Transporter not initialized.')
  }

  const info = await transporter.sendMail({
    from: '"Cabo Verde Analytics" <noreply@caboverturismo.analytics>',
    to: recipient,
    subject: '✅ Teste - Cabo Verde Analytics',
    html: `
      <!DOCTYPE html>
      <html><body style="background:#0a0a0a;padding:40px;font-family:Arial,sans-serif">
        <div style="max-width:500px;margin:0 auto;background:#1a1a1a;border-radius:16px;padding:32px;border:1px solid #2a2a2a;text-align:center">
          <h1 style="color:#22c55e;font-size:32px;margin:0">✅</h1>
          <h2 style="color:#fff;margin:16px 0 8px">Sistema de Email Configurado!</h2>
          <p style="color:#999;font-size:14px;line-height:1.6">
            O servidor de analytics do <strong style="color:#ecad29">Cabo Verde Turismo</strong> está pronto.<br>
            A partir de agora receberás relatórios periódicos com:<br>
            📈 Visitantes & Visualizações · 🔥 Páginas Populares · 📱 Dispositivos · 🕐 Sessões Ativas
          </p>
          <p style="color:#555;font-size:11px;margin-top:20px">${new Date().toLocaleString('pt-PT')}</p>
        </div>
      </body></html>
    `
  })

  return info
}

module.exports = { initTransporter, isReady, sendReport, sendTestEmail }
