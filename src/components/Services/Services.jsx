import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Particles from '../Particles/Particles.jsx'
import TypewriterText from '../TypewriterText/TypewriterText.jsx'
import { useLang } from '../../i18n/LanguageContext.jsx'
import { covers } from '../../data/portfolio.js'
import { services as serviceData } from '../../data/services.js'
import './Services.css'

const ICONS = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z" />
      <path d="M16 8a5 5 0 0 1 0 8" />
      <path d="M19 5a9 9 0 0 1 0 14" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <polygon points="10 9 16 12 10 15 10 9" fill="currentColor" stroke="none" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
]

// Mapeo servicio (por índice) → media. Solo Marketing y Video Production usan video.
// Resto: placeholders con covers del portfolio mientras llegan las fotos definitivas.
const SERVICE_MEDIA = [
  { type: 'image', src: '/assets/graphics-brands-bg.jpg' },                                        // Brand Identity
  { type: 'image', src: '/assets/website-development.jpg' },                                        // Website Dev
  { type: 'video', src: '/videos/services/marketing-campaigns.mp4', poster: covers.smartChoice },  // Marketing
  { type: 'video', src: '/videos/services/video-production.mp4', poster: covers.finestDental },    // Video Production
  { type: 'image', src: '/assets/ai-automation.png' },                                             // AI Automation
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H8M17 7V16" />
  </svg>
)

const Services = () => {
  const { t } = useLang()
  const navigate = useNavigate()
  const [active, setActive] = useState(0)
  const [cursor, setCursor] = useState({ x: 0, y: 0, index: -1 })
  const rafRef = useRef(0)
  const pills = t.testimonials.benefits

  const goToService = (i) => {
    const svc = serviceData[i]
    if (svc) navigate(`/services/${svc.slug}`)
  }

  const handleMove = (e, i) => {
    const x = e.clientX
    const y = e.clientY
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0
      setCursor({ x, y, index: i })
    })
  }

  const handleEnter = (e, i) => {
    setCursor({ x: e.clientX, y: e.clientY, index: i })
  }

  const handleLeave = () => {
    setCursor((c) => ({ ...c, index: -1 }))
  }

  const visible = cursor.index >= 0
  const media = visible ? SERVICE_MEDIA[cursor.index] : null

  return (
    <section className="services section" id="services">
      <Particles density={0.00007} />
      <div className="container">
        <header className="services__head" data-reveal>
          <span className="services__eyebrow">{t.services.eyebrow}</span>
          <h2 className="services__title">
            <TypewriterText text={t.services.titleB} triggerOnView speed={40} />
          </h2>
          <a href="#work" className="services__link">
            {t.services.cta}
            <ArrowIcon />
          </a>
        </header>

        <div className="services__pills" data-reveal>
          {pills.map((p) => (
            <span key={p} className="services__pill">
              <span className="services__pill-dot" />
              {p}
            </span>
          ))}
        </div>

        <ul className="services__list" data-stagger>
          {t.services.items.map((item, i) => {
            const isActive = active === i
            return (
              <li
                key={item.title}
                className={`service-row${isActive ? ' is-active' : ''}`}
                data-stagger-item
                onClick={() => goToService(i)}
                onMouseEnter={(e) => {
                  setActive(i)
                  handleEnter(e, i)
                }}
                onMouseMove={(e) => handleMove(e, i)}
                onMouseLeave={handleLeave}
              >
                <div className="service-row__left">
                  <span className="service-row__icon">{ICONS[i] ?? ICONS[0]}</span>
                  <h3 className="service-row__title">{item.title}</h3>
                </div>
                <p className="service-row__desc">{item.desc}</p>
                <button
                  type="button"
                  className="service-row__arrow"
                  aria-label={item.title}
                  onClick={(e) => {
                    e.stopPropagation()
                    goToService(i)
                  }}
                >
                  <ArrowIcon />
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {visible && media && (
        <div
          className={`services__cursor-card${media.type === 'video' ? ' services__cursor-card--wide' : ''}`}
          style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)` }}
        >
          {media.type === 'image' ? (
            <img src={media.src} alt="" />
          ) : (
            <video
              key={media.src}
              src={media.src}
              poster={media.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          )}
        </div>
      )}
    </section>
  )
}

export default Services
