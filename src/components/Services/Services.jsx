import Particles from '../Particles/Particles.jsx'
import './Services.css'

const services = [
  {
    icon: '✦',
    title: 'Brand Identity Design',
    desc: "Crafting distinctive visual identities that capture your brand's essence.",
  },
  {
    icon: '◐',
    title: 'Website Development & Automation',
    desc: 'Fast, conversion-optimized websites that work flawlessly on every device, especially mobile.',
  },
  {
    icon: '◈',
    title: 'Marketing Campaigns',
    desc: 'Practical marketing strategy and execution focused on reaching the right audience and driving measurable growth. Meta and Google ADS.',
  },
  {
    icon: '▶',
    title: 'Video Production',
    desc: 'Bringing your ideas to life through high quality motion and strategic visual design.',
  },
  {
    icon: '⚡',
    title: 'AI Agent Automation',
    desc: 'Custom AI agent workflows that automate repetitive operations, speed up response time and improve consistency.',
  },
]

const Services = () => {
  return (
    <section className="services section" id="services">
      <Particles density={0.00007} />
      <div className="container">
        <div className="services__head" data-reveal>
          <span className="eyebrow">{'{ Our Services }'}</span>
          <h2 className="services__title">
            Creative Solutions <em>Designed To Inspire...</em>
          </h2>
          <a href="#work" className="services__link">
            View Our Portfolio
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="services__grid" data-stagger>
          {services.map((s) => (
            <article key={s.title} className="service-card" data-stagger-item>
              <div className="service-card__icon">{s.icon}</div>
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
