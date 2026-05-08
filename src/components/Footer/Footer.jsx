import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top help card */}
        <div className="footer__help" data-reveal>
          <div className="footer__help-text">
            <h3>Do you need help?</h3>
            <p>
              We will provide detailed information about our services, types of work, and top projects. We will calculate the cost and prepare a commercial proposal.
            </p>
          </div>
          <a href="mailto:hello@irisdigitallab.com" className="footer__help-cta">
            <span>Get consultation</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Bottom area */}
        <div className="footer__bottom">
          <div className="footer__left">
            <p className="footer__copy">
              © {new Date().getFullYear()} Iris Digital Lab.<br />All rights reserved.
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
              <a href="#top">Home</a>
              <a href="#services">Services</a>
              <a href="#work">Our Portfolio</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>
        </div>

        <div className="footer__hairline" />
      </div>
    </footer>
  )
}

export default Footer
