import { useLang } from './LanguageContext.jsx'
import './LanguageToggle.css'

const LanguageToggle = () => {
  const { lang, setLang, t } = useLang()

  return (
    <div
      className="lang-toggle"
      role="group"
      aria-label={t.lang.label}
      data-lang={lang}
    >
      <button
        type="button"
        className={`lang-toggle__btn ${lang === 'es' ? 'is-active' : ''}`}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
      >
        {t.lang.es}
      </button>
      <button
        type="button"
        className={`lang-toggle__btn ${lang === 'en' ? 'is-active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        {t.lang.en}
      </button>
      <span className="lang-toggle__pill" aria-hidden="true" />
    </div>
  )
}

export default LanguageToggle
