import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import './VideoPopup.css'

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const VideoPopup = ({ project, onClose }) => {
  const overlayRef = useRef(null)
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)

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
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' },
      '-=0.15'
    )

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose])

  if (!project) return null

  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const videos = project.videos ?? []

  return createPortal(
    <div ref={overlayRef} className="vp-overlay" role="presentation" onClick={onOverlayClick}>
      <div
        ref={dialogRef}
        className="vp-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={project.client}
      >
        <header className="vp-head">
          <span className="vp-client">{project.client}</span>
          <button
            type="button"
            ref={closeBtnRef}
            onClick={onClose}
            className="vp-close"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </header>

        <div className={`vp-videos${videos.length > 1 ? ' vp-videos--grid' : ''}`}>
          {videos.map((v, i) => (
            <video
              key={`${v.src}-${i}`}
              src={v.src}
              controls
              autoPlay
              loop
              playsInline
              preload="metadata"
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default VideoPopup
