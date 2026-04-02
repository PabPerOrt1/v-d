// ── Carta (una página por entrada del array) ──────────────
const letterPages = [
    `Hola mi vida,

Hoy es el día del amor, de quererse, de las parejas, de enamorarse y de estar unidos.
Y si bien yo te amo, te quiero, soy y quiero siempre ser tu pareja, estoy enamorado de ti y siempre estaremos unidos...
Hoy esto quiero que vaya solo de ti, porque te lo mereces.

Porque amar no es solo besos y querer, amar también es conocerse, saber los detalles que te hacen especial...
Y si bien yo te conozco mucho, mi gordita, quiero conocer de dónde vienes, por qué eres como eres y quién te ha hecho así, porque la verdad es que me encanta.
Quiero estar más en tu vida, conocer lo que te importa y formar aún más parte de tu universo. Es por eso que quiero conocer a las personas que te enseñaron el amor desde bien pequeña.`,

    `Quiero conocer a tus abuelos, las dos hojitas de trébol que me faltan. Sé que son muy importantes para tu vida, sé que son tu fuerza y alegría, y que te encantaría pasar más tiempo con ellos y que yo los conozca, por eso: nos vamos a MadriZz :)

Te amo mucho, mi gordita. Espero que te encante la sorpresa (y las que quedan por venir jiji), estoy loco porque vayamos y verte sonreír de esa manera que me gusta tanto.

Un beso de tu amor, novio, futuro marido, mejor amigo y compañero de locuras y viajes.

Tú gordito, Pablo`
]

let currentPage = 0
let musicPlaying = false

// ── Paginación ────────────────────────────────────────────
function renderPage() {
    const textEl = document.getElementById('letter-text')
    const indicator = document.getElementById('page-indicator')
    const prevBtn = document.getElementById('prev-btn')
    const nextBtn = document.getElementById('next-btn')

    textEl.style.opacity = '0'
    setTimeout(() => {
        textEl.textContent = letterPages[currentPage]
        textEl.style.opacity = '1'
    }, 180)

    indicator.textContent = `${currentPage + 1} / ${letterPages.length}`
    prevBtn.disabled = currentPage === 0
    nextBtn.disabled = currentPage === letterPages.length - 1
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--
        renderPage()
    }
}

function nextPage() {
    if (currentPage < letterPages.length - 1) {
        currentPage++
        renderPage()
    }
}

// ── Inicio ────────────────────────────────────────────────
window.addEventListener('load', () => {
    renderPage()
    launchConfetti()

    const music = document.getElementById('bg-music')
    music.volume = 0.3
    music.play().catch(() => {})
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
})

// ── Confeti ───────────────────────────────────────────────
function launchConfetti() {
    const colors = ['#a855f7', '#c084fc', '#e879f9', '#f0abfc', '#fff', '#ffdf00']
    const duration = 6000
    const end = Date.now() + duration

    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors
    })

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }
        confetti({ particleCount: 40, angle: 60,  spread: 55, origin: { x: 0, y: 0.6 }, colors })
        confetti({ particleCount: 40, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors })
    }, 300)
}

// ── Música ────────────────────────────────────────────────
function toggleMusic() {
    const music = document.getElementById('bg-music')
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}
