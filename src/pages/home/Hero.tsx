import { Button } from '../../shared/components/Button'


const Hero = () => {
  return (
    <section className='hero-bg flex flex-col px-6 py-10'>
      <div className='flex flex-1 flex-col gap-6 justify-end'>
        <h1 className='title text-4xl text-white'>
          El <span className='text-primary'>cuidado</span> que tu mascota merece,{' '}
          cuando no <span className='text-primary'>puedes</span> estar
        </h1>

        <h2 className='text-white font-medium'>Conectamos dueños de mascotas con cuidadores confiables para{' '}
          paseos, cuidados temporales y servicios especiales, todo desde una sola app.
        </h2>

        <div className='flex gap-4 '>
          <Button className='w-full'>
            Buscar cuidador
          </Button>

          <Button variant='secondary' className='w-full'>
            Quiero cuidar
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero