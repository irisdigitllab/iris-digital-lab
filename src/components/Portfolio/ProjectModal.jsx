import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { categories } from '../../data/portfolio.js'
import { useLang } from '../../i18n/LanguageContext.jsx'
import './ProjectModal.css'

const VideoEmbed = ({ video, title }) => {
  const src =
    video.type === 'vimeo'
      ? `https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`
      : `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`

  return (
    <div className="pm-video">
      <iframe
        src={src}
        title={`${title} — video ${video.id}`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ProjectModal = ({ project, onClose }) => {
  const overlayRef = useRef(null)
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const { t } = useLang()

  useEffect(() => {
    if (!project) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    closeBtnRef.current?.focus()

    const tl = gsap.timeline()
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' })
    tl.fromTo(
      dialogRef.current,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' },
      '-=0.15'
    )

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose])

  if (!project) return null

  const cat = categories.find((c) => c.slug === project.category)

  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return createPortal(
    <div
      ref={overlayRef}
      className="pm-overlay"
      role="presentation"
      onClick={onOverlayClick}
    >
      <div
        ref={dialogRef}
        className="pm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pm-title"
      >
        <button
          type="button"
          ref={closeBtnRef}
          onClick={onClose}
          className="pm-close"
          aria-label={t.modal.close}
        >
          <CloseIcon />
        </button>

        <div className="pm-content">
          <header className="pm-head">
            <span className="pm-tag">{cat?.label ?? project.category}</span>
            <h2 id="pm-title" className="pm-title">
              {project.title}
            </h2>
            <p className="pm-summary">{project.summary}</p>
          </header>

          {project.videos?.length > 0 && (
            <div className={`pm-videos ${project.videos.length > 1 ? 'pm-videos--grid' : ''}`}>
              {project.videos.map((v) => (
                <VideoEmbed key={`${v.type}-${v.id}`} video={v} title={project.title} />
              ))}
            </div>
          )}

          <div className="pm-grid">
            <div className="pm-description">
              <h3>{t.modal.sectionTitle}</h3>
              <p>{project.description}</p>
            </div>

            <dl className="pm-meta">
              <div>
                <dt>{t.modal.client}</dt>
                <dd>{project.client}</dd>
              </div>
              <div>
                <dt>{t.modal.year}</dt>
                <dd>{project.year}</dd>
              </div>
              {project.services?.length > 0 && (
                <div>
                  <dt>{t.modal.services}</dt>
                  <dd>{project.services.join(' · ')}</dd>
                </div>
              )}
              {project.stack?.length > 0 && (
                <div>
                  <dt>{t.modal.stack}</dt>
                  <dd>{project.stack.join(' · ')}</dd>
                </div>
              )}
              {project.externalUrl && (
                <div>
                  <dt>{t.modal.externalLabel}</dt>
                  <dd>
                    <a
                      className="pm-link"
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.modal.externalCta} <ExternalIcon />
                    </a>
                  </dd>
                </div>
              )}
              {project.url && (
                <div>
                  <dt>{t.modal.webLabel}</dt>
                  <dd>
                    <a
                      className="pm-link"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.modal.webCta} <ExternalIcon />
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ProjectModal
