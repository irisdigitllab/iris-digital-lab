import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Particles from '../Particles/Particles.jsx'
import TypewriterText from '../TypewriterText/TypewriterText.jsx'
import ProjectModal from './ProjectModal.jsx'
import VideoPopup from './VideoPopup.jsx'
import { categories, projects } from '../../data/portfolio.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import './Portfolio.css'

const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>
)

const Portfolio = () => {
  const [active, setActive] = useState('all')
  const [openProject, setOpenProject] = useState(null)
  const [openVideo, setOpenVideo] = useState(null)
  const gridRef = useRef(null)
  const { t } = useLang()
  const filters = [{ slug: 'all', label: t.portfolio.filterAll }, ...categories]

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active)

  useEffect(() => {
    if (!gridRef.current) return
    const items = gridRef.current.querySelectorAll('.pf-card')
    gsap.fromTo(
      items,
      { opacity: 0, y: 24, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: 'power2.out',
        stagger: 0.04,
      }
    )
  }, [active])

  return (
    <section className="portfolio section" id="work">
      <Particles density={0.00007} />
      <div className="container">
        <div className="portfolio__head" data-reveal>
          <span className="eyebrow">{t.portfolio.eyebrow}</span>
          <h2 className="portfolio__title">
            {t.portfolio.titleA}{' '}
            <TypewriterText as="em" text={t.portfolio.titleB} triggerOnView speed={42} />
          </h2>
        </div>

        <div className="portfolio__filters" role="tablist" aria-label={t.portfolio.eyebrow}>
          {filters.map((f) => {
            const count =
              f.slug === 'all'
                ? projects.length
                : projects.filter((p) => p.category === f.slug).length
            if (count === 0) return null
            return (
              <button
                key={f.slug}
                type="button"
                role="tab"
                aria-selected={active === f.slug}
                className={`pf-chip ${active === f.slug ? 'pf-chip--active' : ''}`}
                onClick={() => setActive(f.slug)}
              >
                {f.label}
                <span className="pf-chip__count">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="portfolio__grid" ref={gridRef}>
          {filtered.map((p) => {
            const cat = categories.find((c) => c.slug === p.category)
            const videoCount = p.videos?.length ?? 0
            const isWeb = p.category === 'website-development' && p.url
            const isVideoProject = videoCount > 0
            const handleClick = isVideoProject
              ? () => setOpenVideo(p)
              : () => setOpenProject(p)

            const media = (
              <div className="pf-card__media">
                <img src={p.cover} alt={p.title} loading="lazy" />
                <span className="pf-card__tag">{cat?.label ?? p.category}</span>
                {videoCount > 0 && (
                  <span className="pf-card__play" aria-hidden="true">
                    <PlayIcon />
                  </span>
                )}
                <span className="pf-card__cta">
                  {isWeb
                    ? 'Visit website'
                    : videoCount > 1
                      ? t.portfolio.ctaMultiple(videoCount)
                      : t.portfolio.ctaSingle}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            )
            const body = (
              <div className="pf-card__body">
                <h4 className="pf-card__title">{p.title}</h4>
                <p className="pf-card__client">
                  {p.client} · {p.year}
                </p>
              </div>
            )

            if (isWeb) {
              return (
                <a
                  key={p.slug}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf-card"
                  aria-label={`${p.title} — open website`}
                >
                  {media}
                  {body}
                </a>
              )
            }

            return (
              <button
                key={p.slug}
                type="button"
                className="pf-card"
                onClick={handleClick}
                aria-label={t.portfolio.cardOpenLabel(p.title)}
              >
                {media}
                {body}
              </button>
            )
          })}
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      <VideoPopup project={openVideo} onClose={() => setOpenVideo(null)} />
    </section>
  )
}

export default Portfolio
