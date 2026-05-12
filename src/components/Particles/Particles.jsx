import { useEffect, useRef } from 'react'

/**
 * Lightweight canvas-based drifting particles with mouse repulsion.
 * - Particles drift slowly in random directions
 * - Cursor pushes nearby particles away (radius-based force)
 * - Pauses when tab is hidden, resizes responsively
 */
const Particles = ({
  density = 0.00012,   // particles per px² (auto-scales with size)
  color = '232, 211, 0', // RGB triplet (default yellow accent)
  speed = 0.15,
  repelRadius = 140,
  repelStrength = 1.8,
  className = '',
}) => {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const stateRef = useRef({
    particles: [],
    mouse: { x: -9999, y: -9999, active: false },
    width: 0,
    height: 0,
    dpr: 1,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true })
    const state = stateRef.current

    const setup = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      state.dpr = dpr
      state.width = rect.width
      state.height = rect.height
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = Math.round(rect.width * rect.height * density)
      const current = state.particles.length
      if (current < target) {
        for (let i = current; i < target; i++) {
          state.particles.push(makeParticle(rect.width, rect.height))
        }
      } else if (current > target) {
        state.particles.length = target
      }
    }

    const makeParticle = (w, h) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: 0.7 + Math.random() * 1.5,
      a: 0.25 + Math.random() * 0.5,
    })

    const tick = () => {
      const { width: w, height: h, particles, mouse } = state
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        // Drift
        p.x += p.vx
        p.y += p.vy

        // Mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const distSq = dx * dx + dy * dy
          const r2 = repelRadius * repelRadius
          if (distSq < r2 && distSq > 0.5) {
            const dist = Math.sqrt(distSq)
            const force = (1 - dist / repelRadius) * repelStrength
            p.x += (dx / dist) * force
            p.y += (dy / dist) * force
          }
        }

        // Wrap edges
        if (p.x < -10) p.x = w + 10
        else if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        else if (p.y > h + 10) p.y = -10

        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${p.a})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      // Active only when pointer is inside the canvas bounds
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        state.mouse.x = x
        state.mouse.y = y
        state.mouse.active = true
      } else {
        state.mouse.active = false
      }
    }
    const onMouseLeave = () => {
      state.mouse.active = false
      state.mouse.x = -9999
      state.mouse.y = -9999
    }
    const onResize = () => setup()
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current)
      } else if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    setup()
    rafRef.current = requestAnimationFrame(tick)

    const parent = canvas.parentElement
    // Listen on window so the handler fires even when the cursor is over
    // child elements that sit on top of the canvas (cards, overlays, etc.)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    // Re-setup when parent's size changes (filter swaps, image loads, etc.)
    const ro = new ResizeObserver(() => setup())
    ro.observe(parent)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      ro.disconnect()
    }
  }, [density, color, speed, repelRadius, repelStrength])

  return (
    <canvas
      ref={canvasRef}
      className={`particles-canvas ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  )
}

export default Particles
