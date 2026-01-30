import { type ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-105 hover:-translate-y-0.5',
        {
          'bg-primary text-white hover:bg-primary-dark focus:ring-primary':
            variant === 'primary',

          'bg-secondary text-primary border-primary border hover:bg-secondary-dark focus:ring-secondary':
            variant === 'secondary',
        },

        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
