import { motion } from 'motion/react'
import { Button } from '../../shared/components/Button'
import { NAVIGATION } from '../../shared/const/navigation'

const Hero = () => {
  const container = {
    show: {
      transition: {
        delayChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: (order: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: order * 0.2,
      },
    }),
  }

  return (
    <section className='hero-bg flex flex-col px-6 py-10 lg:px-20 lg:pb-20 2xl:px-40' id={NAVIGATION.HOME}>
      <motion.div
        className='flex flex-1 flex-col gap-6 justify-end xl:justify-center xl:relative'
        variants={container}
        initial='hidden'
        animate='show'
      >
        <motion.h1
          className='title text-4xl text-white lg:text-6xl lg:leading-14 xl:max-w-1/3 xl:text-7xl xl:leading-20 2xl:text-8xl'
          variants={item}
          custom={0}
        >
          El <span className='text-primary'>cuidado</span> que tu mascota
          merece,{' '}
          <span className='xl:hidden'>
            cuando no <span className='text-primary'>puedes</span> estar
          </span>
        </motion.h1>

        <motion.h2
          className='text-white font-medium lg:text-2xl xl:max-w-1/3 '
          variants={item}
          custom={2}
        >
          Conectamos dueños de mascotas con cuidadores confiables para paseos,
          cuidados temporales y servicios especiales, todo desde una sola app.
        </motion.h2>

        <motion.div
          className='flex gap-4 md:self-center md:w-96 xl:self-start'
          variants={item}
          custom={3}
        >
          <Button className='w-full text-xs md:text-base'>
            Buscar cuidador
          </Button>

          <Button variant='secondary' className='w-full text-xs md:text-base'>
            Quiero cuidar
          </Button>
        </motion.div>

        <motion.h1
          className='hidden absolute top-1/2 title text-7xl text-white leading-20 max-w-1/3 ml-auto self-end xl:block 2xl:text-8xl 2xl:max-w-2/5'
          variants={item}
          custom={0}
        >
          cuando no <span className='text-primary'>puedes</span> estar
        </motion.h1>
      </motion.div>
    </section>
  )
}

export default Hero
