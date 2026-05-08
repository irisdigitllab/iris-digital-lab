import Particles from '../Particles/Particles.jsx'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'IRIS Digital Lab is a game-changer! They built a stunning website and used AI automation to scale our marketing efforts. Our efficiency has never been higher.',
    name: 'J. AMANDER',
    role: 'Ceo of Capital Agency',
    variant: 'yellow',
  },
  {
    quote: 'Incredible team! IRIS Digital Lab combines sleek web design with powerful AI-driven marketing. They didn\'t just give us a new look; they automated our growth.',
    name: 'J. BARRON',
    role: 'President, Newz Jsc',
    variant: 'dark',
  },
  {
    quote: '"Artfolio ability to create a high quality user interface stands out. It\'s something we placed a premium on. Recommended!."',
    name: 'H. JACKSON',
    role: 'President, Godila Jsc',
    variant: 'yellow',
  },
  {
    quote: '"Artfolio ability to create a high quality user interface stands out. It\'s something we placed a premium on. Recommended!."',
    name: 'H. JACKSON',
    role: 'President, Godila Jsc',
    variant: 'dark',
  },
]

const benefits = [
  'Creative Excellence',
  'Client-Centered',
  'Results-Driven',
  'Global Reach',
  'Satisfy Clients',
]

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <Particles density={0.00007} />
      <div className="container">
        <h2 className="testimonials__title" data-reveal>
          <span className="testimonials__title-soft">WHAT OUR</span>{' '}
          <span className="testimonials__title-accent">CLIENTS SAY</span>
        </h2>

        <div className="testimonials__pills" data-stagger>
          {benefits.map((b) => (
            <span key={b} className="testimonials__pill" data-stagger-item>
              <span className="testimonials__pill-dot" />
              {b}
            </span>
          ))}
        </div>

        <div className="testimonials__grid" data-stagger>
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`tcard tcard--${t.variant}`}
              data-stagger-item
            >
              <div className="tcard__logo" aria-hidden="true">
                <svg viewBox="0 0 60 60" width="40" height="40">
                  <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <text x="30" y="38" textAnchor="middle" fontSize="20" fontWeight="700" fill="currentColor" fontFamily="Inter, sans-serif">DR</text>
                </svg>
              </div>

              <p className="tcard__quote">{t.quote}</p>

              <div className="tcard__person">
                <div className="tcard__role">{t.role}</div>
                <div className="tcard__name">{t.name}</div>
              </div>

              <span className="tcard__quote-mark" aria-hidden="true">&rdquo;</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
