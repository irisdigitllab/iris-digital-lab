import Particles from '../Particles/Particles.jsx'
import { useLang } from '../../i18n/LanguageContext.jsx'
import './Services.css'

const ICONS = ['✦', '◐', '◈', '▶', '⚡']

const Services = () => {
  const { t } = useLang()

  return (
    <section className="services section" id="services">
      <Particles density={0.00007} />
      <div className="container">
        <div className="services__head" data-reveal>
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="services__title">
            {t.services.titleA} <em>{t.services.titleB}</em>
          </h2>
          <a href="#work" className="services__link">
            {t.services.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="services__grid" data-stagger>
          {t.services.items.map((s, i) => (
            <article key={s.title} className="service-card" data-stagger-item>
              <div className="service-card__icon">{ICONS[i] ?? '✦'}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
