import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../../i18n/LanguageContext.jsx'
import TypewriterText from '../TypewriterText/TypewriterText.jsx'
import RotatingWord from '../RotatingWord/RotatingWord.jsx'
import './Hero.css'

const Hero = () => {
  const root = useRef(null)
  const pillRef = useRef(null)
  const ctaRef = useRef(null)
  const { t } = useLang()

  // Pill border-gradient mouse tracking (local — only when hovering the pill)
  const handlePillMove = (e) => {
    const el = pillRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }

  // Magnetic Contact CTA
  const handleCtaMove = (e) => {
    const el = ctaRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * 0.25
    const dy = (e.clientY - cy) * 0.25
    gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power3.out' })
  }
  const handleCtaLeave = () => {
    if (!ctaRef.current) return
    gsap.to(ctaRef.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero__line--soft', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        delay: 0.3,
      })

      gsap.from('.hero__bg-image', {
        opacity: 0,
        scale: 1.05,
        duration: 1.6,
        ease: 'power3.out',
      })

      gsap.from('.hero__pill', { y: 40, opacity: 0, duration: 0.9, delay: 1.8, ease: 'power3.out' })
      gsap.from('.hero__chip', { y: 20, opacity: 0, duration: 0.5, stagger: 0.06, delay: 2.0, ease: 'power2.out' })

      gsap.to('.hero__bg-image', {
        y: 80,
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <img src="/assets/hero-bg-clean.jpg" alt="" className="hero__bg-image" />
        <div className="hero__bg-fade" />
      </div>

      {/* Marquee top */}
      <div className="hero__marquee hero__marquee--top" aria-hidden="true">
        <div className="hero__marquee-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <img key={i} src="/assets/hero-bg-text.png" alt="" />
          ))}
        </div>
      </div>

      {/* Marquee bottom (reverse) */}
      <div className="hero__marquee hero__marquee--bottom" aria-hidden="true">
        <div className="hero__marquee-track hero__marquee-track--reverse">
          {Array.from({ length: 4 }).map((_, i) => (
            <img key={i} src="/assets/hero-bg-text.png" alt="" />
          ))}
        </div>
      </div>

      {/* 3D isotype decoration */}
      <img src="/assets/iris-3d.png" alt="" className="hero__iso hero__iso--1" aria-hidden="true" />
      <img src="/assets/iris-3d.png" alt="" className="hero__iso hero__iso--2" aria-hidden="true" />

      <div className="container hero__inner">
        <h1 className="hero__headline">
          <div className="hero__line hero__line--soft">{t.hero.line1}</div>
          <div className="hero__line hero__line--accent">
            <TypewriterText text={t.hero.line2} startDelay={550} speed={48} />
          </div>
          <div className="hero__line hero__line--soft">
            {t.hero.line3}{' '}
            <RotatingWord words={t.hero.line3Words} className="hero__rotword" />
          </div>
        </h1>

        <div className="hero__pill" ref={pillRef} onMouseMove={handlePillMove}>
          <div className="hero__pill-top">
            <div className="hero__pill-icon" aria-hidden="true">
              <img src="/assets/iris-isotype.svg" alt="" />
            </div>
            <p className="hero__pill-text">{t.hero.pillText}</p>
          </div>
          <a
            href="#contact"
            ref={ctaRef}
            onMouseMove={handleCtaMove}
            onMouseLeave={handleCtaLeave}
            className="hero__pill-cta"
          >
            <span>{t.hero.pillCta}</span>
            <span className="hero__pill-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="hero__chips">
          {t.hero.chips.map((c, i) => (
            <span key={c} className="hero__chip" style={{ animationDelay: `${i * 0.4}s` }}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
