// ── Carta (una página por entrada del array) ──────────────
const letterPages = [
    `Lorem ipsum dolor sit amet consectetur adipiscing elit, sem hac aenean vehicula duis tellus dapibus, ultrices sed scelerisque cubilia ligula integer. Feugiat fringilla sociosqu a mi torquent nunc, iaculis blandit fusce pulvinar at ligula, elementum augue integer porta montes. Tempor nascetur orci condimentum dictumst proin nisl cursus sagittis suspendisse, purus rhoncus quis cras himenaeos primis cubilia potenti.`,

    `Erat velit ultricies arcu fusce lectus nascetur vestibulum aliquam, mattis felis nec leo fringilla accumsan dictum nostra, platea gravida venenatis sociosqu volutpat donec ornare. Nisl tortor ante mi congue est taciti phasellus a libero tempor pretium consequat, class nec fusce litora egestas nisi velit nam odio lectus risus. Primis augue sociosqu himenaeos luctus fames consequat porta hendrerit, varius facilisis integer class suspendisse lacus senectus dictumst, venenatis habitasse vulputate est sollicitudin rutrum mauris.`
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
