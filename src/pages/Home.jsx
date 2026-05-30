import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero/Hero.jsx'
import Services from '../components/Services/Services.jsx'
import Portfolio from '../components/Portfolio/Portfolio.jsx'
import CTA from '../components/CTA/CTA.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import QuoteForm from '../components/QuoteForm/QuoteForm.jsx'

const Home = () => (
  <>
    <Helmet>
      <title>IRIS Digital Lab — We build brands that mean business</title>
      <meta name="description" content="Website development & brand identity design for South Florida companies ready to grow." />
    </Helmet>
    <Hero />
    <Services />
    <Portfolio />
    <CTA />
    <Testimonials />
    <QuoteForm />
  </>
)

export default Home
