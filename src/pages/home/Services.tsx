import { motion, stagger } from 'motion/react'
import {
  ServiceCard,
  ServiceCardImage,
  ServiceCardText,
  ServiceCardTitle,
} from '../../shared/components/ServiceCard'

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: stagger(0.1),
      },
    },
  }

  return (
    <section className='flex flex-col gap-10  py-10 px-4 bg-blue-black sm:py-20 sm:px-20 xl:px-40'>
      <h1 className='subtitle text-white'>
        Servicios pensados para cada necesidad
      </h1>

      <motion.div
        className='grid gap-4 md:grid-cols-2 lg:p-10 place-items-center xl:max-w-4/5 xl:mx-auto 2xl:grid-cols-4'
        whileInView='show'
        initial='hidden'
        variants={container}
        viewport={{ amount: 0.7, once: true }}
      >
        <ServiceCard>
          <ServiceCardTitle>Paseos diarios y personalizados</ServiceCardTitle>

          <ServiceCardText>
            Tu mascota se ejercita, se divierte y mantiene una rutina saludable,
            incluso cuando no puedes sacarla tú.
          </ServiceCardText>

          <ServiceCardImage
            className='relative -bottom-2'
            src='img/walk-service.webp'
            alt='Tarjeta de paseo personalizado'
            width={340}
            height={380}
          />
        </ServiceCard>

        <ServiceCard>
          <ServiceCardTitle>Cuidado por horas o días</ServiceCardTitle>

          <ServiceCardText>
            Ideal para viajes, trabajo o compromisos. Tu mascota recibe
            atención, comida y cariño.
          </ServiceCardText>

          <ServiceCardImage
            className='relative -bottom-6'
            src='img/sitting-card-service.webp'
            alt='Tarjeta de paseo personalizado'
            width={340}
            height={380}
          />
        </ServiceCard>

        <ServiceCard>
          <ServiceCardTitle>Higiene y estética sin estrés</ServiceCardTitle>

          <ServiceCardText>
            Baños, corte de pelo y cuidado profesional sin largas esperas ni
            traslados innecesarios.
          </ServiceCardText>

          <ServiceCardImage
            className='relative -bottom-4'
            src='img/dog-care-service.webp'
            alt='Tarjeta de paseo personalizado'
            width={340}
            height={380}
          />
        </ServiceCard>

        <ServiceCard>
          <ServiceCardTitle>Atención para mascotas </ServiceCardTitle>

          <ServiceCardText>
            Medicamentos, dietas especiales o cuidado de mascotas mayores con
            necesidades específicas.
          </ServiceCardText>

          <ServiceCardImage
            className='relative -bottom-4 md:scale-105'
            src='img/dog-medical-service.webp'
            alt='Tarjeta de paseo personalizado'
            width={340}
            height={380}
          />
        </ServiceCard>
      </motion.div>
    </section>
  )
}

export default Services
