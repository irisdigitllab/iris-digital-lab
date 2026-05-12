import { useState } from 'react'
import { useLang } from '../../i18n/LanguageContext.jsx'
import TypewriterText from '../TypewriterText/TypewriterText.jsx'
import './QuoteForm.css'

const TOTAL_STEPS = 4

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

const QuoteForm = () => {
  const { t } = useLang()
  const q = t.quote
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({
    services: [],
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
  })

  const toggleService = (label) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(label)
        ? f.services.filter((s) => s !== label)
        : [...f.services, label],
    }))
  }

  const canNext = () => {
    if (step === 0) return form.services.length > 0
    if (step === 1) return !!form.budget
    if (step === 2) return !!form.timeline
    if (step === 3) return form.name.trim() && /\S+@\S+\.\S+/.test(form.email)
    return true
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'quote',
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          services: form.services.join(', '),
          budget: form.budget,
          timeline: form.timeline,
          details: form.details,
        }),
      })
      if (!res.ok) throw new Error('Network')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const progress = ((step + 1) / TOTAL_STEPS) * 100

  if (status === 'success') {
    return (
      <section className="qf section" id="quote">
        <div className="container qf__success">
          <span className="qf__eyebrow">{q.eyebrow}</span>
          <h2 className="qf__title">{q.successTitle}</h2>
          <p className="qf__subtitle">{q.successBody}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="qf section" id="quote">
      <div className="container">
        <header className="qf__head" data-reveal>
          <span className="qf__eyebrow">{q.eyebrow}</span>
          <h2 className="qf__title">
            <TypewriterText text={q.title} triggerOnView speed={40} />
          </h2>
          <p className="qf__subtitle">{q.subtitle}</p>
        </header>

        <form
          name="quote"
          onSubmit={submit}
          className="qf__form"
          data-netlify="true"
          netlifyhoneypot="bot-field"
        >
          <input type="hidden" name="form-name" value="quote" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="qf__progress" aria-hidden="true">
            <div className="qf__progress-bar" style={{ width: `${progress}%` }} />
            <span className="qf__progress-label">
              {q.step} {step + 1} {q.of} {TOTAL_STEPS}
            </span>
          </div>

          {/* Step 1: services */}
          {step === 0 && (
            <div className="qf__step">
              <h3 className="qf__step-title">{q.step1Title}</h3>
              <p className="qf__step-help">{q.step1Help}</p>
              <div className="qf__chips">
                {q.services.map((s) => (
                  <button
                    type="button"
                    key={s}
                    className={`qf__chip${form.services.includes(s) ? ' is-active' : ''}`}
                    onClick={() => toggleService(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: budget */}
          {step === 1 && (
            <div className="qf__step">
              <h3 className="qf__step-title">{q.step2Title}</h3>
              <div className="qf__chips">
                {q.budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    className={`qf__chip${form.budget === b ? ' is-active' : ''}`}
                    onClick={() => setForm({ ...form, budget: b })}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: timeline */}
          {step === 2 && (
            <div className="qf__step">
              <h3 className="qf__step-title">{q.step3Title}</h3>
              <div className="qf__chips">
                {q.timelines.map((tt) => (
                  <button
                    type="button"
                    key={tt}
                    className={`qf__chip${form.timeline === tt ? ' is-active' : ''}`}
                    onClick={() => setForm({ ...form, timeline: tt })}
                  >
                    {tt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: contact */}
          {step === 3 && (
            <div className="qf__step">
              <h3 className="qf__step-title">{q.step4Title}</h3>
              <p className="qf__step-help">{q.step4Help}</p>
              <div className="qf__fields">
                <label className="qf__field">
                  <span>{q.labelName}</span>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </label>
                <label className="qf__field">
                  <span>{q.labelEmail}</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </label>
                <label className="qf__field">
                  <span>{q.labelPhone}</span>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
                <label className="qf__field">
                  <span>{q.labelCompany}</span>
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </label>
                <label className="qf__field qf__field--full">
                  <span>{q.labelDetails}</span>
                  <textarea
                    name="details"
                    rows="4"
                    placeholder={q.detailsPlaceholder}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                  />
                </label>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="qf__error">
              <strong>{q.errorTitle}</strong>
              <p>{q.errorBody}</p>
            </div>
          )}

          <div className="qf__actions">
            {step > 0 && (
              <button
                type="button"
                className="qf__btn qf__btn--ghost"
                onClick={() => setStep((s) => s - 1)}
                disabled={status === 'sending'}
              >
                ← {q.back}
              </button>
            )}
            {step < TOTAL_STEPS - 1 && (
              <button
                type="button"
                className="qf__btn qf__btn--primary"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
              >
                {q.next} →
              </button>
            )}
            {step === TOTAL_STEPS - 1 && (
              <button
                type="submit"
                className="qf__btn qf__btn--primary"
                disabled={!canNext() || status === 'sending'}
              >
                {status === 'sending' ? q.sending : q.submit}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default QuoteForm
