import clsx from 'clsx'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type ServiceCardProps = {
  children: ReactNode
  className?: string
}

export const ServiceCard = ({ className, children }: ServiceCardProps) => {
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      className={clsx(
        'relative flex flex-col gap-2 pt-4 bg-blue-black max-w-96 rounded-2xl overflow-hidden shadow-lg shadow-amber-400 border-2 border-amber-400 lg:pt-10 lg:min-h-100 xl:h-full',
        className,
      )}
      variants={item}
    >
      <div className='absolute size-full inset-0 bg-orange-fade'></div>

      {children}
    </motion.div>
  )
}

type ServiceCardTitleProps = {
  children: ReactNode
}

export const ServiceCardTitle = ({ children }: ServiceCardTitleProps) => {
  return <h3 className='font-bold text-white px-4 z-10 text-shadow-black/40 text-shadow-sm lg:px-8 lg:text-lg '>{children}</h3>
}

export const ServiceCardText = ({ children }: ServiceCardTitleProps) => {
  return (
    <p className='flex-1  font-medium text-white text-xs px-4 text-shadow-black/40 text-shadow-sm z-10 lg:px-8 lg:text-base'>
      {children}
    </p>
  )
}

type ServiceCardImageProps = {
  className?: string
  src: string
  alt: string
  width: number
  height: number
}

export const ServiceCardImage = ({
  className,
  src,
  alt,
  width,
  height,
}: ServiceCardImageProps) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} width={width} height={height} className='w-fit z-10'/>
    </div>
  )
}
