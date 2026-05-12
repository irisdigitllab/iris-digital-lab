import { useEffect, useRef } from 'react'
import './Cursor.css'

const Cursor = () => {
  const ref = useRef(null)
  const visibleRef = useRef(false)

  useEffect(() => {
    const isFineHover =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isFineHover) return

    document.body.classList.add('has-custom-cursor')

    const el = ref.current
    let raf = 0
    let targetX = 0
    let targetY = 0
    let currX = 0
    let currY = 0

    const move = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!visibleRef.current && el) {
        el.style.opacity = '1'
        visibleRef.current = true
      }
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const tick = () => {
      raf = 0
      currX += (targetX - currX) * 0.35
      currY += (targetY - currY) * 0.35
      if (el) {
        el.style.transform = `translate3d(${currX}px, ${currY}px, 0) translate(-50%, -50%)`
      }
      if (Math.abs(targetX - currX) > 0.5 || Math.abs(targetY - currY) > 0.5) {
        raf = requestAnimationFrame(tick)
      }
    }

    const onLeave = () => {
      if (el) el.style.opacity = '0'
      visibleRef.current = false
    }
    const onEnter = () => {
      if (el) el.style.opacity = '1'
      visibleRef.current = true
    }

    const onDown = () => el?.classList.add('cursor--down')
    const onUp = () => el?.classList.remove('cursor--down')

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <img src="/assets/iris-isotype.svg" alt="" />
    </div>
  )
}

export default Cursor
