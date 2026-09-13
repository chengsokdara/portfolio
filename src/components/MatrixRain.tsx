import { useEffect, useRef } from 'react'

/** Subtle green code rain behind the terminal. Disabled when reduced-motion is on. */
export function MatrixRain({ active }: { active: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active) return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let running = true
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン01アイウエオ{}<>/;$#@'

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fontSize = 14
    let columns = Math.floor(canvas.width / fontSize)
    let drops = Array.from({ length: columns }, () => Math.random() * -40)

    const draw = () => {
      if (!running) return
      columns = Math.floor(canvas.width / fontSize)
      if (drops.length !== columns) {
        drops = Array.from({ length: columns }, (_, i) => drops[i] ?? Math.random() * -40)
      }

      ctx.fillStyle = 'rgba(10, 14, 20, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`

      for (let i = 0; i < drops.length; i++) {
        const ch = chars[(Math.random() * chars.length) | 0]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillStyle = i % 7 === 0 ? 'rgba(90, 200, 250, 0.35)' : 'rgba(61, 214, 140, 0.28)'
        ctx.fillText(ch, x, y)
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
        else drops[i] += 0.65 + Math.random() * 0.35
      }
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [active])

  if (!active) return null
  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-40"
    />
  )
}
