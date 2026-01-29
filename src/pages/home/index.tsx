import Navbar from '../../shared/components/Navbar'
import ScrollToTop from '../../shared/components/ScrollToTop'
import Benefits from './Benefits'
import FinalCTA from './FinalCTA'
import Footer from './Footer'
import Hero from './Hero'
import Services from './Services'
import Steps from './Steps'
import Testimonials from './Testimonials'

const HomePage = () => {
  return (
    <div className=' min-w-[320px]'>
      <Navbar />

      <Hero />

      <div className=''>
        <Steps />
        
        <Services />

        <Testimonials />

        <Benefits />

        <FinalCTA />

        <ScrollToTop />

        <Footer />
      </div>

      
    </div>
  )
  
}

export default HomePage