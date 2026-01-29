import { MdCheckCircleOutline, MdOutlineCalendarMonth, MdPeopleOutline } from 'react-icons/md'
import IconCircle from '../../shared/components/IconCircle'

const Steps = () => {
  return (
    <section className='flex flex-col gap-10 py-10 px-4 sm:py-20 sm:px-20 lg:gap-16 xl:px-40'>
      <h1 className='subtitle'>Cuidar a tu mascota nunca fue tan fácil</h1>

      <div className='flex flex-col lg:max-w-1/2 lg:mx-auto'>
        <div className='flex justify-between gap-4 lg:gap-6'>
          <div className='flex items-center justify-center'>
            <IconCircle>
              <MdOutlineCalendarMonth className='text-primary size-6 lg:size-8' />
            </IconCircle>
          </div>

          <div className='flex flex-col gap-1 w-5/6'>
            <h2 className='text-sm font-medium lg:text-lg'>
              1. Busca el servicio que necesitas
            </h2>

            <p className='text-xs lg:text-base'>
              Paseos, cuidado por horas, baño, peluquería o atención especial.
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center after:border after:h-8 after:my-4'></div>

        <div className='flex justify-between gap-4 lg:gap-6'>
          <div className='flex items-center justify-center'>
            <IconCircle>
              <MdPeopleOutline className='text-primary size-6 lg:size-8' />
            </IconCircle>
          </div>

          <div className='flex flex-col gap-1 w-5/6'>
            <h2 className='text-sm font-medium lg:text-lg'>
              2. Elige un cuidador verificado
            </h2>

            <p className='text-xs lg:text-base'>
              Revisa perfiles, calificaciones y experiencia.
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center after:border after:h-8 after:my-4'></div>

        <div className='flex justify-between items-center gap-4 lg:gap-6'>
          <IconCircle>
            <MdCheckCircleOutline  className='text-primary size-6 lg:size-8' />
          </IconCircle>

          <div className='flex flex-col gap-1 w-5/6'>
            <h2 className='text-sm font-medium lg:text-lg'>3. Reserva y relajate</h2>

            <p className='text-xs lg:text-base'>
              Tu mascota queda en buenas manos, tú sigues con tu día.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
