const cron = require('node-cron')
const { queries } = require('./database')
const { isReady, sendReport } = require('./email-service')

const scheduledJobs = []

function startScheduler() {
  stopAll()

  const reports = queries.getEmailReports()
  if (reports.length === 0) return

  reports.forEach(report => {
    let expression = ''

    switch (report.report_type) {
      case 'hourly':
        expression = '0 * * * *'
        break
      case 'daily':
        expression = '0 8 * * *'
        break
      case 'weekly':
        expression = '0 9 * * 1'
        break
      case 'monthly':
        expression = '0 10 1 * *'
        break
      default:
        expression = '0 8 * * *'
    }

    const periodNames = {
      hourly: 'Horário',
      daily: 'Diário',
      weekly: 'Semanal',
      monthly: 'Mensal'
    }

    const job = cron.schedule(expression, async () => {
      try {
        if (!isReady()) return

        const snapshot = queries.getAnalyticsSnapshot()
        await sendReport(report.recipient, snapshot, periodNames[report.report_type] || 'Diário')
        queries.updateLastSent(report.id)
        console.log(`[Scheduler] Report sent to ${report.recipient} (${report.report_type})`)
      } catch (err) {
        console.error(`[Scheduler] Failed to send report to ${report.recipient}:`, err.message)
      }
    })

    scheduledJobs.push(job)
    console.log(`[Scheduler] Scheduled ${report.report_type} report for ${report.recipient}`)
  })
}

function stopAll() {
  scheduledJobs.forEach(job => job.stop())
  scheduledJobs.length = 0
}

function restartScheduler() {
  startScheduler()
}

module.exports = { startScheduler, stopAll, restartScheduler }
