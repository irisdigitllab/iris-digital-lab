import { useEffect, useRef, useState } from 'react'
import './RotatingWord.css'

// Efecto mecanografía con rotación: la palabra se escribe, espera,
// se borra carácter a carácter (Backspace) y se escribe la siguiente.
// Solo afecta a esta palabra — el resto de la frase es estático.
const RotatingWord = ({
  words,
  typeSpeed = 70,
  eraseSpeed = 42,
  holdTime = 2000,
  startDelay = 2200,
  className = '',
}) => {
  const [shown, setShown] = useState(words?.[0] ?? '')
  const timers = useRef([])

  useEffect(() => {
    if (!words || words.length === 0) return

    // La primera palabra entra ya escrita (junto con la animación de la línea).
    setShown(words[0])

    // Respeta a quien prefiere menos movimiento: palabra fija, sin ciclo.
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || words.length < 2) return

    let cancelled = false
    const local = timers.current
    const wait = (ms) =>
      new Promise((res) => {
        const id = setTimeout(res, ms)
        local.push(id)
      })

    const erase = async (word) => {
      for (let i = word.length; i >= 0; i -= 1) {
        if (cancelled) return
        setShown(word.slice(0, i))
        await wait(eraseSpeed)
      }
    }

    const type = async (word) => {
      for (let i = 0; i <= word.length; i += 1) {
        if (cancelled) return
        setShown(word.slice(0, i))
        await wait(typeSpeed)
      }
    }

    const loop = async () => {
      await wait(startDelay)
      let idx = 0
      while (!cancelled) {
        await wait(holdTime)
        if (cancelled) return
        await erase(words[idx])
        idx = (idx + 1) % words.length
        await type(words[idx])
      }
    }
    loop()

    return () => {
      cancelled = true
      local.forEach(clearTimeout)
      timers.current = []
    }
  }, [words, typeSpeed, eraseSpeed, holdTime, startDelay])

  return (
    <span className={`rotword ${className}`}>
      {/* Texto estable para lectores de pantalla (el h1 no "baila") */}
      <span className="rotword__sr">{words?.[0]}</span>
      <span className="rotword__text" aria-hidden="true">
        {shown}
      </span>
      <span className="rotword__caret" aria-hidden="true" />
    </span>
  )
}

export default RotatingWord
