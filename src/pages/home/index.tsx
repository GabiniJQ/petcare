import Navbar from '../../shared/components/Navbar'
import Hero from './Hero'
import Services from './Services'

const HomePage = () => {
  return (
    <div className='h-500 bg-secondary min-w-[320px]'>
      <Navbar />

      <Hero />

      <div className='px-4'>
        <Services />
      </div>

      
    </div>
  )
  
}

export default HomePage