import { BiSolidConversation } from 'react-icons/bi'
import { MdContactSupport, MdVerifiedUser } from 'react-icons/md'

const Benefits = () => {
  return (
    <section className='flex flex-col gap-10 py-10 px-4 bg-primary'>
      <h1 className='subtitle text-white'>
        Tu tranquilidad es nuestra prioridad
      </h1>

      <div className='grid gap-6'>
        <div className='flex flex-col items-start gap-2 bg-linear-to-br from-primary/90 to-yellow-400 text-white shadow-md border-2 border-amber-500 rounded-xl p-4'>
          <div className='flex items-center justify-center bg-linear-to-br from-orange-200 to-orange-400 p-4 rounded-full'>
            <MdVerifiedUser className='size-6' />
          </div>

          <h2 className='font-title font-semibold text-xs'>
            Cuidadores verificados
          </h2>

          <p className='text-2xs text-shadow-2xs'>
            Todos los cuidadores pasan por un proceso de verificación que
            incluye validación de identidad y revisión de información personal.
            Solo personas comprometidas y responsables pueden ofrecer servicios
            en la plataforma.
          </p>
        </div>

        <div className='flex flex-col items-start gap-2 bg-linear-to-br from-primary/90 to-yellow-400 text-white shadow-md border-2 border-amber-500 rounded-xl p-4'>
          <div className='flex items-center justify-center bg-linear-to-br from-orange-200 to-orange-400 p-4 rounded-full'>
            <BiSolidConversation className='size-6' />
          </div>

          <h2 className='font-title font-semibold text-xs'>
            Comunicación directa y segura
          </h2>

          <p className='text-2xs text-shadow-2xs'>
            Habla directamente con el cuidador a través de la app antes y
            durante el servicio. Coordina horarios, necesidades especiales y
            recibe actualizaciones sin compartir datos personales.
          </p>
        </div>

        <div className='flex flex-col items-start gap-2 bg-linear-to-br from-primary/90 to-yellow-400 text-white shadow-md border-2 border-amber-500 rounded-xl p-4'>
          <div className='flex items-center justify-center bg-linear-to-br from-orange-200 to-orange-400 p-4 rounded-full'>
            <MdContactSupport className='size-6' />
          </div>

          <h2 className='font-title font-semibold text-xs'>
            Soporte y acompañamiento
          </h2>

          <p className='text-2xs text-shadow-2xs'>
            Nuestro equipo de soporte está disponible para ayudarte en cualquier
            momento. Te acompañamos antes, durante y después del servicio para
            resolver dudas o inconvenientes.
          </p>
        </div>
      </div>

      <div className='rounded-xl overflow-hidden'>
        <img
          src='/img/puppies-collection.webp'
          alt='Foto de cachorros'
          width='1875'
          height='1250'
          loading='lazy'
          className='w-fit'
        />
      </div>
    </section>
  )
}

export default Benefits
