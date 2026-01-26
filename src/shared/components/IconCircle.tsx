import clsx from 'clsx'
import type { ReactNode } from 'react'

type IconCircleProps = {
  children: ReactNode
  className?: string
}

const IconCircle = ({ children, className }: IconCircleProps) => {
  return (
    <div className={clsx('flex items-center justify-center bg-blue-icon size-12 rounded-full', className)}>
      {children}
    </div>
  )
}

export default IconCircle