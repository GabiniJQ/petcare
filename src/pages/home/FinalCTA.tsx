import { Button } from '../../shared/components/Button'

const FinalCTA = () => {
  return (
    <section className='flex flex-col gap-10 py-10 px-4 sm:py-20 sm:px-20 lg:gap-20'>
      <h1 className='subtitle max-w-60 mx-auto sm:max-w-none'>
        Empieza hoy a <span className='text-primary'>cuidar</span> o encuentra
        un <span className='text-primary'>cuidador</span>
      </h1>

      <div className='flex flex-col items-center justify-center gap-6 px-6 py-20 bg-linear-cta rounded-xl lg:gap-16'>
        <h1 className='text-blue-dark font-semibold lg:text-xl'>
          Únete a la comunidad que pone a las mascotas en primer lugar.
        </h1>

        <div className='flex gap-2 text-xs lg:text-base'>
          <Button className=''>Encontrar cuidador</Button>

          <Button variant='secondary'>Quiero cuidar</Button>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
