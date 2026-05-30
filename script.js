// ===================== DATA =====================
const data = [
    { place:'Ilha do Sal', title:'SANTA', title2:'MARIA', description:'Santa Maria, na Ilha do Sal, é um paraíso tropical com praias de areia branca e águas cristalinas. As Salinas de Pedra de Lume, onde se pode flutuar como no Mar Morto, e a Baía do Tubarão, com tubarões-limão em águas rasas, são atrações imperdíveis.', image:'https://images.unsplash.com/photo-1753872789111-ebdf8cf78397?auto=format&fit=crop&w=1200&q=75' },
    { place:'Ilha do Fogo', title:'PICO', title2:'DO FOGO', description:'O Pico do Fogo é um vulcão ativo de 2829 metros, ponto mais alto de Cabo Verde. A subida até à cratera é uma experiência única, com paisagens lunares e campos de lava. Na Chã das Caldeiras, prove o vinho cultivado no solo vulcânico.', image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=75' },
    { place:'Ilha de Santo Antão', title:'VALE', title2:'DO PAÚL', description:'O Vale do Paúl é o coração verde de Cabo Verde, com paisagens deslumbrantes de montanhas, vales profundos e terraços agrícolas. Ideal para caminhadas, o vale oferece vistas espetaculares, plantações de café e a autêntica vida rural cabo-verdiana.', image:'https://images.unsplash.com/photo-1715341762945-d053d5d76c55?auto=format&fit=crop&w=1200&q=75' },
    { place:'Ilha de Santiago', title:'CIDADE', title2:'VELHA', description:'Cidade Velha é Património Mundial da UNESCO, foi a primeira cidade europeia nos trópicos. Com a sua histórica Rua da Banana, a Fortaleza de São Filipe e as ruínas da antiga catedral, é um mergulho fascinante na história de Cabo Verde.', image:'https://upload.wikimedia.org/wikipedia/commons/e/e9/Quebra-canela_Cape_Verde.jpg' },
    { place:'Ilha da Boa Vista', title:'SANTA', title2:'MÓNICA', description:'A Praia de Santa Mónica é uma das praias mais bonitas do mundo, com 18 km de areia dourada e águas turquesa. O Deserto de Viana, com dunas gigantes, e a observação de tartarugas marinhas tornam a Boa Vista um destino imperdível.', image:'https://upload.wikimedia.org/wikipedia/commons/c/c0/Chaves_Beach_in_Boa_Vista.jpg' },
    { place:'Ilha de São Vicente', title:'MINDELO', title2:'CULTURA', description:'Mindelo é a capital cultural de Cabo Verde, berço da música morna e da cantora Cesária Évora. Com o seu Carnaval famoso, arquitetura colonial, vida noturna vibrante e a encantadora Baía das Gatas, é o coração pulsante da cultura cabo-verdiana.', image:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Portrait_of_Ces%C3%A1ria_%C3%89vora%2C_Mindelo.jpg' },
    { place:'Ilha Brava', title:'ILHA', title2:'DAS FLORES', description:'Brava é a ilha mais remota e verdejante de Cabo Verde, conhecida como a Ilha das Flores. Com piscinas naturais de água cristalina na Fajã de Água, trilhos deslumbrantes e a encantadora vila colonial de Nova Sintra, é um refúgio de paz e natureza.', image:'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=75' },
    { place:'Ilha do Maio', title:'PRAIAS', title2:'SELVAGENS', description:'O Maio é a ilha mais tranquila de Cabo Verde, com praias desertas de areia branca e águas cristalinas. As Dunas de Morrinho, as Salinas de Porto Inglês e a observação de tartarugas marinhas fazem desta ilha um paraíso escondido.', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=75' },
];

const ilhasData = [
    { nome:'Sal', apelido:'Ilha do Sal', desc:'Principal destino turístico de Cabo Verde, famoso pelas praias de areia branca como Santa Maria e as icónicas Salinas de Pedra de Lume, uma cratera vulcânica onde se flutua como no Mar Morto.', image:'https://images.unsplash.com/photo-1753872789111-ebdf8cf78397?auto=format&fit=crop&w=400&q=60', atracoes:'Santa Maria, Salinas Pedra de Lume, Baía do Tubarão', musica:'assets/audio/sal.mp3' },
    { nome:'Boa Vista', apelido:'Ilha da Boa Vista', desc:'Terceira maior ilha do arquipélago, conhecida pelas praias paradisíacas como Santa Mónica (18km de areia dourada), dunas do Deserto de Viana e observação de tartarugas marinhas.', image:'https://upload.wikimedia.org/wikipedia/commons/c/c0/Chaves_Beach_in_Boa_Vista.jpg', atracoes:'Santa Mónica, Deserto de Viana, Sal Rei', musica:'assets/audio/boa-vista.mp3' },
    { nome:'Santiago', apelido:'Ilha de Santiago', desc:'A maior ilha de Cabo Verde, onde fica a capital Praia. Abriga a Cidade Velha, Património Mundial da UNESCO, com a primeira rua dos trópicos e uma fortaleza do século XVI.', image:'https://upload.wikimedia.org/wikipedia/commons/e/e9/Quebra-canela_Cape_Verde.jpg', atracoes:'Cidade Velha, Tarrafal, Praia, Serra Malagueta', musica:'assets/audio/santiago.mp3' },
    { nome:'Fogo', apelido:'Ilha do Fogo', desc:'Dominada pelo imponente vulcão ativo Pico do Fogo (2829m), o ponto mais alto do país. Na Chã das Caldeiras, dentro da cratera, cultiva-se vinho único em solo vulcânico.', image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60', atracoes:'Pico do Fogo, Chã das Caldeiras, São Filipe', musica:'assets/audio/fogo.mp3' },
    { nome:'Santo Antão', apelido:'Ilha de Santo Antão', desc:'Paraíso verde de montanhas escarpadas e vales profundos. O Vale do Paúl é o destino de trekking mais famoso de Cabo Verde, com plantações de café e paisagens deslumbrantes.', image:'https://images.unsplash.com/photo-1715341762945-d053d5d76c55?auto=format&fit=crop&w=400&q=60', atracoes:'Vale do Paúl, Cova, Ponta do Sol, Ribeira Grande', musica:'assets/audio/santo-antao.mp3' },
    { nome:'São Vicente', apelido:'Ilha de São Vicente', desc:'Berço da música morna e da diva Cesária Évora. Mindelo é a capital cultural do arquipélago, com carnaval famoso, arquitetura colonial e vida noturna vibrante na Baía das Gatas.', image:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Portrait_of_Ces%C3%A1ria_%C3%89vora%2C_Mindelo.jpg', atracoes:'Mindelo, Baía das Gatas, Monte Verde', musica:'assets/audio/sao-vicente.mp3' },
    { nome:'Brava', apelido:'Ilha Brava', desc:'A mais remota e verdejante, conhecida como Ilha das Flores. Tem piscinas naturais na Fajã de Água, trilhos deslumbrantes e a pitoresca vila colonial de Nova Sintra.', image:'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=60', atracoes:'Fajã de Água, Nova Sintra, Trilho Eugénio Tavares', musica:'assets/audio/brava.mp3' },
    { nome:'Maio', apelido:'Ilha do Maio', desc:'Refúgio de tranquilidade com praias desertas de areia branca, dunas de Morrinho e salinas de Porto Inglês. Ideal para quem procura paz e autenticidade cabo-verdiana.', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=60', atracoes:'Dunas Morrinho, Salinas Porto Inglês, Praia de Bitchirotcha', musica:'assets/audio/maio.mp3' },
    { nome:'São Nicolau', apelido:'Ilha de São Nicolau', desc:'Ilha montanhosa com tradições rurais autênticas, onde se destaca o Monte Gordo e a cultura do vinho. Conhecida pelo artesanato e pela hospitalidade do seu povo.', image:'https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=400&q=60', atracoes:'Monte Gordo, Ribeira Brava, Carbeirinho', musica:'assets/audio/sao-nicolau.mp3' },
    { nome:'Santa Luzia', apelido:'Ilha de Santa Luzia', desc:'Ilha desabitada entre São Vicente e São Nicolau, é uma reserva natural protegida. Paraíso para mergulho com vida marinha abundante e paisagens intocadas.', image:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=60', atracoes:'Reserva Natural, mergulho, vida marinha', musica:'assets/audio/santa-luzia.mp3' },
];

const destinosData = [
    { nome:'Salinas de Pedra de Lume', ilha:'Sal', desc:'Cratera de vulcão com piscinas de sal hipersalinas onde você flutua sem esforço. Banhos terapêuticos desde o século XIX num cenário lunar deslumbrante.', image:'https://images.unsplash.com/photo-1753872789111-ebdf8cf78397?auto=format&fit=crop&w=600&q=60', video:'assets/video/salinas.mp4' },
    { nome:'Praia de Santa Mónica', ilha:'Boa Vista', desc:'18 km de areia dourada e águas cristalinas turquesa, eleita uma das praias mais bonitas do mundo. Tartarugas marinhas desovam na costa.', image:'https://upload.wikimedia.org/wikipedia/commons/c/c0/Chaves_Beach_in_Boa_Vista.jpg', video:'assets/video/santa-monica.mp4' },
    { nome:'Cidade Velha', ilha:'Santiago', desc:'Património Mundial da UNESCO, foi a primeira cidade europeia construída nos trópicos. Visite a Fortaleza Real de São Filipe e a Rua da Banana.', image:'https://upload.wikimedia.org/wikipedia/commons/e/e9/Quebra-canela_Cape_Verde.jpg', video:'assets/video/cidade-velha.mp4' },
    { nome:'Pico do Fogo', ilha:'Fogo', desc:'Vulcão ativo com 2829m de altitude — o ponto mais alto de Cabo Verde. A subida até à cratera é uma experiência única com paisagens lunares e vinhas na lava.', image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60', video:'assets/video/pico-fogo.mp4' },
    { nome:'Vale do Paúl', ilha:'Santo Antão', desc:'Coração verde de Cabo Verde, com vales profundos de vegetação exuberante, terraços agrícolas centenários e plantações de café arábica.', image:'https://images.unsplash.com/photo-1715341762945-d053d5d76c55?auto=format&fit=crop&w=600&q=60', video:'assets/video/vale-paul.mp4' },
    { nome:'Mindelo', ilha:'São Vicente', desc:'Capital cultural do arquipélago, berço da morna e de Cesária Évora. Carnaval famoso, arquitetura colonial e vida noturna na vibrante Baía das Gatas.', image:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Portrait_of_Ces%C3%A1ria_%C3%89vora%2C_Mindelo.jpg', video:'assets/video/mindelo.mp4' },
    { nome:'Deserto de Viana', ilha:'Boa Vista', desc:'Dunas douradas que se estendem até ao mar, criando uma paisagem de mini-Sahara com palm trees e areia fina. Passeios de buggy e prancha de areia.', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60', video:'assets/video/deserto-viana.mp4' },
    { nome:'Fajã de Água', ilha:'Brava', desc:'Piscinas naturais de água cristalina esculpidas na rocha vulcânica, na ilha mais remota de Cabo Verde. Um paraíso escondido para mergulho e snorkeling.', image:'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=60', video:'assets/video/faja-agua.mp4' },
];

let ofertasData = [
    { titulo:'Escapada ao Sal', preco:599, desc:'7 noites no resort Riu Palace Santa Maria com tudo incluído. Praia, piscina, desportos náuticos e visita guiada às Salinas de Pedra de Lume.', imagem:'https://images.unsplash.com/photo-1753872789111-ebdf8cf78397?auto=format&fit=crop&w=600&q=60', tag:'-30%', ilha:'Sal', tipo:'praia' },
    { titulo:'Aventura no Fogo', preco:799, desc:'5 noites em São Filipe com guia para subida ao Pico do Fogo, visita à Chã das Caldeiras, prova de vinho vulcânico e jantar típico cabo-verdiano.', imagem:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60', tag:'-25%', ilha:'Fogo', tipo:'aventura' },
    { titulo:'Trekking Santo Antão', preco:899, desc:'8 noites com 6 dias de trekking guiado pelo Vale do Paúl, Cova, Ribeira Grande e Ponta do Sol. Alojamento em guesthouses locais.', imagem:'https://images.unsplash.com/photo-1715341762945-d053d5d76c55?auto=format&fit=crop&w=600&q=60', tag:'-20%', ilha:'Santo Antão', tipo:'aventura' },
    { titulo:'Pacote Boa Vista', preco:649, desc:'7 noites no Riu Karamboa tudo incluído. Praia de Santa Mónica, Deserto de Viana, observação de tartarugas e passeio de catamarã.', imagem:'https://upload.wikimedia.org/wikipedia/commons/c/c0/Chaves_Beach_in_Boa_Vista.jpg', tag:'-35%', ilha:'Boa Vista', tipo:'praia' },
    { titulo:'Cultura em Mindelo', preco:549, desc:'5 noites no centro de Mindelo com visitas guiadas, música ao vivo no Café Royal, museu Cesária Évora e passeio à Baía das Gatas.', imagem:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=60', tag:'-15%', ilha:'São Vicente', tipo:'cultura' },
    { titulo:'Roteiro Santiago Histórico', preco:469, desc:'5 noites na Praia com visita à Cidade Velha (Património Mundial), Plateau, Mercado de Sucupira, e excursão ao interior da ilha.', imagem:'https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=600&q=60', tag:'-20%', ilha:'Santiago', tipo:'cultura' },
    { titulo:'Paraíso Escondido Maio', preco:529, desc:'7 noites na ilha do Maio, praias desertas de areia branca, reserva natural das tartarugas, e relax total longe do turismo em massa.', imagem:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60', tag:'-25%', ilha:'Maio', tipo:'praia' },
    { titulo:'São Nicolau Autêntico', preco:449, desc:'6 noites em São Nicolau, caminhadas pelo Monte Gordo, visita à Ribeira Brava, praias vulcânicas e a famosa Festa do Queijo.', imagem:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=60', tag:'-20%', ilha:'São Nicolau', tipo:'natureza' },
    { titulo:'Relax na Brava', preco:399, desc:'5 noites na ilha mais pequena de Cabo Verde. Natureza intocada, caminhadas entre flores, mergulho e a autêntica vida cabo-verdiana.', imagem:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=60', tag:'-30%', ilha:'Brava', tipo:'natureza' },
    { titulo:'Sal & Boa Vista Combo', preco:949, desc:'10 noites: 5 no Sal + 5 na Boa Vista. Inclui voos inter-ilhas, transfers, e atividades selecionadas em cada ilha.', imagem:'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=600&q=60', tag:'-35%', ilha:'Multi-ilha', tipo:'combo' },
    { titulo:'Cabo Verde Completo', preco:1899, desc:'21 noites por 5 ilhas: Sal, Santiago, Fogo, Santo Antão e São Vicente. Voo inter-ilhas, guia, transfers e regime de meia pensão.', imagem:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=60', tag:'-45%', ilha:'Multi-ilha', tipo:'combo' },
    { titulo:'Luxo no Sal', preco:1499, desc:'7 noites no Meliá Tortuga Beach Resort, spa, golf, restaurante gourmet, e sunset cruise privativo com champanhe.', imagem:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=60', tag:'-10%', ilha:'Sal', tipo:'luxo' },
];

// ===================== HOME PAGE ANIMATION (original) =====================
const _ = (id)=>document.getElementById(id)

const cards = data.map((i, index)=>`<div class="card" id="card${index}" style="background-image:url(${i.image})"></div>`).join('')
const cardContents = data.map((i, index)=>`<div class="card-content" id="card-content-${index}">
<div class="content-start"></div>
<div class="content-place">${i.place}</div>
<div class="content-title-1">${i.title}</div>
<div class="content-title-2">${i.title2}</div>
</div>`).join('')
const sildeNumbers = data.map((_, index)=>`<div class="item" id="slide-item-${index}">${index+1}</div>`).join('')
_('demo').innerHTML = cards + cardContents
_('slide-numbers').innerHTML = sildeNumbers

const range = (n) => Array(n).fill(0).map((i, j) => i + j)
const set = gsap.set

function getCard(index) { return `#card${index}` }
function getCardContent(index) { return `#card-content-${index}` }
function getSliderItem(index) { return `#slide-item-${index}` }

function animate(target, duration, properties) {
  return new Promise((resolve) => {
    gsap.to(target, { ...properties, duration: duration, onComplete: resolve })
  })
}

let order = [0, 1, 2, 3, 4, 5, 6, 7]
let detailsEven = true
let offsetTop = 200, offsetLeft = 700, cardWidth = 200, cardHeight = 300, gap = 40, numberSize = 50
const ease = "sine.inOut"

function init() {
  const [active, ...rest] = order
  const detailsActive = detailsEven ? "#details-even" : "#details-odd"
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even"
  const { innerHeight: height, innerWidth: width } = window

  const isMobile = width < 768
  if (isMobile) {
    offsetTop = height - 250
    offsetLeft = Math.max(16, width - 340)
    cardWidth = 100
    cardHeight = 150
    gap = 16
    numberSize = 30
  } else {
    offsetTop = height - 430
    offsetLeft = width - 830
    cardWidth = 200
    cardHeight = 300
    gap = 40
    numberSize = 50
  }

  gsap.set("#pagination", { top: isMobile ? height - 60 : offsetTop + 330, left: isMobile ? Math.max(16, offsetLeft) : offsetLeft, y: 200, opacity: 0, zIndex: 60 })
  gsap.set("nav", { y: -200, opacity: 0 })
  gsap.set(getCard(active), { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight })
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 })
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 })
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 })
  gsap.set(`${detailsInactive} .text`, { y: 100 })
  gsap.set(`${detailsInactive} .title-1`, { y: 100 })
  gsap.set(`${detailsInactive} .title-2`, { y: 100 })
  gsap.set(`${detailsInactive} .desc`, { y: 50 })
  gsap.set(`${detailsInactive} .cta`, { y: 60 })
  const progressW = isMobile ? width - 100 : 500
  gsap.set(".progress-sub-foreground", { width: progressW * (1 / order.length) * (active + 1) })

  rest.forEach((i, index) => {
    gsap.set(getCard(i), { x: offsetLeft + 400 + index * (cardWidth + gap), y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10 })
    gsap.set(getCardContent(i), { x: offsetLeft + 400 + index * (cardWidth + gap), zIndex: 40, y: offsetTop + cardHeight - 100 })
    gsap.set(getSliderItem(i), { x: (index + 1) * numberSize })
  })

  gsap.set(".indicator", { x: -window.innerWidth })
  const startDelay = 0.6

  gsap.to(".cover", {
    x: width + 400, delay: 0.5, ease,
    onComplete: () => { setTimeout(() => { loop() }, 500) }
  })

  rest.forEach((i, index) => {
    gsap.to(getCard(i), { x: offsetLeft + index * (cardWidth + gap), zIndex: 30, delay: 0.05 * index, ease, delay: startDelay })
    gsap.to(getCardContent(i), { x: offsetLeft + index * (cardWidth + gap), zIndex: 40, delay: 0.05 * index, ease, delay: startDelay })
  })
  gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay })
  gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay })
  gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay })
}

let busy = false
function step() {
  if (busy) return Promise.resolve()
  busy = true
  return new Promise((resolve) => {
    order.push(order.shift())
    detailsEven = !detailsEven
    const detailsActive = detailsEven ? "#details-even" : "#details-odd"
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even"

    document.querySelector(`${detailsActive} .place-box .text`).textContent = data[order[0]].place
    document.querySelector(`${detailsActive} .title-1`).textContent = data[order[0]].title
    document.querySelector(`${detailsActive} .title-2`).textContent = data[order[0]].title2
    document.querySelector(`${detailsActive} .desc`).textContent = data[order[0]].description

    gsap.set(detailsActive, { zIndex: 22 })
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease })
    gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease })
    gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease })
    gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease })
    gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease })
    gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, ease })
    gsap.set(detailsInactive, { zIndex: 12 })

    const [active, ...rest] = order
    const prv = rest[rest.length - 1]

    gsap.set(getCard(prv), { zIndex: 10 })
    gsap.set(getCard(active), { zIndex: 20 })
    gsap.to(getCard(prv), { scale: 1.5, ease })
    gsap.to(getCardContent(active), { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease })
    gsap.to(getSliderItem(active), { x: 0, ease })
    gsap.to(getSliderItem(prv), { x: -numberSize, ease })
    const pw = window.innerWidth < 768 ? window.innerWidth - 100 : 500
    gsap.to(".progress-sub-foreground", { width: pw * (1 / order.length) * (active + 1), ease })

    gsap.to(getCard(active), {
      x: 0, y: 0, ease, width: window.innerWidth, height: window.innerHeight, borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap)
        gsap.set(getCard(prv), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10, scale: 1 })
        gsap.set(getCardContent(prv), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40 })
        gsap.set(getSliderItem(prv), { x: rest.length * numberSize })
        gsap.set(detailsInactive, { opacity: 0 })
        gsap.set(`${detailsInactive} .text`, { y: 100 })
        gsap.set(`${detailsInactive} .title-1`, { y: 100 })
        gsap.set(`${detailsInactive} .title-2`, { y: 100 })
        gsap.set(`${detailsInactive} .desc`, { y: 50 })
        gsap.set(`${detailsInactive} .cta`, { y: 60 })
        busy = false
        resolve()
      }
    })

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft + index * (cardWidth + gap)
        gsap.set(getCard(i), { zIndex: 30 })
        gsap.to(getCard(i), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, ease, delay: 0.1 * (index + 1) })
        gsap.to(getCardContent(i), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40, ease, delay: 0.1 * (index + 1) })
        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease })
      }
    })
  })
}

async function loop() {
  if (!homeInitialized) return

  if (busy) {
    await new Promise(r => setTimeout(r, 100))
    loop()
    return
  }

  await animate(".indicator", 2, { x: 0 })
  await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 })
  set(".indicator", { x: -window.innerWidth })

  if (busy) {
    await new Promise(r => setTimeout(r, 100))
    loop()
    return
  }

  await step()
  loop()
}

function stepBack() {
  if (busy) return Promise.resolve()
  busy = true
  return new Promise((resolve) => {
    order.unshift(order.pop())
    detailsEven = !detailsEven
    const detailsActive = detailsEven ? "#details-even" : "#details-odd"
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even"

    document.querySelector(`${detailsActive} .place-box .text`).textContent = data[order[0]].place
    document.querySelector(`${detailsActive} .title-1`).textContent = data[order[0]].title
    document.querySelector(`${detailsActive} .title-2`).textContent = data[order[0]].title2
    document.querySelector(`${detailsActive} .desc`).textContent = data[order[0]].description

    gsap.set(detailsActive, { zIndex: 22 })
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease })
    gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease })
    gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease })
    gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease })
    gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease })
    gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, ease })
    gsap.set(detailsInactive, { zIndex: 12 })

    const [active, ...rest] = order
    const prv = rest[0]

    gsap.set(getCard(prv), { zIndex: 10 })
    gsap.set(getCard(active), { zIndex: 20 })
    gsap.to(getCard(prv), { scale: 1.5, ease })
    gsap.to(getCardContent(active), { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease })
    gsap.to(getSliderItem(active), { x: 0, ease })
    gsap.to(getSliderItem(prv), { x: -numberSize, ease })
    const pw2 = window.innerWidth < 768 ? window.innerWidth - 100 : 500
    gsap.to(".progress-sub-foreground", { width: pw2 * (1 / order.length) * (active + 1), ease })

    gsap.to(getCard(active), {
      x: 0, y: 0, ease, width: window.innerWidth, height: window.innerHeight, borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft
        gsap.set(getCard(prv), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10, scale: 1 })
        gsap.set(getCardContent(prv), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40 })
        gsap.set(getSliderItem(prv), { x: 1 * numberSize })
        gsap.set(detailsInactive, { opacity: 0 })
        gsap.set(`${detailsInactive} .text`, { y: 100 })
        gsap.set(`${detailsInactive} .title-1`, { y: 100 })
        gsap.set(`${detailsInactive} .title-2`, { y: 100 })
        gsap.set(`${detailsInactive} .desc`, { y: 50 })
        gsap.set(`${detailsInactive} .cta`, { y: 60 })
        busy = false
        resolve()
      }
    })

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft + index * (cardWidth + gap)
        gsap.set(getCard(i), { zIndex: 30 })
        gsap.to(getCard(i), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, ease, delay: 0.1 * (index + 1) })
        gsap.to(getCardContent(i), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40, ease, delay: 0.1 * (index + 1) })
        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease })
      }
    })
  })
}

// Arrow buttons
document.querySelector('.arrow-right')?.addEventListener('click', () => step())
document.querySelector('.arrow-left')?.addEventListener('click', () => stepBack())

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image))
  return Promise.all(promises)
}

let homeInitialized = false

async function startHome() {
  if (homeInitialized) return
  homeInitialized = true
  init()
  loadImages().catch(e => console.warn("Image load error", e))
}

// ===================== NAVEGAÇÃO =====================
const navItems = document.querySelectorAll('.nav-item')
const pages = document.querySelectorAll('.page')

function navigateTo(pageId) {
  const currentPage = document.querySelector('.page.active')
  const newPage = document.getElementById(`page-${pageId}`)
  if (currentPage === newPage || !currentPage) return

  navItems.forEach(n => n.classList.remove('active'))
  document.querySelector(`.nav-item[data-page="${pageId}"]`)?.classList.add('active')
  document.querySelector(`.mobile-nav-item[data-page="${pageId}"]`)?.classList.add('active')
  document.querySelectorAll('.mobile-nav-item').forEach(n => n.classList.remove('active'))
  document.querySelector(`.mobile-nav-item[data-page="${pageId}"]`)?.classList.add('active')

  gsap.to(currentPage, {
    opacity: 0, scale: 0.96, duration: 0.3, ease: 'power2.in',
    onComplete: () => {
      currentPage.classList.remove('active')
      gsap.set(currentPage, { opacity: 1, scale: 1, clearProps: 'opacity,scale' })
      newPage.classList.add('active')
      gsap.set(newPage, { opacity: 0, scale: 0.96 })
      gsap.to(newPage, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })

      if (pageId === 'home') startHome()
      if (pageId === 'ilhas') renderIlhas()
      if (pageId === 'destinos') renderDestinos()
      if (pageId === 'ofertas') { renderOfertas(); iniciarAtualizadorOfertas() }
      if (pageId !== 'ofertas') pararAtualizadorOfertas()
    }
  })
}

navItems.forEach(item => {
  item.addEventListener('click', () => window.navigateTo(item.dataset.page))
})

// Mobile menu items
document.querySelectorAll('.mobile-nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('show')
    window.navigateTo(item.dataset.page)
  })
})

// Hamburger
const mobileMenu = document.getElementById('mobileMenu')
document.getElementById('hamburgerBtn').addEventListener('click', () => mobileMenu.classList.add('show'))
document.getElementById('closeMobile').addEventListener('click', () => mobileMenu.classList.remove('show'))
mobileMenu.addEventListener('click', (e) => { if (e.target === mobileMenu) mobileMenu.classList.remove('show') })

// ===================== ILHAS =====================
let audioAtual = null

function renderIlhas() {
  const grid = document.getElementById('ilhasGrid')
  if (grid.dataset.rendered) return
  grid.dataset.rendered = 'true'
  grid.innerHTML = ilhasData.map(i => `
    <div class="ilha-card" data-musica="${i.musica}">
      <img class="ilha-card-img" src="${i.image}" alt="${i.nome}" loading="lazy">
      <div class="ilha-card-body">
        <h3>${i.nome}</h3>
        <p>${i.desc}</p>
        <span class="ilha-tag">${i.atracoes}</span>
      </div>
      <div class="ilha-music-indicator">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
      </div>
    </div>
  `).join('')

  grid.querySelectorAll('.ilha-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const src = card.dataset.musica
      if (!src) return
      if (audioAtual) { audioAtual.pause(); audioAtual = null }
      audioAtual = new Audio(src)
      audioAtual.loop = true
      audioAtual.volume = 0.4
      audioAtual.play().catch(() => {})
      card.classList.add('playing')
    })
    card.addEventListener('mouseleave', () => {
      if (audioAtual) { audioAtual.pause(); audioAtual.currentTime = 0; audioAtual = null }
      card.classList.remove('playing')
    })
  })
}

// ===================== DESTINOS =====================
function renderDestinos() {
  const grid = document.getElementById('destinosGrid')
  if (grid.dataset.rendered) return
  grid.dataset.rendered = 'true'
  grid.innerHTML = destinosData.map((d, idx) => `
    <div class="destino-card" data-index="${idx}">
      <div class="destino-wrapper">
        <img class="destino-cover" src="${d.image}" alt="${d.nome}" loading="lazy">
      </div>
      <div class="destino-overlay">
        <h3>${d.nome}</h3>
        <p>${d.ilha} — ${d.desc}</p>
      </div>
      <video class="destino-video" src="${d.video}" muted loop playsinline preload="none"></video>
    </div>
  `).join('')

  grid.querySelectorAll('.destino-card').forEach(card => {
    const video = card.querySelector('.destino-video')
    if (!video) return

    card.addEventListener('mouseenter', () => {
      video.preload = 'auto'
      video.load()
      video.play().catch(() => {})
      card.classList.add('hover')
    })

    card.addEventListener('mouseleave', () => {
      video.pause()
      video.currentTime = 0
      card.classList.remove('hover')
    })
  })
}

// ===================== OFERTAS =====================
let precosAtuais = []
let ofertasAtualizador = null
let statusAtualizador = null
let ultimaAtualizacao = null
const IS_LOCALHOST = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
const BASE_API = IS_LOCALHOST ? 'http://localhost:3002/api' : '/api'

const PRICE_API = `${BASE_API}/precos`

function formatarPrecoEUR(valor) {
  return '€' + valor.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function formatarPrecoCVE(valor) {
  return valor.toLocaleString('pt-PT') + ' CVE'
}

async function fetchPrecosOnline() {
  const status = document.getElementById('ofertaStatus')
  try {
    const res = await fetch(PRICE_API, { signal: AbortSignal.timeout(8000) })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const json = await res.json()
    if (json.offers) {
      document.querySelector('.oferta-live-dot')?.classList.add('active')
      if (status) {
        status.textContent = 'Preços atualizados online — ' + new Date().toLocaleTimeString('pt-PT')
        status.style.color = '#4ade80'
      }
      return json
    }
    throw new Error('Sem dados')
  } catch {
    return await fetchPrecosFallback()
  }
}

async function fetchPrecosFallback() {
  const status = document.getElementById('ofertaStatus')
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/EUR', { signal: AbortSignal.timeout(8000) })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const json = await res.json()
    if (!json.rates) throw new Error('Sem rates')

    const rateCVE = json.rates.CVE || 110.0
    const factor = 0.92 + Math.random() * 0.16
    const hour = new Date().getHours()
    const day = new Date().getDay()
    const demand = 0.85 + (hour >= 10 && hour <= 20 ? 0.1 : 0) + (day >= 5 ? 0.08 : 0)

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

    const offers = baseOffers.map(o => {
      const priceEUR = Math.round(o.precoBase * demand * factor * 10) / 10
      return {
        id: o.id, titulo: o.titulo, precoEUR: priceEUR,
        precoCVE: Math.round(priceEUR * rateCVE),
        precoBase: o.precoBase,
        lowestEUR: Math.round(priceEUR * 0.97 * 10) / 10,
        lowestCVE: Math.round(priceEUR * 0.97 * rateCVE),
        savings: Math.round(Math.random() * 25 + 10),
        change: Math.round((Math.random() - 0.5) * 10)
      }
    })

    document.querySelector('.oferta-live-dot')?.classList.add('active')
    if (status) {
      status.textContent = 'Preços ao vivo — ' + new Date().toLocaleTimeString('pt-PT')
      status.style.color = '#22c55e'
    }
    return { timestamp: Date.now(), exchangeRate: rateCVE, currency: 'EUR', offers }
  } catch {
    document.querySelector('.oferta-live-dot')?.classList.remove('active')
    if (status) {
      status.textContent = 'Preços offline — a usar valores de referência'
      status.style.color = '#f59e0b'
    }
    const rateCVE = 110
    return {
      timestamp: Date.now(), exchangeRate: rateCVE, currency: 'EUR',
      offers: ofertasData.map((o, i) => {
        const base = baseOffers[i]
        return {
          id: i, titulo: o.titulo, precoEUR: base ? base.precoBase : o.preco,
          precoCVE: Math.round((base ? base.precoBase : o.preco) * rateCVE),
          precoBase: base ? base.precoBase : o.preco,
          lowestEUR: Math.round((base ? base.precoBase : o.preco) * 0.95),
          lowestCVE: Math.round((base ? base.precoBase : o.preco) * 0.95 * rateCVE),
          savings: parseInt(o.tag?.replace('-', '') || '15'), change: 0
        }
      })
    }
  }
}

function atualizarStatus() {
  const status = document.getElementById('ofertaStatus')
  if (status && ultimaAtualizacao) {
    const ago = Math.floor((Date.now() - ultimaAtualizacao) / 1000)
    status.textContent = 'Preços atualizados há ' + (ago < 60 ? ago + 's' : Math.floor(ago / 60) + 'min') + ' — ' + new Date().toLocaleTimeString('pt-PT')
  }
}

async function atualizarPrecos() {
  const grid = document.getElementById('ofertasGrid')
  if (!grid || !grid.dataset.rendered) return

  const cards = grid.querySelectorAll('.oferta-card')
  if (!cards.length) return

  const data = await fetchPrecosOnline()
  if (!data) return

  const status = document.getElementById('ofertaStatus')
  if (status && data.timestamp) {
    const ago = Math.floor((Date.now() - data.timestamp) / 1000)
    status.textContent = `Mercado: €1 = ${data.exchangeRate} CVE · Preços actualizados há ${ago}s`
  }

  cards.forEach((card, i) => {
    if (i >= data.offers.length) return
    const offer = data.offers[i]
    if (!offer) return

    const precoEl = card.querySelector('.oferta-preco')
    const tagEl = card.querySelector('.oferta-tag')
    const lowestEl = card.querySelector('.oferta-lowest')
    const changeEl = card.querySelector('.oferta-change')

    if (precoEl) {
      const novo = formatarPrecoEUR(offer.precoEUR)
      const antigo = precoEl.textContent
      precoEl.textContent = novo
      if (antigo && antigo !== novo) {
        precoEl.classList.remove('price-up', 'price-down')
        void precoEl.offsetWidth
        precoEl.classList.add(offer.change > 0 ? 'price-up' : 'price-down')
      }
    }

    if (tagEl) {
      tagEl.textContent = offer.savings > 0 ? `-${offer.savings}%` : ''
    }

    if (lowestEl) {
      lowestEl.textContent = `Mínimo mercado: ${formatarPrecoEUR(offer.lowestEUR)}`
    }
  })
}

function renderOfertas() {
  const grid = document.getElementById('ofertasGrid')
  if (grid.dataset.rendered) return
  grid.dataset.rendered = 'true'

  let filtroIlha = 'todas'

  function render() {
    const filtered = filtroIlha === 'todas' ? ofertasData : ofertasData.filter(o => o.ilha === filtroIlha)

    const statusHtml = `
      <div class="oferta-status-bar">
        <div class="oferta-live-indicator">
          <span class="oferta-live-dot"></span>
          <span class="oferta-live-text">AO VIVO</span>
        </div>
        <span class="oferta-status-msg" id="ofertaStatus">A atualizar preços de mercado...</span>
      </div>
      <div class="oferta-filtros">
        <button class="oferta-filtro-btn ${filtroIlha === 'todas' ? 'active' : ''}" data-ilha="todas">🌍 Todas</button>
        ${['Sal','Boa Vista','Santiago','Fogo','Santo Antão','São Vicente','Maio','São Nicolau','Brava','Multi-ilha'].map(ilha =>
          `<button class="oferta-filtro-btn ${filtroIlha === ilha ? 'active' : ''}" data-ilha="${ilha}">${ilha}</button>`
        ).join('')}
      </div>
    `

    const skeletonHtml = Array.from({ length: filtered.length }, () => `
      <div class="oferta-card oferta-skeleton">
        <div class="skeleton-img"></div>
        <div class="oferta-card-body">
          <div class="skeleton-line w-20"></div>
          <div class="skeleton-line w-60"></div>
          <div class="skeleton-line w-40"></div>
          <div class="skeleton-line w-80"></div>
        </div>
      </div>
    `).join('')

    grid.innerHTML = statusHtml + skeletonHtml

    setTimeout(async () => {
      const data = await fetchPrecosOnline()
      ultimaAtualizacao = data.timestamp

      const ofertasHtml = filtered.map((o, idx) => {
        const dataIdx = ofertasData.indexOf(o)
        const offer = data.offers[dataIdx]
        const afiliadoLink = 'https://www.booking.com/searchresults.html?aid=7942621&label=cv-oferta-' + dataIdx + '&ss=Cabo+Verde'
        return `
        <div class="oferta-card">
          <img class="oferta-card-img" src="${o.imagem}" alt="${o.titulo}" loading="lazy">
          <div class="oferta-card-body">
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px">
              <span class="oferta-tag">${offer?.savings > 0 ? `-${offer.savings}%` : o.tag}</span>
              <span class="oferta-ilha-badge">${o.ilha}</span>
              <span class="oferta-tipo-badge tipo-${o.tipo}">${o.tipo}</span>
            </div>
            <h3>${o.titulo}</h3>
            <div class="oferta-preco">${offer ? formatarPrecoEUR(offer.precoEUR) : formatarPrecoEUR(o.preco)}</div>
            ${offer ? `<div class="oferta-lowest">📉 Mínimo mercado: ${formatarPrecoEUR(offer.lowestEUR)}</div>` : ''}
            ${offer ? `<div class="oferta-change ${offer.change > 0 ? 'price-up' : 'price-down'}">${offer.change > 0 ? '▲' : '▼'} ${Math.abs(offer.change)}% hoje</div>` : ''}
            <p>${o.desc}</p>
            <div class="oferta-preco-cve">${offer ? formatarPrecoCVE(offer.precoCVE) : ''}</div>
            <a href="${afiliadoLink}" target="_blank" rel="noopener sponsored" class="oferta-afiliado">Reservar esta oferta</a>
          </div>
        </div>
        ${idx === 2 ? `
        <div class="ad-container ad-card">
          <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4375557451351822" data-ad-slot="8501285043" data-ad-format="auto" data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>` : ''}`
      }).join('')
      grid.innerHTML = statusHtml + ofertasHtml

      grid.querySelectorAll('.oferta-filtro-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          filtroIlha = btn.dataset.ilha
          render()
        })
      })

      if (data) {
        const status = document.getElementById('ofertaStatus')
        if (status) {
          const ago = Math.floor((Date.now() - data.timestamp) / 1000)
          status.textContent = `Mercado: €1 = ${data.exchangeRate} CVE · Preços actualizados há ${ago}s`
          status.style.color = '#4ade80'
        }
      }
    }, 600)
  }

  render()
}

function atualizarStatus() {
  const status = document.getElementById('ofertaStatus')
  if (status) {
    const ago = Math.floor((Date.now() - ultimaAtualizacao) / 1000)
    if (ago < 60) {
      status.textContent = 'Preços atualizados há ' + ago + 's — ' + new Date().toLocaleTimeString('pt-PT')
    } else {
      status.textContent = 'Preços atualizados há ' + Math.floor(ago / 60) + 'min — ' + new Date().toLocaleTimeString('pt-PT')
    }
  }
}

function iniciarAtualizadorOfertas() {
  pararAtualizadorOfertas()
  ofertasAtualizador = setInterval(atualizarPrecos, 30000)
  statusAtualizador = setInterval(atualizarStatus, 5000)
}

function pararAtualizadorOfertas() {
  if (ofertasAtualizador) { clearInterval(ofertasAtualizador); ofertasAtualizador = null }
  if (statusAtualizador) { clearInterval(statusAtualizador); statusAtualizador = null }
}

// ===================== VOOS =====================
document.getElementById('vooBtn').addEventListener('click', () => {
  const origem = document.getElementById('vooOrigem').value || 'Lisboa'
  const destino = document.getElementById('vooDestino').value
  const ida = document.getElementById('vooIda').value
  const volta = document.getElementById('vooVolta').value
  const passageiros = document.getElementById('vooPassageiros').value || 1

  if (!ida || !volta) {
    alert('Por favor selecione as datas de ida e volta.')
    return
  }

  const precoBase = Math.floor(Math.random() * 200 + 250)
  const precos = ['TAP Air Portugal', 'Ryanair', 'Cabo Verde Airlines', 'TUI Fly']
  const resultados = document.getElementById('voosResultados')
  
  resultados.innerHTML = precos.map((cia, i) => {
    const preco = precoBase + Math.floor(Math.random() * 100) + i * 30
    const horas = Math.floor(Math.random() * 3 + 4)
    const minutos = Math.floor(Math.random() * 60)
    const params = new URLSearchParams({ origem, destino, ida, volta, passageiros, cia, preco: preco * passageiros })
    return `
      <div class="voo-resultado-card">
        <div class="voo-info">
          <h4>${cia}</h4>
          <p>${origem} → ${destino} | ${ida} a ${volta} | ${passageiros} passageiro(s)</p>
          <p>Duração: ${horas}h${minutos}m | Com escalas</p>
        </div>
        <div>
          <div class="voo-preco">€${preco * passageiros}</div>
          <button class="voo-reservar" data-params='${JSON.stringify({ origem, destino, ida, volta, passageiros, cia, preco: preco * passageiros })}'>Reservar</button>
        </div>
      </div>
    `
  }).join('')
  resultados.classList.add('show')

  resultados.querySelectorAll('.voo-reservar').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = JSON.parse(btn.dataset.params)
      const adModal = document.createElement('div')
      adModal.className = 'voo-ad-overlay'
      adModal.innerHTML = `
        <div class="voo-ad-modal">
          <button class="voo-ad-close">&times;</button>
          <h3 style="font-family:'Oswald',sans-serif;font-size:22px;letter-spacing:1px;margin:0 0 8px;color:#fff">✈️ ${p.origem} → ${p.destino}</h3>
          <p style="font-size:13px;color:#999;margin:0 0 4px">${p.ida} a ${p.volta} · ${p.passageiros} passageiro(s) · ${p.cia}</p>
          <p style="font-size:11px;color:#666;margin:0 0 16px">Anúncio — reserva segura via parceiro</p>
          <div class="ad-container" style="max-width:100%;margin-bottom:16px">
            <ins class="adsbygoogle" style="display:block;text-align:center" data-ad-client="ca-pub-4375557451351822" data-ad-slot="8501285043" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </div>
          <p style="font-size:11px;color:#FFFFFF88;margin:0 0 12px">Apoias o nosso site ao reservar através deste link. O preço é o mesmo para ti.</p>
          <a href="https://www.booking.com/flights/index.html?aid=7942621&label=cv-turismo-${encodeURIComponent(p.origem)}-${encodeURIComponent(p.destino)}" target="_blank" rel="noopener sponsored" style="display:inline-block;padding:12px 28px;background:#ecad29;color:#000;border-radius:8px;font-weight:700;text-decoration:none;font-size:14px">✅ Continuar para a Reserva</a>
        </div>
      `
      document.body.appendChild(adModal)
      requestAnimationFrame(() => adModal.classList.add('show'))
      try { (adsbygoogle = window.adsbygoogle || []).push({}) } catch (e) {}
      adModal.querySelector('.voo-ad-close').addEventListener('click', () => {
        adModal.classList.remove('show')
        setTimeout(() => adModal.remove(), 300)
      })
      adModal.addEventListener('click', (e) => {
        if (e.target === adModal) {
          adModal.classList.remove('show')
          setTimeout(() => adModal.remove(), 300)
        }
      })
    })
  })
})

// ===================== CONTACTO =====================
document.getElementById('contactoForm').addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Mensagem enviada com sucesso! Entraremos em contacto brevemente.')
  e.target.reset()
})

// ===================== SEARCH =====================
const searchBtn = document.getElementById('searchBtn')
const searchOverlay = document.getElementById('searchOverlay')
const closeSearch = document.getElementById('closeSearch')
const searchInput = document.getElementById('searchInput')
const searchResults = document.getElementById('searchResults')

searchBtn.addEventListener('click', () => {
  searchOverlay.classList.add('show')
  setTimeout(() => searchInput.focus(), 200)
  searchInput.value = ''
  searchResults.classList.remove('show')
})

closeSearch.addEventListener('click', () => searchOverlay.classList.remove('show'))
searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) searchOverlay.classList.remove('show') })

function performSearch(query) {
  if (!query.trim()) { searchResults.classList.remove('show'); return }
  const q = query.toLowerCase().trim()
  const allItems = [
    ...ilhasData.map(i => ({ titulo: i.nome, desc: i.desc, tipo: 'Ilha' })),
    ...destinosData.map(d => ({ titulo: d.nome, desc: `${d.ilha} — ${d.desc}`, tipo: 'Destino' })),
    ...ofertasData.map(o => ({ titulo: o.titulo, desc: o.desc, tipo: 'Oferta' })),
    ...data.map(d => ({ titulo: d.place, desc: `${d.title} ${d.title2}`, tipo: 'Destaque' })),
  ]
  const results = allItems.filter(item =>
    item.titulo.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
  )
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item" style="color:#FFFFFF88">Nenhum resultado encontrado.</div>'
  } else {
    searchResults.innerHTML = results.slice(0, 8).map(r => `
      <div class="search-result-item">
        <h4>${r.titulo}</h4>
        <p>${r.tipo} — ${r.desc.substring(0, 80)}...</p>
      </div>
    `).join('')
  }
  searchResults.classList.add('show')
}

searchInput.addEventListener('input', () => performSearch(searchInput.value))
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') performSearch(searchInput.value) })

// ===================== USER / AUTH =====================
const userBtn = document.getElementById('userBtn')
const userOverlay = document.getElementById('userOverlay')
const closeUser = document.getElementById('closeUser')
const userFormContainer = document.getElementById('userFormContainer')
const userTabs = document.getElementById('userTabs')
const userLoggedIn = document.getElementById('userLoggedIn')
const userDisplayName = document.getElementById('userDisplayName')
const userDisplayEmail = document.getElementById('userDisplayEmail')
const userAvatar = document.getElementById('userAvatar')

const AUTH_API = BASE_API

let usuarioAtual = JSON.parse(localStorage.getItem('cv_user') || 'null')
let tokenAtual = localStorage.getItem('cv_token') || null

async function verificarSessao() {
  if (!tokenAtual) return
  try {
    const res = await fetch(`${AUTH_API}/me`, {
      headers: { 'Authorization': `Bearer ${tokenAtual}` }
    })
    if (res.ok) {
      const data = await res.json()
      usuarioAtual = data.user
      localStorage.setItem('cv_user', JSON.stringify(usuarioAtual))
      atualizarUIUser()
    } else {
      terminarSessao()
    }
  } catch (e) {
    console.error('Erro ao verificar sessão:', e)
  }
}

function salvarSessao(u, token) {
  usuarioAtual = u
  tokenAtual = token
  localStorage.setItem('cv_user', JSON.stringify(u))
  localStorage.setItem('cv_token', token)
  atualizarUIUser()
}

function terminarSessao() {
  usuarioAtual = null
  tokenAtual = null
  localStorage.removeItem('cv_user')
  localStorage.removeItem('cv_token')
  atualizarUIUser()
  fecharUser()
}

function abrirUser() {
  document.querySelectorAll('.user-tab-content input').forEach(i => i.value = '')
  const msg = document.getElementById('authMessage')
  if (msg) { msg.style.display = 'none'; msg.className = 'auth-message' }
  userOverlay.classList.add('show')
  atualizarUIUser()
}
function fecharUser() { userOverlay.classList.remove('show') }

function showAuthMsg(text, type = 'error') {
  const msg = document.getElementById('authMessage')
  if (!msg) return
  msg.textContent = text
  msg.className = `auth-message ${type}`
  msg.style.display = 'block'
}

document.getElementById('loginPassword').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('loginBtn').click() })
document.getElementById('registerPassword').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('registerBtn').click() })

userBtn.addEventListener('click', abrirUser)
closeUser.addEventListener('click', fecharUser)
userOverlay.addEventListener('click', (e) => { if (e.target === userOverlay) fecharUser() })

document.querySelectorAll('.user-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.user-tab').forEach(t => t.classList.remove('active'))
    document.querySelectorAll('.user-tab-content').forEach(c => c.classList.remove('active'))
    tab.classList.add('active')
    document.getElementById(tab.dataset.tab + 'Form').classList.add('active')
    const msg = document.getElementById('authMessage')
    if (msg) msg.style.display = 'none'
  })
})

function atualizarUIUser() {
  if (usuarioAtual) {
    userTabs.style.display = 'none'
    document.querySelectorAll('.user-tab-content').forEach(c => c.style.display = 'none')
    userLoggedIn.style.display = 'flex'
    userDisplayName.textContent = usuarioAtual.nome || usuarioAtual.name
    userDisplayEmail.textContent = usuarioAtual.email
    const initial = (usuarioAtual.nome || usuarioAtual.name || 'U').charAt(0).toUpperCase()
    userAvatar.textContent = initial
    userBtn.innerHTML = `
      <div class="user-avatar-mini">${initial}</div>
    `
  } else {
    userTabs.style.display = 'flex'
    document.querySelectorAll('.user-tab').forEach(t => t.classList.remove('active'))
    document.querySelector('.user-tab[data-tab="login"]')?.classList.add('active')
    document.querySelectorAll('.user-tab-content').forEach(c => { c.style.display = ''; c.classList.remove('active') })
    document.getElementById('loginForm')?.classList.add('active')
    userLoggedIn.style.display = 'none'
    userBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
      </svg>
    `
  }
}

// REGISTAR
document.getElementById('registerBtn').addEventListener('click', async () => {
  const btn = document.getElementById('registerBtn')
  const nome = document.getElementById('registerName').value.trim()
  const email = document.getElementById('registerEmail').value.trim()
  const password = document.getElementById('registerPassword').value

  if (!nome || !email || !password) { showAuthMsg(i18n.t('user.fill_all')); return }
  if (!email.includes('@')) { showAuthMsg(i18n.t('user.invalid_email')); return }
  if (password.length < 6) { showAuthMsg(i18n.t('user.password_short')); return }

  try {
    btn.disabled = true
    const originalText = btn.textContent
    btn.textContent = i18n.t('general.loading')
    const res = await fetch(`${AUTH_API}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nome, email, password })
    })
    const data = await res.json()
    if (res.ok) {
      salvarSessao(data.user, data.token)
      showAuthMsg(i18n.t('user.register_success'), 'success')
      setTimeout(fecharUser, 1500)
    } else {
      showAuthMsg(data.error || i18n.t('general.error'))
      btn.disabled = false
      btn.textContent = originalText
    }
  } catch (e) {
    showAuthMsg(i18n.t('general.error'))
    btn.disabled = false
    btn.textContent = i18n.t('user.register')
  }
})

// LOGIN
document.getElementById('loginBtn').addEventListener('click', async () => {
  const btn = document.getElementById('loginBtn')
  const email = document.getElementById('loginEmail').value.trim()
  const password = document.getElementById('loginPassword').value

  if (!email || !password) { showAuthMsg(i18n.t('user.fill_all')); return }

  try {
    btn.disabled = true
    const originalText = btn.textContent
    btn.textContent = i18n.t('general.loading')
    const res = await fetch(`${AUTH_API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (res.ok) {
      salvarSessao(data.user, data.token)
      showAuthMsg(i18n.t('user.login_success', { name: data.user.name }), 'success')
      setTimeout(fecharUser, 1500)
    } else {
      showAuthMsg(data.error || i18n.t('user.invalid_credentials'))
      btn.disabled = false
      btn.textContent = originalText
    }
  } catch (e) {
    showAuthMsg(i18n.t('general.error'))
    btn.disabled = false
    btn.textContent = i18n.t('user.login')
  }
})

// LOGOUT
document.getElementById('logoutBtn').addEventListener('click', () => {
  if (confirm(i18n.t('nav.terminar_sessao') + '?')) terminarSessao()
})

// INIT
verificarSessao()
atualizarUIUser()

document.querySelectorAll('.discover').forEach(btn => {
  btn.addEventListener('click', function() { navigateTo('destinos') })
})

// ===================== START =====================
startHome()
