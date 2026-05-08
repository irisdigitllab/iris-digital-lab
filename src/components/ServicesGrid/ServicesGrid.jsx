import Particles from '../Particles/Particles.jsx'
import './ServicesGrid.css'

const ServicesGrid = () => {
  return (
    <section className="services-grid section" id="work">
      <Particles density={0.00007} />
      <div className="container">
        {/* Wordmark banner */}
        <div className="services-grid__banner" data-reveal>
          <img src="/assets/iris-wordmark.png" alt="Iris Digital Lab" />
        </div>

        <div className="services-grid__layout" data-stagger>
          {/* Website Development - dark with laptop */}
          <article className="sg-card sg-card--dark sg-card--website" data-stagger-item>
            <div className="sg-card__content">
              <h3 className="sg-card__title">
                Website <span className="sg-card__title-accent">Development</span>
              </h3>
              <p className="sg-card__desc">
                Fast, conversion-optimized websites that work flawlessly on every device, especially mobile.
              </p>
            </div>
            <div className="sg-card__media sg-card__media--website" />
          </article>

          {/* Marketing - yellow */}
          <article className="sg-card sg-card--yellow sg-card--marketing" data-stagger-item>
            <div className="sg-card__content sg-card__content--right">
              <h3 className="sg-card__title sg-card__title--dark">Marketing</h3>
              <p className="sg-card__desc sg-card__desc--dark">
                Practical marketing strategy and execution focused on reaching the right audience and driving measurable growth. <strong>Meta</strong> and <strong>Google ADS</strong>
              </p>
            </div>
          </article>

          {/* Graphic and Brand Design - yellow */}
          <article className="sg-card sg-card--yellow sg-card--graphic" data-stagger-item>
            <div className="sg-card__content">
              <h3 className="sg-card__title sg-card__title--dark">
                <span className="sg-card__title-soft">Graphic</span><br />
                and Brand Design
              </h3>
              <p className="sg-card__desc sg-card__desc--dark">
                Crafting distinctive visual identities that capture your brand&apos;s essence
              </p>
            </div>
          </article>

          {/* Video Production - dark with golden waves */}
          <article className="sg-card sg-card--dark sg-card--video" data-stagger-item>
            <div className="sg-card__content sg-card__content--right">
              <h3 className="sg-card__title">Video Production</h3>
              <p className="sg-card__desc">
                Bringing your ideas to life through high-quality motion and strategic visual design
              </p>
            </div>
            <div className="sg-card__media sg-card__media--video" />
          </article>

          {/* AI Agent Automation - full width */}
          <article className="sg-card sg-card--dark sg-card--ai" data-stagger-item>
            <div className="sg-card__content">
              <h3 className="sg-card__title">AI Agent Automation</h3>
              <p className="sg-card__desc">
                Custom <span className="sg-card__highlight">AI agent workflows</span> that automate repetitive operations, speed up response time and improve consistency
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
