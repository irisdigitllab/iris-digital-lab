import { useEffect, useRef, useState } from 'react'
import './TypewriterText.css'

const TypewriterText = ({
  text,
  speed = 45,
  startDelay = 0,
  triggerOnView = false,
  threshold = 0.3,
  as: Tag = 'span',
  className = '',
  ...rest
}) => {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!text) return
    let cancelled = false
    let timers = []

    const run = () => {
      setShown('')
      setDone(false)
      const startTimer = setTimeout(() => {
        let i = 0
        const tick = () => {
          if (cancelled) return
          i += 1
          setShown(text.slice(0, i))
          if (i < text.length) {
            const tt = setTimeout(tick, speed)
            timers.push(tt)
          } else {
            setDone(true)
          }
        }
        tick()
      }, startDelay)
      timers.push(startTimer)
    }

    if (triggerOnView && ref.current) {
      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            obs.disconnect()
            run()
          }
        },
        { threshold }
      )
      obs.observe(ref.current)
      return () => {
        cancelled = true
        timers.forEach(clearTimeout)
        obs.disconnect()
      }
    }

    run()
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [text, speed, startDelay, triggerOnView, threshold])

  return (
    <Tag
      ref={ref}
      className={`tw ${done ? 'tw--done' : 'tw--typing'} ${className}`}
      {...rest}
    >
      <span className="tw__text">{shown}</span>
      <span className="tw__caret" aria-hidden="true" />
    </Tag>
  )
}

export default TypewriterText
