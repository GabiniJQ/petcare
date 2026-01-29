import { Button } from '../../shared/components/Button'

const Hero = () => {
  return (
    <section className='hero-bg flex flex-col px-6 py-10 lg:px-20 lg:pb-20'>
      <div className='flex flex-1 flex-col gap-6 justify-end xl:justify-center xl:relative'>
        <h1 className='title text-4xl text-white lg:text-6xl lg:leading-14 xl:max-w-1/3 xl:text-7xl xl:leading-20 2xl:text-8xl'>
          El <span className='text-primary'>cuidado</span> que tu mascota
          merece, <span className='xl:hidden'>cuando no <span className='text-primary'>puedes</span> estar</span>
        </h1>

        <h2 className='text-white font-medium lg:text-2xl xl:max-w-1/3'>
          Conectamos dueños de mascotas con cuidadores confiables para paseos,
          cuidados temporales y servicios especiales, todo desde una sola app.
        </h2>

        <div className='flex gap-4 md:self-center md:w-96 xl:self-start'>
          <Button className='w-full text-xs md:text-base'>
            Buscar cuidador
          </Button>

          <Button variant='secondary' className='w-full text-xs md:text-base'>
            Quiero cuidar
          </Button>
        </div>

        <h1 className='hidden absolute top-1/2 title text-7xl text-white leading-20 max-w-1/3 ml-auto self-end xl:block 2xl:text-8xl 2xl:max-w-2/5'>
          cuando no <span className='text-primary'>puedes</span> estar
        </h1>
      </div>
    </section>
  )
}

export default Hero
