import { motion } from 'motion/react'
import { BiSolidConversation } from 'react-icons/bi'
import { MdContactSupport, MdVerifiedUser } from 'react-icons/md'
import useStore from '../../store/useStore'
import { NAVIGATION } from '../../shared/const/navigation'

const Benefits = () => {
  const { updateCurrentSection } = useStore()

  return (
    <motion.section
      className='flex flex-col gap-10 py-10 px-4 bg-primary sm:py-20 sm:px-20 lg:gap-20 xl:px-60 xl:bg-benefits'
      onViewportEnter={() => updateCurrentSection(NAVIGATION.BENEFITS)}
      viewport={{ amount: 0.8 }}
    >
      <h1 className='subtitle text-white scroll-mt-25' id={NAVIGATION.BENEFITS}>
        Tu tranquilidad es nuestra prioridad
      </h1>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 '>
        <div className='flex flex-col items-start gap-2 bg-benefit-card lg:gap-6 xl:via-primary/80'>
          <div className='flex items-center justify-center bg-linear-to-br from-orange-200 to-orange-400 p-4 rounded-full'>
            <MdVerifiedUser className='size-6' />
          </div>

          <h2 className='font-title font-semibold text-xs lg:text-lg flex-1'>
            Cuidadores verificados
          </h2>

          <p className='text-2xs text-shadow-2xs lg:flex-1 lg:text-sm'>
            Todos los cuidadores pasan por un proceso de verificación que
            incluye validación de identidad y revisión de información personal.
            Solo personas comprometidas y responsables pueden ofrecer servicios
            en la plataforma.
          </p>
        </div>

        <div className='flex flex-col items-start gap-2 bg-benefit-card lg:gap-6 xl:via-primary/80'>
          <div className='flex items-center justify-center bg-linear-to-br from-orange-200 to-orange-400 p-4 rounded-full'>
            <BiSolidConversation className='size-6' />
          </div>

          <h2 className='font-title font-semibold text-xs lg:text-lg flex-1'>
            Comunicación directa y segura
          </h2>

          <p className='text-2xs text-shadow-2xs lg:flex-1 lg:text-sm'>
            Habla directamente con el cuidador a través de la app antes y
            durante el servicio. Coordina horarios, necesidades especiales y
            recibe actualizaciones sin compartir datos personales.
          </p>
        </div>

        <div className='flex flex-col items-start gap-2 bg-benefit-card md:col-span-2 lg:col-span-1 lg:gap-6 xl:via-primary/80'>
          <div className='flex items-center justify-center bg-linear-to-br from-orange-200 to-orange-400 p-4 rounded-full'>
            <MdContactSupport className='size-6' />
          </div>

          <h2 className='font-title font-semibold text-xs lg:text-lg flex-1'>
            Soporte y acompañamiento
          </h2>

          <p className='text-2xs text-shadow-2xs lg:flex-1 lg:text-sm'>
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
          className='w-fit xl:hidden'
        />
      </div>
    </motion.section>
  )
}

export default Benefits
