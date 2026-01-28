import clsx from 'clsx'
import type { ReactNode } from 'react'

type ServiceCardProps = {
  children: ReactNode
  className?: string
}

export const ServiceCard = ({ className, children }: ServiceCardProps) => {
  return (
    <div
      className={clsx(
        'relative flex flex-col gap-2 pt-4 bg-card-service rounded-2xl overflow-hidden shadow-md shadow-gray-500 border-2 border-primary/10',
        className,
      )}
    >
      <div className='absolute -top-4 left-1/2 translate-x-1/3 w-1/3 h-1/3 bg-yellow-200 blur-3xl'></div>

      <div className='absolute bottom-0 left-0 w-2/3 h-1/3 bg-yellow-200 blur-2xl'></div>

      {children}
    </div>
  )
}

type ServiceCardTitleProps = {
  children: ReactNode
}

export const ServiceCardTitle = ({ children }: ServiceCardTitleProps) => {
  return <h3 className='font-bold text-white px-4 z-10 text-shadow-black/40 text-shadow-sm'>{children}</h3>
}

export const ServiceCardText = ({ children }: ServiceCardTitleProps) => {
  return (
    <p className='font-medium text-white text-xs px-4 text-shadow-black/40 text-shadow-sm z-10'>
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
