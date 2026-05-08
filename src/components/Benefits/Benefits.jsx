import './Benefits.css'

const items = [
  'Creative Excellence',
  'Client-Centered',
  'Results-Driven',
  'Global Reach',
  'Satisfy Clients',
]

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__row" data-stagger>
          {items.map((label) => (
            <div key={label} className="benefit-pill" data-stagger-item>
              <span className="benefit-pill__dot" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
