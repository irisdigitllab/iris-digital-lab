import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LanguageContext.jsx'
import './CTA.css'

const CTA = () => {
  const root = useRef(null)
  const { t } = useLang()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta__line', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from('.cta__connect', {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'back.out(1.6)',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from('.cta__hex', {
        opacity: 0,
        scale: 0,
        rotate: -45,
        duration: 0.9,
        stagger: 0.1,
        delay: 0.2,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.to('.cta__hex', {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: 'none',
      })

      gsap.from('.cta__chip', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        delay: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 70%',
          once: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="cta" id="contact">
      {/* Background layers */}
      <div className="cta__bg" aria-hidden="true">
        <div className="cta__stripes" />
        <div className="cta__noise" />

        {/* Decorative hexagons */}
        <img src="/assets/hex-decoration.png" alt="" className="cta__hex cta__hex--tl" />
        <img src="/assets/hex-decoration.png" alt="" className="cta__hex cta__hex--tr" />
        <img src="/assets/hex-decoration.png" alt="" className="cta__hex cta__hex--bl" />
        <img src="/assets/hex-decoration.png" alt="" className="cta__hex cta__hex--br" />

        {/* Yellow blur glows */}
        <div className="cta__glow cta__glow--left" />
        <div className="cta__glow cta__glow--right" />
      </div>

      <div className="container cta__inner">
        <h2 className="cta__headline">
          <div className="cta__line">
            <span className="cta__word">{t.cta.lets}</span>
            <a href="mailto:hello@irisdigitallab.com" className="cta__connect" aria-label={t.cta.connect}>
              <span>{t.cta.connect}</span>
              <span className="cta__connect-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <span className="cta__word">{t.cta.work}</span>
          </div>

          <div className="cta__line cta__line--together">
            <span className="cta__t-outline" aria-hidden="true">T</span>
            <span className="cta__word cta__word--soft">
              <img src="/assets/iris-isotype.svg" alt="" className="cta__inline-iso" /> {t.cta.together}
            </span>
          </div>

          <div className="cta__line">
            <span className="cta__word">{t.cta.letsCreate}</span>
          </div>
        </h2>

        <div className="cta__chips">
          {t.hero.chips.map((c) => (
            <span key={c} className="cta__chip">{c}</span>
          ))}
        </div>

        <a href="#work" className="cta__portfolio">
          {t.cta.portfolio}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default CTA
