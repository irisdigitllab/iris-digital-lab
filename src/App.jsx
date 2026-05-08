import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import CTA from './components/CTA/CTA.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import ServicesGrid from './components/ServicesGrid/ServicesGrid.jsx'
import Footer from './components/Footer/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      gsap.utils.toArray('[data-stagger]').forEach((parent) => {
        const items = parent.querySelectorAll('[data-stagger-item]')
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
        <Testimonials />
        <ServicesGrid />
      </main>
      <Footer />
    </>
  )
}

export default App
