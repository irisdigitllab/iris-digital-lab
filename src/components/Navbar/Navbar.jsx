import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

const Navbar = () => {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

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
        <a href="#top" className="navbar__logo" aria-label="IRIS Digital Lab">
          <img src="/assets/iris-logo.svg" alt="IRIS Digital Lab" />
        </a>

        <nav className="navbar__nav">
          <a href="#top">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Our Portfolio</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
