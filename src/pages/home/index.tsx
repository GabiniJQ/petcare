import Navbar from '../../shared/components/Navbar'
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
      </div>

      
    </div>
  )
  
}

export default HomePage