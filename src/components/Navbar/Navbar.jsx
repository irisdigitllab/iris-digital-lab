import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import LanguageToggle from '../../i18n/LanguageToggle.jsx'
import { useLang } from '../../i18n/LanguageContext.jsx'
import './Navbar.css'

const Navbar = () => {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLang()

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 }
    )

    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="IRIS Digital Lab">
          <img src="/assets/iris-logo.svg" alt="IRIS Digital Lab" />
        </Link>

        <nav className="navbar__nav">
          <Link to="/">{t.nav.home}</Link>
          <Link to="/#services">{t.nav.services}</Link>
          <Link to="/#work">{t.nav.portfolio}</Link>
          <Link to="/#contact">{t.nav.contact}</Link>
        </nav>

        <div className="navbar__actions">
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar
