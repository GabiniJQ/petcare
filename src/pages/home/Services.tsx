import {
  ServiceCard,
  ServiceCardImage,
  ServiceCardText,
  ServiceCardTitle,
} from '../../shared/components/ServiceCard'

const Services = () => {
  return (
    <section className='flex flex-col gap-10  py-10 px-4 bg-card-service'>
      <h1 className='subtitle text-white'>Servicios pensados para cada necesidad</h1>

      <div className='grid gap-4'>
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
            className='relative -bottom-4'
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
            className='relative -bottom-4'
            src='img/dog-medical-service.webp'
            alt='Tarjeta de paseo personalizado'
            width={340}
            height={380}
          />
        </ServiceCard>
      </div>
    </section>
  )
}

export default Services
