import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Particles from '../components/Particles/Particles.jsx'
import TypewriterText from '../components/TypewriterText/TypewriterText.jsx'
import ProjectModal from '../components/Portfolio/ProjectModal.jsx'
import VideoPopup from '../components/Portfolio/VideoPopup.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { services, getServiceBySlug } from '../data/services.js'
import { projects } from '../data/portfolio.js'
import './ServicePage.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H8M17 7V16" />
  </svg>
)

const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>
)

const ServicePage = () => {
  const { slug } = useParams()
  const { lang, t } = useLang()
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(0)
  const [openProject, setOpenProject] = useState(null)
  const [openVideo, setOpenVideo] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    const s = getServiceBySlug(slug)
    if (!s) return
    const c = s[lang] ?? s.en
    if (!c?.faq?.length) return

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: c.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => { document.getElementById('faq-schema')?.remove() }
  }, [slug, lang])

  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <section className="service-page section">
        <div className="container">
          <p className="service-page__notfound">404 — {slug}</p>
          <Link to="/#services" className="service-page__back">
            ← {t.servicePage.backToServices}
          </Link>
        </div>
      </section>
    )
  }

  const content = service[lang] ?? service.en
  const pageLabels = t.servicePage

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const nextService = services[(currentIndex + 1) % services.length]
  const nextContent = nextService[lang] ?? nextService.en

  const related = (service.relatedSlugs ?? [])
    .map((sl) => projects.find((p) => p.slug === sl))
    .filter(Boolean)

  return (
    <article className="service-page">
      <Helmet>
        <title>{content.title} — IRIS Digital Lab</title>
        <meta name="description" content={content.promise} />
        <link rel="canonical" href={`https://www.irisdigitallab.com/services/${service.slug}`} />
        <meta property="og:title" content={`${content.title} — IRIS Digital Lab`} />
        <meta property="og:description" content={content.promise} />
        <meta property="og:url" content={`https://www.irisdigitallab.com/services/${service.slug}`} />
      </Helmet>
      {/* HERO */}
      <section className="sp-hero section">
        <Particles density={0.00007} />
        <div className="container">
          <nav className="sp-breadcrumbs" aria-label="breadcrumbs">
            <Link to="/">{pageLabels.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <Link to="/#services">{pageLabels.breadcrumbServices}</Link>
            <span aria-hidden="true">›</span>
            <span className="sp-breadcrumbs__current">{content.title}</span>
          </nav>

          <div className="sp-hero__grid">
            <div className="sp-hero__copy" data-reveal>
              <span className="sp-hero__eyebrow">{pageLabels.eyebrow}</span>
              <h1 className="sp-hero__title">
                <TypewriterText text={content.title} startDelay={250} speed={42} />
              </h1>
              <p className="sp-hero__promise">{content.promise}</p>
              <div className="sp-hero__ctas">
                <a href="/#contact" className="sp-btn sp-btn--primary">
                  {content.heroCtaPrimary}
                  <ArrowIcon />
                </a>
                {related.length > 0 && (
                  <a href="#related" className="sp-btn sp-btn--ghost">
                    {content.heroCtaSecondary}
                  </a>
                )}
              </div>
            </div>

            <div className={`sp-hero__media${service.video ? ' sp-hero__media--portrait' : ''}`} data-reveal>
              {service.video ? (
                <video
                  src={service.video}
                  poster={service.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              ) : (
                <img src={service.media} alt={content.title} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="sp-included section">
        <div className="container">
          <h2 className="sp-section-title" data-reveal>{content.includedTitle}</h2>
          <div className="sp-included__grid" data-stagger>
            {content.subservices.map((s) => (
              <div key={s.title} className="sp-sub" data-stagger-item>
                <h3 className="sp-sub__title">{s.title}</h3>
                <p className="sp-sub__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sp-process section">
        <div className="container">
          <h2 className="sp-section-title" data-reveal>{content.processTitle}</h2>
          <ol className="sp-process__list" data-stagger>
            {content.process.map((p) => (
              <li key={p.step} className="sp-step" data-stagger-item>
                <span className="sp-step__num">{p.step}</span>
                <div className="sp-step__body">
                  <h3 className="sp-step__title">{p.title}</h3>
                  <p className="sp-step__desc">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RELATED PORTFOLIO */}
      {related.length > 0 && (
        <section className="sp-related section" id="related">
          <div className="container">
            <h2 className="sp-section-title" data-reveal>{content.portfolioTitle}</h2>
            <div className="sp-related__grid" data-stagger>
              {related.map((p) => {
                const videoCount = p.videos?.length ?? 0
                const isWeb = p.category === 'website-development' && p.url

                const inner = (
                  <>
                    <div className="sp-related__media">
                      <img src={p.cover} alt={p.title} loading="lazy" />
                      {videoCount > 0 && (
                        <span className="sp-related__play"><PlayIcon /></span>
                      )}
                    </div>
                    <div className="sp-related__body">
                      <h4>{p.title}</h4>
                      <p>{p.client} · {p.year}</p>
                    </div>
                  </>
                )

                if (isWeb) {
                  return (
                    <a
                      key={p.slug}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sp-related__card"
                      aria-label={`${p.title} — open website`}
                      data-stagger-item
                    >
                      {inner}
                    </a>
                  )
                }

                const isVideoProject = videoCount > 0
                const handleClick = isVideoProject
                  ? () => setOpenVideo(p)
                  : () => setOpenProject(p)

                return (
                  <button
                    type="button"
                    key={p.slug}
                    className="sp-related__card"
                    onClick={handleClick}
                    aria-label={p.title}
                    data-stagger-item
                  >
                    {inner}
                  </button>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="sp-faq section">
        <div className="container sp-faq__container">
          <h2 className="sp-section-title" data-reveal>{content.faqTitle}</h2>
          <ul className="sp-faq__list">
            {content.faq.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <li key={f.q} className={`sp-faq__item${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="sp-faq__q"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{f.q}</span>
                    <span className="sp-faq__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && <p className="sp-faq__a">{f.a}</p>}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sp-final section">
        <div className="container sp-final__inner" data-reveal>
          <h2 className="sp-final__title">
            <TypewriterText text={content.finalCtaTitle} triggerOnView speed={42} />
          </h2>
          <p className="sp-final__desc">{content.finalCtaDesc}</p>
          <a href="/#contact" className="sp-btn sp-btn--primary sp-btn--lg">
            {content.finalCtaButton}
            <ArrowIcon />
          </a>
        </div>
      </section>

      {/* NEXT SERVICE */}
      <section className="sp-next">
        <button
          type="button"
          className="sp-next__btn container"
          onClick={() => navigate(`/services/${nextService.slug}`)}
        >
          <span className="sp-next__label">{pageLabels.nextLabel}</span>
          <span className="sp-next__title">
            {nextContent.title}
            <ArrowIcon />
          </span>
        </button>
      </section>

      {/* Sticky mobile CTA */}
      <a href="/#contact" className="sp-sticky-cta">
        {content.finalCtaButton}
      </a>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      <VideoPopup project={openVideo} onClose={() => setOpenVideo(null)} />
    </article>
  )
}

export default ServicePage
