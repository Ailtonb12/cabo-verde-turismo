// ===================== NOVOS DADOS =====================
const carrosData = [
  { id: 1, nome: 'Suzuki Jimny', categoria: 'suv', preco: 5500, imagem: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=400&q=60', passageiros: 4, portas: 3, transmissao: 'Manual', combustivel: 'Gasolina', ar_condicionado: true, local: 'Praia', slug: 'suzuki-jimny', descricao: 'Perfeito para explorar trilhos e montanhas de Cabo Verde.' },
  { id: 2, nome: 'Toyota Yaris', categoria: 'economico', preco: 3500, imagem: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=400&q=60', passageiros: 5, portas: 5, transmissao: 'Manual', combustivel: 'Gasolina', ar_condicionado: true, local: 'Sal', slug: 'toyota-yaris', descricao: 'Carro económico e fiável para o dia a dia.' },
  { id: 3, nome: 'Hyundai Tucson', categoria: 'suv', preco: 7500, imagem: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=60', passageiros: 5, portas: 5, transmissao: 'Automático', combustivel: 'Diesel', ar_condicionado: true, local: 'Praia', slug: 'hyundai-tucson', descricao: 'SUV espaçoso e confortável para toda a família.' },
  { id: 4, nome: 'Renault Clio', categoria: 'economico', preco: 3000, imagem: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=60', passageiros: 5, portas: 5, transmissao: 'Manual', combustivel: 'Gasolina', ar_condicionado: false, local: 'Sal', slug: 'renault-clio', descricao: 'Pequeno, prático e económico para a cidade.' },
  { id: 5, nome: 'Toyota HiAce', categoria: 'familiar', preco: 10000, imagem: 'https://images.unsplash.com/photo-1574826592739-b4a504d6b8b9?auto=format&fit=crop&w=400&q=60', passageiros: 12, portas: 4, transmissao: 'Manual', combustivel: 'Diesel', ar_condicionado: true, local: 'Santiago', slug: 'toyota-hiace', descricao: 'Ideal para grupos grandes e transfers.' },
  { id: 6, nome: 'Mitsubishi Pajero', categoria: 'suv', preco: 8500, imagem: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=60', passageiros: 7, portas: 5, transmissao: 'Automático', combustivel: 'Diesel', ar_condicionado: true, local: 'Boa Vista', slug: 'mitsubishi-pajero', descricao: '4x4 robusto para aventuras todo-o-terreno.' },
  { id: 7, nome: 'Fiat Panda 4x4', categoria: 'economico', preco: 4000, imagem: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=60', passageiros: 4, portas: 5, transmissao: 'Manual', combustivel: 'Gasolina', ar_condicionado: true, local: 'Fogo', slug: 'fiat-panda-4x4', descricao: 'Pequeno mas valente para estacas irregulares.' },
  { id: 8, nome: 'Kia Sportage', categoria: 'suv', preco: 7000, imagem: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=60', passageiros: 5, portas: 5, transmissao: 'Automático', combustivel: 'Gasolina', ar_condicionado: true, local: 'São Vicente', slug: 'kia-sportage', descricao: 'SUV moderno e elegante para qualquer ocasião.' },
]

const experienciasData = [
  { id: 1, nome: 'City Tour Praia Histórica', categoria: 'cultural', preco: 2500, imagem: 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=400&q=60', duracao: '4h', participantes: 10, guia: 'Sim', descricao: 'Descubra a história da capital, Cidade Velha e o Planalto Central.', slug: 'city-tour-praia' },
  { id: 2, nome: 'Mergulho no Sal', categoria: 'aventura', preco: 4500, imagem: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=60', duracao: '3h', participantes: 8, guia: 'Sim', descricao: 'Explore os recifes de coral e nade com tartarugas marinhas.', slug: 'mergulho-sal' },
  { id: 3, nome: 'Trekking Pico do Fogo', categoria: 'aventura', preco: 6000, imagem: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60', duracao: '8h', participantes: 6, guia: 'Sim', descricao: 'Suba ao ponto mais alto de Cabo Verde (2829m) numa experiência única.', slug: 'trekking-pico-fogo' },
  { id: 4, nome: 'Passeio de Catamarã', categoria: 'natureza', preco: 3500, imagem: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=60', duracao: '5h', participantes: 12, guia: 'Sim', descricao: 'Navegue pelas águas cristalinas com snorkeling e almoço a bordo.', slug: 'catamara' },
  { id: 5, nome: 'Gastronomia Cabo-verdiana', categoria: 'gastronomia', preco: 2200, imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=60', duracao: '3h', participantes: 15, guia: 'Sim', descricao: 'Aprenda a cozinhar pratos típicos como cachupa e pastéis de peixe.', slug: 'gastronomia' },
  { id: 6, nome: 'Observação de Tartarugas', categoria: 'natureza', preco: 3000, imagem: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=400&q=60', duracao: '4h', participantes: 8, guia: 'Sim', descricao: 'Testemunhe a desova das tartarugas marinhas na Boa Vista.', slug: 'tartarugas' },
  { id: 7, nome: 'Cultura Mindelo', categoria: 'cultural', preco: 2000, imagem: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=60', duracao: '3h', participantes: 20, guia: 'Sim', descricao: 'Música morna ao vivo, arquitetura colonial e a alma de São Vicente.', slug: 'mindelo-cultural' },
  { id: 8, nome: 'Caminhada Vale do Paúl', categoria: 'natureza', preco: 3500, imagem: 'https://images.unsplash.com/photo-1715341762945-d053d5d76c55?auto=format&fit=crop&w=400&q=60', duracao: '6h', participantes: 8, guia: 'Sim', descricao: 'Trekking pelo vale mais verde de Cabo Verde com plantações de café.', slug: 'vale-paul' },
]

// ===================== ADSENSE HELPER =====================
function pushAds() {
  try { (adsbygoogle = window.adsbygoogle || []).push({}) } catch (e) {}
}

// ===================== I18N WRAPPER =====================
function __(key, params) {
  if (window.i18n && window.i18n.t) return window.i18n.t(key, params)
  const map = {
    'nav.home': 'Início', 'nav.ilhas': 'Ilhas', 'nav.destinos': 'Destinos',
    'nav.voos': 'Voos', 'nav.carros': 'Carros', 'nav.experiencias': 'Experiências',
    'nav.ofertas': 'Ofertas', 'nav.contacto': 'Contacto', 'nav.favoritos': 'Favoritos'
  }
  let val = map[key] || key
  if (params) val = val.replace(/\{\{(\w+)\}\}/g, (_, k) => params[k] ?? '')
  return val
}

// ===================== CARROS PAGE =====================
function renderCarros() {
  const container = document.getElementById('carrosContainer')
  if (!container || container.dataset.rendered) return
  container.dataset.rendered = 'true'

  let filtroCategoria = 'todos'

  function render() {
    const filtered = filtroCategoria === 'todos'
      ? carrosData
      : carrosData.filter(c => c.categoria === filtroCategoria)

    container.innerHTML = `
      <div class="carros-filtros">
        <button class="carro-filtro-btn ${filtroCategoria === 'todos' ? 'active' : ''}" data-cat="todos">${__('carros.todos')}</button>
        <button class="carro-filtro-btn ${filtroCategoria === 'economico' ? 'active' : ''}" data-cat="economico">${__('carros.economico')}</button>
        <button class="carro-filtro-btn ${filtroCategoria === 'suv' ? 'active' : ''}" data-cat="suv">${__('carros.suv')}</button>
        <button class="carro-filtro-btn ${filtroCategoria === 'familiar' ? 'active' : ''}" data-cat="familiar">${__('carros.familiar')}</button>
        <span class="carros-count">${filtered.length} ${__('carros.disponiveis')}</span>
      </div>
      <div class="carros-grid">
        ${filtered.map(c => `
          <div class="carro-card" data-id="${c.id}">
            <div class="carro-card-img">
              <img src="${c.imagem}" alt="${c.nome}" loading="lazy">
              <span class="carro-categoria-tag ${c.categoria}">${c.categoria}</span>
            </div>
            <div class="carro-card-body">
              <h3>${c.nome}</h3>
              <p>${c.descricao}</p>
              <div class="carro-specs">
                <span>🚗 ${c.transmissao}</span>
                <span>⛽ ${c.combustivel}</span>
                <span>👥 ${c.passageiros} ${__('carros.passageiros')}</span>
                ${c.ar_condicionado ? '<span>❄️ AC</span>' : ''}
              </div>
              <div class="carro-card-footer">
                <div class="carro-preco">${c.preco.toLocaleString('pt-PT')} <span>${__('carros.cve')}${__('carros.por_dia')}</span></div>
                <button class="carro-reservar-btn" data-id="${c.id}">${__('carros.reservar')}</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `

    container.querySelectorAll('.carro-filtro-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filtroCategoria = btn.dataset.cat
        render()
      })
    })

    container.querySelectorAll('.carro-reservar-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const id = parseInt(btn.dataset.id)
        const carro = carrosData.find(c => c.id === id)
        if (carro) {
          alert(`🔒 Sistema de pagamento:\n\nCarro: ${carro.nome}\nPreço: ${carro.preco.toLocaleString('pt-PT')} CVE/dia\n\n💰 Configurar chaves Stripe/PayPal:\nAbra script-features.js e edite:\n- VITE_STRIPE_PUBLIC_KEY\n- PAYPAL_CLIENT_ID\n\nPara processar pagamentos reais, adicione as suas chaves de API.`)
        }
      })
    })
  }

  render()
  pushAds()
}

// ===================== EXPERIENCIAS PAGE =====================
function renderExperiencias() {
  const container = document.getElementById('experienciasContainer')
  if (!container || container.dataset.rendered) return
  container.dataset.rendered = 'true'

  let filtroCat = 'todas'
  let filtroPreco = 10000

  function render() {
    let filtered = experienciasData
    if (filtroCat !== 'todas') filtered = filtered.filter(e => e.categoria === filtroCat)
    filtered = filtered.filter(e => e.preco <= filtroPreco)

    container.innerHTML = `
      <div class="exp-filtros">
        <div class="exp-filtros-cat">
          <button class="exp-filtro-btn ${filtroCat === 'todas' ? 'active' : ''}" data-cat="todas">${__('carros.todos')}</button>
          <button class="exp-filtro-btn ${filtroCat === 'aventura' ? 'active' : ''}" data-cat="aventura">${__('experiencias.aventura')}</button>
          <button class="exp-filtro-btn ${filtroCat === 'cultural' ? 'active' : ''}" data-cat="cultural">${__('experiencias.cultural')}</button>
          <button class="exp-filtro-btn ${filtroCat === 'natureza' ? 'active' : ''}" data-cat="natureza">${__('experiencias.natureza')}</button>
          <button class="exp-filtro-btn ${filtroCat === 'gastronomia' ? 'active' : ''}" data-cat="gastronomia">${__('experiencias.gastronomia')}</button>
        </div>
        <div class="exp-filtro-preco">
          <label>${__('general.search')}: até ${filtroPreco.toLocaleString('pt-PT')} CVE</label>
          <input type="range" min="1500" max="10000" step="500" value="${filtroPreco}" class="exp-preco-range">
        </div>
      </div>
      <div class="exp-grid">
        ${filtered.map(e => `
          <div class="exp-card" data-id="${e.id}">
            <div class="exp-card-img">
              <img src="${e.imagem}" alt="${e.nome}" loading="lazy">
              <span class="exp-categoria-tag ${e.categoria}">${__(`experiencias.${e.categoria}`)}</span>
            </div>
            <div class="exp-card-body">
              <h3>${e.nome}</h3>
              <p>${e.descricao}</p>
              <div class="exp-specs">
                <span>⏱️ ${e.duracao}</span>
                <span>👥 ${e.participantes} ${__('experiencias.participantes')}</span>
                <span>🎯 ${__('experiencias.guia')}: ${e.guia}</span>
              </div>
              <div class="exp-card-footer">
                <div class="exp-preco">${e.preco.toLocaleString('pt-PT')} <span>${__('carros.cve')}${__('experiencias.por_pessoa')}</span></div>
                <button class="exp-reservar-btn" data-id="${e.id}">${__('experiencias.reservar')}</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `

    container.querySelectorAll('.exp-filtro-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filtroCat = btn.dataset.cat
        render()
      })
    })

    const range = container.querySelector('.exp-preco-range')
    if (range) {
      range.addEventListener('input', () => {
        filtroPreco = parseInt(range.value)
        render()
      })
    }

    container.querySelectorAll('.exp-reservar-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const id = parseInt(btn.dataset.id)
        const exp = experienciasData.find(e => e.id === id)
        if (exp) {
          alert(`🔒 Sistema de pagamento:\n\nExperiência: ${exp.nome}\nPreço: ${exp.preco.toLocaleString('pt-PT')} CVE/pessoa\n\n💰 Para configurar pagamentos reais:\n- Stripe: editar VITE_STRIPE_PUBLIC_KEY\n- PayPal: editar PAYPAL_CLIENT_ID\n\nEstes valores estão no script-features.js`)
        }
      })
    })
  }

  render()
  pushAds()
}

// ===================== FAVORITOS SYSTEM =====================
const FavoritosAPI = {
  BASE: 'https://welovepalop.com/api/favoritos.php',

  async listar(email) {
    try {
      const r = await fetch(`${this.BASE}?action=listar&email=${encodeURIComponent(email)}`)
      const d = await r.json()
      return d.success ? d.data : []
    } catch { return [] }
  },

  async adicionar(email, tipo, item) {
    try {
      const r = await fetch(`${this.BASE}?action=adicionar&email=${encodeURIComponent(email)}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo, item_id: item.id, item_data: item })
      })
      return (await r.json()).success
    } catch { return false }
  },

  async remover(email, tipo, itemId) {
    try {
      const r = await fetch(`${this.BASE}?action=remover&email=${encodeURIComponent(email)}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo, item_id: itemId })
      })
      return (await r.json()).success
    } catch { return false }
  }
}

let favoritosCache = { alojamentos: [], carros: [], experiencias: [] }
async function carregarFavoritos() {
  const user = JSON.parse(localStorage.getItem('cv_user') || 'null')
  if (!user?.email) return
  const data = await FavoritosAPI.listar(user.email)
  favoritosCache = { alojamentos: [], carros: [], experiencias: [] }
  data.forEach(item => {
    const key = item.tipo_item + 's'
    if (favoritosCache[key]) favoritosCache[key].push(item)
  })
  atualizarBadgeFavoritos()
}

function atualizarBadgeFavoritos() {
  const total = Object.values(favoritosCache).reduce((a, b) => a + b.length, 0)
  let badge = document.querySelector('.favoritos-badge')
  if (!badge) {
    const userBtn = document.getElementById('userBtn')
    if (!userBtn) return
    badge = document.createElement('span')
    badge.className = 'favoritos-badge'
    userBtn.parentElement.appendChild(badge)
  }
  badge.textContent = total
  badge.style.display = total > 0 ? 'flex' : 'none'
}

// ===================== FAVORITOS PAGE =====================
function renderFavoritos() {
  const container = document.getElementById('favoritosContainer')
  if (!container) return
  container.dataset.rendered = 'true'

  const user = JSON.parse(localStorage.getItem('cv_user') || 'null')
  if (!user) {
    container.innerHTML = `<div class="fav-empty"><h3>${__('favoritos.login_required')}</h3></div>`
    return
  }

  const cats = ['alojamentos', 'carros', 'experiencias']
  let activeCat = 'alojamentos'

  function render() {
    const items = favoritosCache[activeCat] || []
    container.innerHTML = `
      <div class="fav-tabs">
        ${cats.map(c => `<button class="fav-tab ${c === activeCat ? 'active' : ''}" data-cat="${c}">${__(`nav.${c}`)} (${(favoritosCache[c]||[]).length})</button>`).join('')}
      </div>
      <div class="fav-grid">
        ${items.length === 0
          ? `<div class="fav-empty"><p>${__('favoritos.sem_favoritos', { categoria: __(`nav.${activeCat}`) })}</p></div>`
          : items.map(item => `
            <div class="fav-item">
              <img src="${item.imagem_url || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200'}" alt="${item.titulo}">
              <div class="fav-item-info">
                <h4>${item.titulo}</h4>
                <p>${item.localizacao || __('general.cabo_verde')}</p>
              </div>
              <button class="fav-remove" data-id="${item.id}" data-tipo="${activeCat}">✕</button>
            </div>
          `).join('')}
      </div>
    `

    container.querySelectorAll('.fav-tab').forEach(tab => {
      tab.addEventListener('click', () => { activeCat = tab.dataset.cat; render() })
    })
    container.querySelectorAll('.fav-remove').forEach(btn => {
      btn.addEventListener('click', async () => {
        const user2 = JSON.parse(localStorage.getItem('cv_user') || 'null')
        if (user2?.email) {
          await FavoritosAPI.remover(user2.email, btn.dataset.tipo, parseInt(btn.dataset.id))
          await carregarFavoritos()
          render()
          pushAds()
        }
      })
    })
  }
  render()
  pushAds()
}

// ===================== ANUNCIAR ALOJAMENTO =====================
function renderAnunciar() {
  const container = document.getElementById('anunciarContainer')
  if (!container || container.dataset.rendered) return
  container.dataset.rendered = 'true'

  container.innerHTML = `
    <div class="anunciar-form">
      <h2>${__('alojamento_registo.title')}</h2>
      <p>${__('alojamento_registo.subtitle')}</p>
      <div class="anunciar-field">
        <label>${__('alojamento_registo.nome')}</label>
        <input type="text" id="anunciarNome" placeholder="Ex: Villa Monte Verde">
      </div>
      <div class="anunciar-field">
        <label>${__('alojamento_registo.tipo')}</label>
        <select id="anunciarTipo">
          <option value="apartamento">${__('alojamento_registo.apartamento')}</option>
          <option value="villa">${__('alojamento_registo.villa')}</option>
          <option value="guesthouse">${__('alojamento_registo.guesthouse')}</option>
          <option value="hotel">${__('alojamento_registo.hotel')}</option>
          <option value="quarto">${__('alojamento_registo.quarto')}</option>
        </select>
      </div>
      <div class="anunciar-field">
        <label>${__('alojamento_registo.localizacao')}</label>
        <select id="anunciarLocal">
          <option value="">Selecione</option>
          <option>Sal</option><option>Boa Vista</option><option>Santiago</option>
          <option>Fogo</option><option>Santo Antão</option><option>São Vicente</option>
          <option>Brava</option><option>Maio</option><option>São Nicolau</option><option>Santa Luzia</option>
        </select>
      </div>
      <div class="anunciar-field">
        <label>${__('alojamento_registo.descricao')}</label>
        <textarea id="anunciarDesc" rows="4" placeholder="Descreva o seu espaço..."></textarea>
      </div>
      <div class="anunciar-field">
        <label>${__('alojamento_registo.preco')}</label>
        <input type="number" id="anunciarPreco" placeholder="5000" min="500">
        <span class="anunciar-moeda">CVE/noite</span>
      </div>
      <div class="anunciar-field">
        <label>${__('alojamento_registo.fotos')}</label>
        <input type="text" id="anunciarFotos" placeholder="URL da imagem principal">
      </div>
      <button class="anunciar-submit" id="anunciarSubmit">${__('alojamento_registo.enviar')}</button>
    </div>
  `

  document.getElementById('anunciarSubmit')?.addEventListener('click', () => {
    const nome = document.getElementById('anunciarNome')?.value?.trim()
    if (!nome) { alert('Insira o nome do espaço'); return }
    alert(`✅ ${__('alojamento_registo.success')}\n\n${nome} foi registado com sucesso!\nNota: Conecte-se a uma API backend para armazenamento permanente.`)
    container.dataset.rendered = ''
    container.innerHTML = ''
  })
  pushAds()
}
function renderMapa(containerId, points) {
  const container = document.getElementById(containerId)
  if (!container || container.dataset.rendered) return
  container.dataset.rendered = 'true'

  const mapboxToken = localStorage.getItem('cv_mapbox_token') || 'pk.seu_token_mapbox_aqui'

  container.innerHTML = `
    <div class="mapa-config-bar">
      <input type="text" id="mapboxTokenInput" placeholder="Cole o seu Mapbox Public Token" value="${mapboxToken}">
      <button id="mapboxTokenSave">${__('general.save')}</button>
    </div>
    <div class="mapa-container" id="mapaContainer">
      <div class="mapa-placeholder">
        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
        <p>Configure o seu token do Mapbox para ver o mapa interativo.</p>
        <p class="mapa-hint">Obtenha um token grátis em <strong>mapbox.com</strong></p>
        <div class="mapa-islands">
          ${(points || ['Sal', 'Boa Vista', 'Santiago', 'Fogo', 'Santo Antão', 'São Vicente', 'Brava', 'Maio', 'São Nicolau', 'Santa Luzia']).map(nome => `
            <span class="mapa-island-marker">📍 ${nome}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `

  document.getElementById('mapboxTokenSave')?.addEventListener('click', () => {
    const token = document.getElementById('mapboxTokenInput')?.value?.trim()
    if (token) {
      localStorage.setItem('cv_mapbox_token', token)
      alert('Token Mapbox guardado! Atualize a página para ver o mapa.')
    }
  })
}

// ===================== FOOTER COMPLETO =====================
function renderFooter() {
  const existing = document.querySelector('.cv-full-footer')
  if (existing) existing.remove()

  const footer = document.createElement('footer')
  footer.className = 'cv-full-footer'
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>Cabo <span class="footer-destaque">Verde</span></h3>
          <p>${__('footer.description')}</p>
        </div>
        <div class="footer-links">
          <h4>${__('footer.explore')}</h4>
          <a href="#" onclick="window.navigateTo('home')">${__('nav.home')}</a>
          <a href="#" onclick="window.navigateTo('ilhas')">${__('nav.ilhas')}</a>
          <a href="#" onclick="window.navigateTo('carros')">${__('nav.carros')}</a>
          <a href="#" onclick="window.navigateTo('experiencias')">${__('nav.experiencias')}</a>
        </div>
        <div class="footer-contact">
          <h4>${__('footer.contact')}</h4>
          <p>📍 ${__('contacto.morada')}</p>
          <p>✉️ ${__('contacto.email')}</p>
          <p>📞 ${__('contacto.telefone')}</p>
        </div>
        <div class="footer-social">
          <h4>${__('footer.follow')}</h4>
          <div class="footer-social-icons">
            <a href="https://instagram.com" target="_blank" class="footer-social-icon" title="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" class="footer-social-icon" title="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" class="footer-social-icon" title="YouTube">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98l5.75 3.02z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Cabo Verde Turismo. ${__('footer.rights')}</p>
      </div>
    </div>
  `

  document.body.appendChild(footer)

  // Add padding to page-content so footer doesn't overlap content
  document.querySelectorAll('.page-content').forEach(el => {
    el.style.paddingBottom = '160px'
  })
}

// ===================== BARRA DE IDIOMAS NAV =====================
function addLangSelector() {
  const navRight = document.querySelector('.nav-right')
  if (!navRight || document.querySelector('.nav-lang-selector')) return

  const selector = document.createElement('div')
  selector.className = 'nav-lang-selector'
  selector.innerHTML = `
    <button class="nav-lang-current">${i18n ? i18n.currentLang?.toUpperCase() : 'PT'} ▾</button>
    <div class="nav-lang-dropdown">
      <button data-lang="pt">🇵🇹 Português</button>
      <button data-lang="en">🇬🇧 English</button>
      <button data-lang="fr">🇫🇷 Français</button>
      <button data-lang="es">🇪🇸 Español</button>
      <button data-lang="de">🇩🇪 Deutsch</button>
      <button data-lang="it">🇮🇹 Italiano</button>
      <button data-lang="cv">🇨🇻 Cabo-verdiano</button>
    </div>
  `

  const currentBtn = selector.querySelector('.nav-lang-current')
  currentBtn.addEventListener('click', () => {
    selector.classList.toggle('open')
  })

  selector.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.i18n) {
        window.i18n.setLang(btn.dataset.lang)
        currentBtn.textContent = btn.dataset.lang.toUpperCase() + ' ▾'
      }
      selector.classList.remove('open')
    })
  })

  document.addEventListener('click', (e) => {
    if (!selector.contains(e.target)) selector.classList.remove('open')
  })

  const searchBtn = document.getElementById('searchBtn')
  if (searchBtn) navRight.insertBefore(selector, searchBtn)
}

// ===================== RECOVERY PASSWORD =====================
function addRecoveryToUserModal() {
  const loginForm = document.getElementById('loginForm')
  if (!loginForm || document.getElementById('recoveryLink')) return

  const recoveryLink = document.createElement('p')
  recoveryLink.id = 'recoveryLink'
  recoveryLink.style.cssText = 'text-align:center;margin-top:8px;font-size:12px;color:#ecad29;cursor:pointer;text-decoration:underline'
  recoveryLink.textContent = __('user.recover_password')
  recoveryLink.addEventListener('click', () => {
    const email = prompt(__('user.recover_email'))
    if (email && email.includes('@')) {
      alert(`🔐 ${__('user.code_sent', { email })}`)
    }
  })
  loginForm.appendChild(recoveryLink)

  const registerForm = document.getElementById('registerForm')
  if (registerForm) {
    const smsRecovery = document.createElement('p')
    smsRecovery.style.cssText = 'text-align:center;margin-top:8px;font-size:11px;color:#ecad29;cursor:pointer;text-decoration:underline'
    smsRecovery.textContent = __('user.recover_sms')
    smsRecovery.addEventListener('click', () => {
      const phone = prompt(__('user.sms_recovery_info'))
      if (phone) {
        alert(`📱 Código SMS enviado para ${phone}!`)
      }
    })
    registerForm.appendChild(smsRecovery)
  }
}

// ===================== GOOGLE LOGIN BUTTON =====================
function addGoogleLogin() {
  const userOverlay = document.getElementById('userOverlay')
  if (!userOverlay || document.querySelector('.cv-google-btn')) return

  const forms = userOverlay.querySelectorAll('.user-tab-content')
  forms.forEach(form => {
    const orDiv = document.createElement('div')
    orDiv.style.cssText = 'display:flex;align-items:center;gap:12px;margin:12px 0;color:#FFFFFF88;font-size:12px'
    orDiv.innerHTML = `<hr style="flex:1;border-color:#FFFFFF22"><span>${__('user.or')}</span><hr style="flex:1;border-color:#FFFFFF22">`
    form.appendChild(orDiv)

    const googleBtn = document.createElement('button')
    googleBtn.className = 'cv-google-btn'
    googleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
      <span>${__('user.google')}</span>
    `
    form.appendChild(googleBtn)

    googleBtn.addEventListener('click', () => {
      const clientId = '925230978662-dh81pj9ktrsp5q706uk0ks4214eql1kh.apps.googleusercontent.com'
      alert(`🔐 Google Login\n\nPara configurar:\n1. Vá a https://console.cloud.google.com\n2. Crie um OAuth 2.0 Client ID\n3. Substitua o clientId no ficheiro script-features.js\n\nClient ID atual: ${clientId}`)
    })
  })
}

// ===================== USER ROLES =====================
function addUserRolesToRegister() {
  const registerForm = document.getElementById('registerForm')
  if (!registerForm || document.querySelector('.cv-roles-selector')) return

  const rolesDiv = document.createElement('div')
  rolesDiv.className = 'cv-roles-selector'
  rolesDiv.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px'
  rolesDiv.innerHTML = `
    <label style="font-size:11px;color:#FFFFFFAA;grid-column:1/-1;margin-bottom:4px">Tipo de conta:</label>
    ${['hospede', 'anfitrion', 'guia', 'proprietario'].map(role => `
      <label class="cv-role-option" data-role="${role}" style="display:flex;align-items:center;gap:6px;padding:8px 10px;border:1px solid #FFFFFF22;border-radius:8px;cursor:pointer;font-size:12px;transition:all 0.3s">
        <input type="checkbox" ${role === 'hospede' ? 'checked disabled' : ''} style="accent-color:#ecad29">
        <span>${role === 'hospede' ? '🏠 Hóspede' : role === 'anfitrion' ? '🏡 Anfitrião' : role === 'guia' ? '🗺️ Guia' : '🚗 Proprietário'}</span>
      </label>
    `).join('')}
  `
  registerForm.insertBefore(rolesDiv, registerForm.firstChild)

  rolesDiv.querySelectorAll('.cv-role-option').forEach(label => {
    label.addEventListener('click', () => {
      const cb = label.querySelector('input[type="checkbox"]')
      if (!cb.disabled) {
        cb.checked = !cb.checked
        label.style.borderColor = cb.checked ? '#ecad29' : '#FFFFFF22'
        label.style.background = cb.checked ? 'rgba(236,173,41,0.1)' : 'transparent'
      }
    })
  })
}

// ===================== EXTEND NAVIGATE =====================
function initFeaturePages() {
  const origNavigate = window.navigateTo
  if (!origNavigate) return

  const pages = {
    carros: {
      html: `
        <div class="page-bg" style="background-image:url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80')"></div>
        <div class="page-overlay"></div>
        <div class="page-content">
          <h1 class="page-title">${__('carros.title')}</h1>
          <p class="page-subtitle">${__('carros.subtitle')}</p>
          <div id="carrosContainer"></div>
          <div id="mapaCarros"></div>
          <div class="ad-container ad-horizontal" style="margin-top:24px">
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4375557451351822" data-ad-slot="8501285043" data-ad-format="auto" data-full-width-responsive="true"></ins>
          </div>
        </div>
      `
    },
    experiencias: {
      html: `
        <div class="page-bg" style="background-image:url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80')"></div>
        <div class="page-overlay"></div>
        <div class="page-content">
          <h1 class="page-title">${__('experiencias.title')}</h1>
          <p class="page-subtitle">${__('experiencias.subtitle')}</p>
          <div id="experienciasContainer"></div>
          <div id="mapaExperiencias"></div>
          <div class="ad-container ad-horizontal" style="margin-top:24px">
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4375557451351822" data-ad-slot="8501285043" data-ad-format="auto" data-full-width-responsive="true"></ins>
          </div>
        </div>
      `
    }
  }

  Object.entries(pages).forEach(([id, config]) => {
    if (!document.getElementById(`page-${id}`)) {
      const section = document.createElement('div')
      section.className = `page ${id}-page`
      section.id = `page-${id}`
      section.innerHTML = config.html
      document.querySelector('.page.contacto-page')?.after(section)
    }
  })

  // Add favoritos page
  if (!document.getElementById('page-favoritos')) {
    const favSection = document.createElement('div')
    favSection.className = 'page favoritos-page'
    favSection.id = 'page-favoritos'
    favSection.innerHTML = `
      <div class="page-bg" style="background-image:url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1920&q=80')"></div>
      <div class="page-overlay"></div>
      <div class="page-content">
        <h1 class="page-title">${__('favoritos.title')}</h1>
        <p class="page-subtitle">${__('favoritos.empty')}</p>
        <div id="favoritosContainer"></div>
        <div class="ad-container ad-horizontal" style="margin-top:24px">
          <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4375557451351822" data-ad-slot="8501285043" data-ad-format="auto" data-full-width-responsive="true"></ins>
        </div>
      </div>
    `
    document.querySelector('.page.contacto-page')?.after(favSection)
  }

  // Add anunciar page
  if (!document.getElementById('page-anunciar')) {
    const anuncSection = document.createElement('div')
    anuncSection.className = 'page anunciar-page'
    anuncSection.id = 'page-anunciar'
    anuncSection.innerHTML = `
      <div class="page-bg" style="background-image:url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80')"></div>
      <div class="page-overlay"></div>
      <div class="page-content">
        <div id="anunciarContainer"></div>
      </div>
    `
    document.querySelector('.page.contacto-page')?.after(anuncSection)
  }
}

// ===================== STYLES INJECTION =====================
function injectFeatureStyles() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'style-features.css'
  document.head.appendChild(link)
}

// ===================== GOOGLE PAY STRIPE SETUP =====================
function setupPaymentConfig() {
  const config = {
    stripe: {
      publicKey: localStorage.getItem('cv_stripe_key') || 'pk_test_51Q2vbsBGBgdae3VE...',
      enabled: !!localStorage.getItem('cv_stripe_key')
    },
    paypal: {
      clientId: localStorage.getItem('cv_paypal_client_id') || 'AaB7TSBPAQOlgGPjvIo2epKQRL0ziLbirhHuJYl9S9_Kck5wZpACLZXLEOc1lBOEJ6GjjONXmk0FW6Gu',
      enabled: !!localStorage.getItem('cv_paypal_client_id')
    }
  }

  // Add config button in user modal
  const userOverlay = document.getElementById('userOverlay')
  if (userOverlay && !document.querySelector('.cv-payment-config')) {
    const configDiv = document.createElement('div')
    configDiv.className = 'cv-payment-config'
    configDiv.style.cssText = 'margin-top:16px;padding:12px;border:1px solid #FFFFFF22;border-radius:8px;text-align:left'
    configDiv.innerHTML = `
      <p style="font-size:11px;color:#ecad29;margin-bottom:8px;font-weight:700">💳 CONFIGURAR PAGAMENTOS</p>
      <div style="display:flex;flex-direction:column;gap:6px;font-size:12px">
        <label style="color:#FFFFFFAA">Stripe Public Key:</label>
        <input type="text" id="configStripeKey" placeholder="pk_test_..." value="${config.stripe.publicKey}" style="padding:6px 10px;border-radius:6px;border:1px solid #FFFFFF33;background:rgba(0,0,0,0.3);color:#fff;font-size:12px">
        <label style="color:#FFFFFFAA">PayPal Client ID:</label>
        <input type="text" id="configPaypalId" placeholder="AaB7TSBPAQO..." value="${config.paypal.clientId}" style="padding:6px 10px;border-radius:6px;border:1px solid #FFFFFF33;background:rgba(0,0,0,0.3);color:#fff;font-size:12px">
        <button id="configPaymentSave" style="margin-top:6px;padding:8px;border:none;border-radius:6px;background:#ecad29;color:#000;font-weight:700;cursor:pointer;font-size:12px">💾 Guardar Chaves</button>
        <p style="font-size:10px;color:#FFFFFF66;margin-top:4px">As chaves ficam guardadas no seu navegador. Obtenha-as em stripe.com e developer.paypal.com</p>
      </div>
    `
    userOverlay.querySelector('.user-modal')?.appendChild(configDiv)

    document.getElementById('configPaymentSave')?.addEventListener('click', () => {
      const stripeKey = document.getElementById('configStripeKey')?.value?.trim()
      const paypalId = document.getElementById('configPaypalId')?.value?.trim()
      if (stripeKey) localStorage.setItem('cv_stripe_key', stripeKey)
      if (paypalId) localStorage.setItem('cv_paypal_client_id', paypalId)
      alert('✅ Chaves de pagamento guardadas!')
    })
  }
}

// ===================== SEARCH WITH FILTERS =====================
function enhanceSearch() {
  const searchInput = document.getElementById('searchInput')
  const searchResults = document.getElementById('searchResults')
  if (!searchInput || !searchResults) return

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim()
    if (q.length < 2) { searchResults.classList.remove('show'); return }

    const allItems = [
      ...carrosData.map(c => ({ titulo: c.nome, desc: c.descricao, tipo: '🚗 Carro' })),
      ...experienciasData.map(e => ({ titulo: e.nome, desc: e.descricao, tipo: '🎯 Experiência' })),
    ]

    const results = allItems.filter(item =>
      item.titulo.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
    ).slice(0, 8)

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item" style="color:#FFFFFF88">Nenhum resultado encontrado.</div>'
    } else {
      searchResults.innerHTML = results.map(r => `
        <div class="search-result-item">
          <h4>${r.tipo} — ${r.titulo}</h4>
          <p>${r.desc.substring(0, 80)}...</p>
        </div>
      `).join('')
    }
    searchResults.classList.add('show')
  })
}

// ===================== INIT ALL FEATURES =====================
document.addEventListener('DOMContentLoaded', async () => {
  injectFeatureStyles()
  initFeaturePages()

  // Init i18n if available
  if (window.i18n && !window.i18n._inited) {
    window.i18n._inited = true
    try { window.i18n.init() } catch (e) { console.warn('i18n init error', e) }
  }

  addLangSelector()
  addRecoveryToUserModal()
  addGoogleLogin()
  addUserRolesToRegister()
  setupPaymentConfig()
  enhanceSearch()
  renderFooter()
  // Hide footer initially on home page
  const footerEl = document.querySelector('.cv-full-footer')
  if (footerEl) footerEl.classList.add('hidden')

  // Extend navigateTo to render feature pages + toggle footer
  const origNavigate = window.navigateTo
  if (origNavigate) {
    const newNavigate = function(pageId) {
      if (pageId === 'carros') {
        setTimeout(() => {
          renderCarros()
          renderMapa('mapaCarros', carrosData.map(c => c.local))
        }, 100)
      } else if (pageId === 'experiencias') {
        setTimeout(() => {
          renderExperiencias()
          renderMapa('mapaExperiencias', experienciasData.map(e => e.nome))
        }, 100)
      } else if (pageId === 'favoritos') {
        setTimeout(() => {
          carregarFavoritos().then(() => renderFavoritos())
        }, 100)
      } else if (pageId === 'anunciar') {
        setTimeout(() => renderAnunciar(), 100)
      } else if (pageId === 'analytics') {
        const user = JSON.parse(localStorage.getItem('cv_user') || 'null')
        if (!user || user.email !== 'aiiltonnsousa1990@gmail.com') {
          origNavigate('home')
          return
        }
        setTimeout(() => renderAnalyticsDashboard(), 100)
      }
      origNavigate(pageId)
      setTimeout(() => pushAds(), 200)
      // Show footer on all pages except home
      const footer = document.querySelector('.cv-full-footer')
      if (footer) {
        if (pageId === 'home') {
          footer.classList.add('hidden')
        } else {
          footer.classList.remove('hidden')
        }
      }
    }
    window.navigateTo = newNavigate
  }

  // Re-render when language changes
  if (window.i18n && window.i18n.onChange) {
    window.i18n.onChange(() => {
      // Update feature page titles (created by initFeaturePages)
      const feats = { carros: 'carros', experiencias: 'experiencias', favoritos: 'favoritos', anunciar: 'alojamento_registo', analytics: 'analytics' }
      Object.entries(feats).forEach(([pageId, key]) => {
        const page = document.getElementById(`page-${pageId}`)
        if (!page) return
        const title = page.querySelector('.page-title')
        const sub = page.querySelector('.page-subtitle')
        if (title) title.textContent = __(`${key}.title`)
        if (sub) sub.textContent = __(`${key}.subtitle`)
      })
      // Update nav lang selector
      const navLangCurrent = document.querySelector('.nav-lang-current')
      if (navLangCurrent && window.i18n) {
        navLangCurrent.textContent = window.i18n.currentLang.toUpperCase() + ' ▾'
      }
      // Update dynamically added UI text (recovery, google, roles, payment)
      const recoveryLink = document.getElementById('recoveryLink')
      if (recoveryLink) recoveryLink.textContent = __('user.recover_password')
      document.querySelectorAll('.cv-google-btn span').forEach(el => { el.textContent = __('user.google') })
      document.querySelectorAll('.cv-role-option span').forEach(el => {
        const role = el.closest('.cv-role-option')?.dataset.role
        if (role === 'hospede') el.textContent = '🏠 ' + __('user.login')
        else if (role === 'anfitrion') el.textContent = '🏡 Anfitrião'
        else if (role === 'guia') el.textContent = '🗺️ Guia'
        else if (role === 'proprietario') el.textContent = '🚗 Proprietário'
      })
      const paymentTitle = document.querySelector('.cv-payment-config p')
      if (paymentTitle) paymentTitle.textContent = '💳 ' + __('general.save').toUpperCase() + ' PAGAMENTOS'
      renderFooter()
      // Re-apply hidden state after footer re-render
      const activePageId = document.querySelector('.page.active')?.id?.replace('page-', '')
      const ft = document.querySelector('.cv-full-footer')
      if (ft) {
        if (activePageId === 'home' || !activePageId) ft.classList.add('hidden')
        else ft.classList.remove('hidden')
      }
      const activePage = document.querySelector('.page.active')
      if (activePage) {
        const id = activePage.id.replace('page-', '')
        // Clear rendered flags so re-render actually runs
        const containers = document.querySelectorAll('[data-rendered]')
        containers.forEach(el => delete el.dataset.rendered)
        if (id === 'carros') { renderCarros(); renderMapa('mapaCarros', carrosData.map(c => c.local)) }
        else if (id === 'experiencias') { renderExperiencias(); renderMapa('mapaExperiencias', experienciasData.map(e => e.nome)) }
        else if (id === 'favoritos') { carregarFavoritos().then(() => renderFavoritos()) }
        else if (id === 'analytics') { renderAnalyticsDashboard() }
      }
    })
  }

  // Add auth enhancement - save with roles
  const registerBtn = document.getElementById('registerBtn')
  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      const roles = ['hospede']
      document.querySelectorAll('.cv-role-option input[type="checkbox"]:checked').forEach(cb => {
        const role = cb.closest('.cv-role-option')?.dataset.role
        if (role && !roles.includes(role)) roles.push(role)
      })
      const user = JSON.parse(localStorage.getItem('cv_user') || '{}')
      user.roles = roles
      localStorage.setItem('cv_user', JSON.stringify(user))
    })
  }

  // Load user saved roles
  const savedUser = JSON.parse(localStorage.getItem('cv_user') || 'null')
  if (savedUser?.roles) {
    document.querySelectorAll('.cv-role-option').forEach(opt => {
      const role = opt.dataset.role
      const cb = opt.querySelector('input[type="checkbox"]')
      if (cb && savedUser.roles.includes(role)) {
        cb.checked = true
        opt.style.borderColor = '#ecad29'
        opt.style.background = 'rgba(236,173,41,0.1)'
      }
    })
  }

  // Add favorite button to home page
  const bookmarkBtns = document.querySelectorAll('.bookmark')
  bookmarkBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const user = JSON.parse(localStorage.getItem('cv_user') || 'null')
      if (!user?.email) { alert('Faça login para guardar favoritos!'); return }
      const activeIndex = order ? order[0] : 0
      const item = data[activeIndex]
      if (item) {
        await FavoritosAPI.adicionar(user.email, 'alojamento', {
          id: activeIndex,
          titulo: item.place + ' - ' + item.title + ' ' + item.title2,
          localizacao: item.place,
          imagem_url: item.image
        })
        await carregarFavoritos()
        alert('✅ Adicionado aos favoritos!')
      }
    })
  })

  // Load favorites on start
  carregarFavoritos()

  // ─── ANALYTICS AUTH GUARD ───
  function updateAnalyticsNavVisibility() {
    const user = JSON.parse(localStorage.getItem('cv_user') || 'null')
    const isOwner = user && user.email === 'aiiltonnsousa1990@gmail.com'
    document.querySelectorAll('[data-page="analytics"]').forEach(el => {
      el.style.display = isOwner ? '' : 'none'
    })
  }

  if (window.atualizarUIUser) {
    const origUI = window.atualizarUIUser
    window.atualizarUIUser = function(...args) {
      origUI(...args)
      updateAnalyticsNavVisibility()
    }
  }

  if (window.salvarSessao) {
    const origSalvar = window.salvarSessao
    window.salvarSessao = function(...args) {
      origSalvar(...args)
    }
  }

  if (window.terminarSessao) {
    const origTerminar = window.terminarSessao
    window.terminarSessao = function(...args) {
      origTerminar(...args)
    }
  }

  updateAnalyticsNavVisibility()

  console.log('✅ Features carregadas: Carros, Experiências, Favoritos, i18n, Mapas, Pagamentos, Roles, Reviews')
})
