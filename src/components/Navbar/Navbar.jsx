import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import LanguageToggle from '../../i18n/LanguageToggle.jsx'
import { useLang } from '../../i18n/LanguageContext.jsx'
import './Navbar.css'

const Navbar = () => {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLang()
  const location = useLocation()

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

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location])

  // Lock scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [open])

  return (
    <>
    <header
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}
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
          <button
            type="button"
            className="navbar__burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>

    {/* Rendered OUTSIDE <header>: the header carries a leftover GSAP transform,
        which would make this fixed overlay position against the header box
        (collapsing it) instead of the viewport. */}
    <div className={`navbar__mobile ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <nav className="navbar__mobile-nav">
        <Link to="/">{t.nav.home}</Link>
        <Link to="/#services">{t.nav.services}</Link>
        <Link to="/#work">{t.nav.portfolio}</Link>
        <Link to="/#contact">{t.nav.contact}</Link>
      </nav>
    </div>
    </>
  )
}

export default Navbar
