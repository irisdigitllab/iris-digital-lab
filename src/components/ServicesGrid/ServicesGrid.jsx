import Particles from '../Particles/Particles.jsx'
import { useLang } from '../../i18n/LanguageContext.jsx'
import './ServicesGrid.css'

const ServicesGrid = () => {
  const { t } = useLang()
  const sg = t.servicesGrid

  return (
    <section className="services-grid section" id="capabilities">
      <Particles density={0.00007} />
      <div className="container">
        <div className="services-grid__banner" data-reveal>
          <img src="/assets/iris-wordmark.png" alt="Iris Digital Lab" />
        </div>

        <div className="services-grid__layout" data-stagger>
          <article className="sg-card sg-card--dark sg-card--website" data-stagger-item>
            <div className="sg-card__content">
              <h3 className="sg-card__title">
                {sg.website.title} <span className="sg-card__title-accent">{sg.website.titleAccent}</span>
              </h3>
              <p className="sg-card__desc">{sg.website.desc}</p>
            </div>
            <div className="sg-card__media sg-card__media--website" />
          </article>

          <article className="sg-card sg-card--yellow sg-card--marketing" data-stagger-item>
            <div className="sg-card__content sg-card__content--right">
              <h3 className="sg-card__title sg-card__title--dark">{sg.marketing.title}</h3>
              <p className="sg-card__desc sg-card__desc--dark">
                {sg.marketing.desc} <strong>{sg.marketing.metaAds}</strong> & <strong>{sg.marketing.googleAds}</strong>
              </p>
            </div>
          </article>

          <article className="sg-card sg-card--yellow sg-card--graphic" data-stagger-item>
            <div className="sg-card__content">
              <h3 className="sg-card__title sg-card__title--dark">
                <span className="sg-card__title-soft">{sg.graphic.title}</span><br />
                {sg.graphic.subtitle}
              </h3>
              <p className="sg-card__desc sg-card__desc--dark">{sg.graphic.desc}</p>
            </div>
          </article>

          <article className="sg-card sg-card--dark sg-card--video" data-stagger-item>
            <div className="sg-card__content sg-card__content--right">
              <h3 className="sg-card__title">{sg.video.title}</h3>
              <p className="sg-card__desc">{sg.video.desc}</p>
            </div>
            <div className="sg-card__media sg-card__media--video" />
          </article>

          <article className="sg-card sg-card--dark sg-card--ai" data-stagger-item>
            <div className="sg-card__content">
              <h3 className="sg-card__title">{sg.ai.title}</h3>
              <p className="sg-card__desc">
                <span className="sg-card__highlight">{sg.ai.highlight}</span> — {sg.ai.desc}
              </p>
            </div>
            <div className="sg-card__media sg-card__media--ai" />
          </article>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
