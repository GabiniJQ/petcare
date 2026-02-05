import clsx from 'clsx'
import type { ReactNode } from 'react'
import useStore from '../../store/useStore'
import useTopScreen from '../hooks/useTopScreen'
import scrollTo from '../utils/scrollTo'

type NavBtnProps = {
  className?: string
  children: ReactNode
  target: string
}

const NavBtn = ({ className, children, target }: NavBtnProps) => {
  const { currentSection } = useStore()
  const { isScrollUp } = useTopScreen()

  return (
    <button
      className={clsx(
        className,
        currentSection === target && 'text-primary ',
        isScrollUp && 'lg:text-shadow-neutral-50 lg:text-shadow-md',
      )}
      onClick={() => {
        scrollTo(target)
      }}
    >
      {children}
    </button>
  )
}

export default NavBtn
