import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../../i18n/LanguageContext.jsx'
import './Hero.css'

const Hero = () => {
  const root = useRef(null)
  const headlineRef = useRef(null)
  const { t } = useLang()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = headlineRef.current.querySelectorAll('.hero__line')
      gsap.from(lines, {
        y: 120,
        opacity: 0,
        duration: 1.1,
        stagger: 0.14,
        ease: 'power4.out',
        delay: 0.4,
      })

      gsap.from('.hero__bg-image', {
        opacity: 0,
        scale: 1.05,
        duration: 1.6,
        ease: 'power3.out',
      })

      gsap.from('.hero__pill', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 1.2,
        ease: 'power3.out',
      })

      gsap.from('.hero__chip', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        delay: 1.5,
        ease: 'power2.out',
      })

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
        <img src="/assets/hero-bg.jpg" alt="" className="hero__bg-image" />
        <div className="hero__bg-fade" />
      </div>

      <div className="container hero__inner">
        <h1 ref={headlineRef} className="hero__headline">
          <div className="hero__line hero__line--soft">{t.hero.line1}</div>
          <div className="hero__line hero__line--accent">{t.hero.line2}</div>
          <div className="hero__line hero__line--soft">{t.hero.line3}</div>
        </h1>

        <div className="hero__pill">
          <div className="hero__pill-icon" aria-hidden="true">
            <img src="/assets/iris-isotype.svg" alt="" />
          </div>
          <p className="hero__pill-text">{t.hero.pillText}</p>
          <a href="#contact" className="hero__pill-cta">
            <span>{t.hero.pillCta}</span>
            <span className="hero__pill-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="hero__chips">
          {t.hero.chips.map((c) => (
            <span key={c} className="hero__chip">{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
