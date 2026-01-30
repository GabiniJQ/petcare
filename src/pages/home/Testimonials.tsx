import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi'
import { GoDash } from 'react-icons/go'

const TestimonialData = [
  {
    author: 'Andrés, dueño de Rocky',
    text: 'Pude viajar tranquilo sabiendo que mi perro estaba bien cuidado. El proceso fue súper fácil y el cuidador increíble.',
    imgSrc: 'img/testimonial-one.webp',
    imgAlt: 'Testimonio uno foto',
  },
  {
    author: 'Laura, cuidadora',
    text: 'Me encanta poder trabajar cuidando mascotas. La app es clara y los dueños son muy respetuosos.',
    imgSrc: 'img/testimonial-two.webp',
    imgAlt: 'Testimonio dos foto',
  },
  {
    author: 'Camila, dueña de Max',
    text: 'Encontré paseadores confiables cerca de mi casa. Mi perro los ama.',
    imgSrc: 'img/testimonial-three.webp',
    imgAlt: 'Testimonio tres foto',
  },
]

const Testimonials = () => {
  return (
    <section className='flex flex-col items-center gap-10 py-10 px-4 sm:py-20 sm:px-20 lg:gap-20 xl:px-40'>
      <h1 className='subtitle'>
        Dueños y cuidadores que ya confían en nosotros
      </h1>

      <div className='grid gap-4 md:grid-cols-3 xl:max-w-4/5 xl:mx-auto'>
        {TestimonialData.map(({ author, text, imgSrc, imgAlt }) => (
          <TestimonialCard
            key={author}
            author={author}
            text={text}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
          />
        ))}
      </div>

      <h2 className='font-medium text-xs italic lg:text-lg'>
        Testimonios auténticos que reflejan cómo nuestra plataforma
        <span className='text-primary'> conecta </span>
        personas, <span className='text-primary'> genera </span> confianza y{' '}
        <span className='text-primary'> mejora </span> la vida de las mascotas.
      </h2>
    </section>
  )
}

type TestimonialCardProps = {
  imgSrc: string
  imgAlt: string
  text: string
  author: string
}

export const TestimonialCard = ({
  imgSrc,
  imgAlt,
  text,
  author,
}: TestimonialCardProps) => {
  return (
    <div className='flex flex-col gap-2 p-6 rounded-2xl shadow-md bg-white max-w-87.5'>
      <div className='flex flex-col gap-2 h-2/3'>
        <BiSolidQuoteLeft className='text-primary size-8 xl:size-14' />

        <p className='text-2xs font-medium h-2/3 lg:text-base'>{text}</p>

        <BiSolidQuoteRight className='text-primary size-8 self-end xl:size-14' />
      </div>

      <div className='flex gap-1 items-center'>
        <div className='flex items-center justify-center w-1/3'>
          <div className='flex items-center justify-center h-12.5 rounded-full overflow-hidden'>
            <img src={imgSrc} alt={imgAlt} width={50} height={50} />
          </div>
        </div>

        <p className='flex items-center gap-1 w-2/3 text-2xs lg:text-sm'>
          <GoDash />
          {author}
        </p>
      </div>
    </div>
  )
}

export default Testimonials
