import { useLang } from '../../i18n/LanguageContext.jsx'
import './Footer.css'

const Footer = () => {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__help" data-reveal>
          <div className="footer__help-text">
            <h3>{t.footer.helpTitle}</h3>
            <p>{t.footer.helpDesc}</p>
          </div>
          <a href="mailto:hello@irisdigitallab.com" className="footer__help-cta">
            <span>{t.footer.helpCta}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="footer__bottom">
          <div className="footer__left">
            <p className="footer__copy">
              {t.footer.copy(year)}<br />{t.footer.rights}
            </p>
            <ul className="footer__socials">
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <span>Instagram</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <span>Facebook</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <span>YouTube</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__right">
            <img src="/assets/iris-wordmark.png" alt="Iris Digital Lab" className="footer__wordmark" />
            <nav className="footer__nav">
              <a href="#top">{t.nav.home}</a>
              <a href="#services">{t.nav.services}</a>
              <a href="#work">{t.nav.portfolio}</a>
              <a href="#contact">{t.nav.contact}</a>
            </nav>
          </div>
        </div>

        <div className="footer__hairline" />
      </div>
    </footer>
  )
}

export default Footer
