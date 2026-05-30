const initSqlJs = require('sql.js')
const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, 'analytics.db')
let db = null

async function initDatabase() {
  const SQL = await initSqlJs()

  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH)
    db = new SQL.Database(buffer)
  } else {
    db = new SQL.Database()
  }

  db.run('PRAGMA journal_mode = WAL')
  db.run('PRAGMA foreign_keys = ON')

  db.run(`
    CREATE TABLE IF NOT EXISTS visitors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      visitor_id TEXT NOT NULL,
      ip TEXT,
      user_agent TEXT,
      browser TEXT,
      browser_version TEXT,
      os TEXT,
      device TEXT,
      page TEXT,
      referrer TEXT,
      language TEXT,
      screen_width INTEGER,
      screen_height INTEGER,
      first_visit DATETIME DEFAULT (datetime('now')),
      last_visit DATETIME DEFAULT (datetime('now')),
      visit_count INTEGER DEFAULT 1
    )
  `)

  db.run(`
    CREATE TABLE IF NOT EXISTS page_views (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      visitor_id TEXT NOT NULL,
      page TEXT NOT NULL,
      title TEXT,
      timestamp DATETIME DEFAULT (datetime('now')),
      session_id TEXT,
      time_on_page INTEGER DEFAULT 0
    )
  `)

  db.run(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT UNIQUE NOT NULL,
      visitor_id TEXT NOT NULL,
      start_time DATETIME DEFAULT (datetime('now')),
      end_time DATETIME,
      pages_viewed INTEGER DEFAULT 0,
      country TEXT,
      city TEXT
    )
  `)

  db.run(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      visitor_id TEXT NOT NULL,
      event_type TEXT NOT NULL,
      event_data TEXT,
      page TEXT,
      timestamp DATETIME DEFAULT (datetime('now'))
    )
  `)

  db.run(`
    CREATE TABLE IF NOT EXISTS email_reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      recipient TEXT NOT NULL,
      report_type TEXT NOT NULL DEFAULT 'daily',
      last_sent DATETIME,
      next_send DATETIME,
      enabled INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT (datetime('now'))
    )
  `)

  db.run(`
    CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      subject TEXT,
      message TEXT,
      page TEXT,
      timestamp DATETIME DEFAULT (datetime('now'))
    )
  `)

  db.run(`
    CREATE INDEX IF NOT EXISTS idx_visitors_id ON visitors(visitor_id)
  `)
  db.run(`
    CREATE INDEX IF NOT EXISTS idx_page_views_visitor ON page_views(visitor_id)
  `)
  db.run(`
    CREATE INDEX IF NOT EXISTS idx_page_views_timestamp ON page_views(timestamp)
  `)

  saveDatabase()
  return db
}

function saveDatabase() {
  if (!db) return
  const data = db.export()
  const buffer = Buffer.from(data)
  fs.writeFileSync(DB_PATH, buffer)
}

function query(sql, params = []) {
  const stmt = db.prepare(sql)
  if (sql.trim().toUpperCase().startsWith('SELECT') || sql.trim().toUpperCase().startsWith('WITH')) {
    stmt.bind(params)
    const rows = []
    while (stmt.step()) {
      rows.push(stmt.getAsObject())
    }
    stmt.free()
    return rows
  } else {
    const result = stmt.run(params)
    stmt.free()
    saveDatabase()
    return result
  }
}

function getOne(sql, params = []) {
  const rows = query(sql, params)
  return rows.length > 0 ? rows[0] : null
}

const queries = {
  trackVisit(visitorId, data) {
    const existing = getOne('SELECT id, visit_count FROM visitors WHERE visitor_id = ?', [visitorId])
    if (existing) {
      query(`
        UPDATE visitors SET
          last_visit = datetime('now'),
          visit_count = visit_count + 1,
          page = ?,
          referrer = COALESCE(?, referrer),
          language = COALESCE(?, language),
          screen_width = COALESCE(?, screen_width),
          screen_height = COALESCE(?, screen_height)
        WHERE visitor_id = ?
      `, [data.page, data.referrer, data.language, data.screenWidth, data.screenHeight, visitorId])
    } else {
      query(`
        INSERT INTO visitors (visitor_id, ip, user_agent, browser, browser_version, os, device, page, referrer, language, screen_width, screen_height)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [visitorId, data.ip, data.userAgent, data.browser, data.browserVersion, data.os, data.device, data.page, data.referrer, data.language, data.screenWidth, data.screenHeight])
    }
  },

  trackPageView(visitorId, page, title, sessionId) {
    query(`
      INSERT INTO page_views (visitor_id, page, title, session_id)
      VALUES (?, ?, ?, ?)
    `, [visitorId, page, title, sessionId])
  },

  createSession(sessionId, visitorId) {
    query(`
      INSERT OR IGNORE INTO sessions (session_id, visitor_id)
      VALUES (?, ?)
    `, [sessionId, visitorId])
  },

  updateSession(sessionId) {
    query(`
      UPDATE sessions SET
        end_time = datetime('now'),
        pages_viewed = pages_viewed + 1
      WHERE session_id = ?
    `, [sessionId])
  },

  trackEvent(visitorId, eventType, eventData, page) {
    query(`
      INSERT INTO events (visitor_id, event_type, event_data, page)
      VALUES (?, ?, ?, ?)
    `, [visitorId, eventType, JSON.stringify(eventData), page])
  },

  saveFeedback(name, email, subject, message, page) {
    query(`
      INSERT INTO feedback (name, email, subject, message, page)
      VALUES (?, ?, ?, ?, ?)
    `, [name, email, subject, message, page])
  },

  getTotalVisitors() {
    return getOne('SELECT COUNT(*) as total FROM visitors')
  },

  getVisitorsToday() {
    return getOne("SELECT COUNT(*) as total FROM visitors WHERE date(last_visit) = date('now')")
  },

  getTotalPageViews() {
    return getOne('SELECT COUNT(*) as total FROM page_views')
  },

  getPageViewsToday() {
    return getOne("SELECT COUNT(*) as total FROM page_views WHERE date(timestamp) = date('now')")
  },

  getPopularPages(limit = 10) {
    return query(`
      SELECT page, COUNT(*) as views
      FROM page_views
      GROUP BY page
      ORDER BY views DESC
      LIMIT ?
    `, [limit])
  },

  getVisitorsOverTime(days = 30) {
    return query(`
      SELECT date(last_visit) as date, COUNT(*) as visitors
      FROM visitors
      WHERE last_visit >= datetime('now', ?)
      GROUP BY date(last_visit)
      ORDER BY date ASC
    `, [`-${days} days`])
  },

  getPageViewsOverTime(days = 30) {
    return query(`
      SELECT date(timestamp) as date, COUNT(*) as views
      FROM page_views
      WHERE timestamp >= datetime('now', ?)
      GROUP BY date(timestamp)
      ORDER BY date ASC
    `, [`-${days} days`])
  },

  getDeviceBreakdown() {
    return query(`
      SELECT device, COUNT(*) as count
      FROM visitors
      WHERE device IS NOT NULL
      GROUP BY device
      ORDER BY count DESC
    `)
  },

  getBrowserBreakdown() {
    return query(`
      SELECT browser, COUNT(*) as count
      FROM visitors
      WHERE browser IS NOT NULL
      GROUP BY browser
      ORDER BY count DESC
    `)
  },

  getOSBreakdown() {
    return query(`
      SELECT os, COUNT(*) as count
      FROM visitors
      WHERE os IS NOT NULL
      GROUP BY os
      ORDER BY count DESC
    `)
  },

  getRecentVisits(limit = 20) {
    return query(`
      SELECT v.visitor_id, v.page, v.browser, v.device, v.last_visit, v.visit_count
      FROM visitors v
      ORDER BY v.last_visit DESC
      LIMIT ?
    `, [limit])
  },

  getActiveSessions(minutes = 5) {
    return getOne(`
      SELECT COUNT(*) as active FROM sessions
      WHERE end_time >= datetime('now', ?)
    `, [`-${minutes} minutes`])
  },

  getEventsToday() {
    return query(`
      SELECT event_type, COUNT(*) as count
      FROM events
      WHERE date(timestamp) = date('now')
      GROUP BY event_type
    `)
  },

  getFeedbackCount() {
    return getOne('SELECT COUNT(*) as total FROM feedback')
  },

  setEmailReport(recipient, reportType) {
    const existing = getOne('SELECT id FROM email_reports WHERE recipient = ?', [recipient])
    if (existing) {
      query('UPDATE email_reports SET report_type = ?, enabled = 1 WHERE recipient = ?', [reportType, recipient])
    } else {
      query('INSERT INTO email_reports (recipient, report_type) VALUES (?, ?)', [recipient, reportType])
    }
  },

  getEmailReports() {
    return query('SELECT * FROM email_reports WHERE enabled = 1')
  },

  updateLastSent(id) {
    query("UPDATE email_reports SET last_sent = datetime('now') WHERE id = ?", [id])
  },

  unsubscribe(recipient) {
    query('UPDATE email_reports SET enabled = 0 WHERE recipient = ?', [recipient])
  },

  getAnalyticsSnapshot() {
    return {
      totalVisitors: this.getTotalVisitors().total,
      visitorsToday: this.getVisitorsToday().total,
      totalPageViews: this.getTotalPageViews().total,
      pageViewsToday: this.getPageViewsToday().total,
      popularPages: this.getPopularPages(10),
      deviceBreakdown: this.getDeviceBreakdown(),
      browserBreakdown: this.getBrowserBreakdown(),
      recentVisits: this.getRecentVisits(5),
      activeSessions: this.getActiveSessions().active,
      eventsToday: this.getEventsToday(),
      feedbackCount: this.getFeedbackCount().total,
      viewsOverTime: this.getPageViewsOverTime(7),
      visitorsOverTime: this.getVisitorsOverTime(7)
    }
  }
}

module.exports = { initDatabase, queries }
