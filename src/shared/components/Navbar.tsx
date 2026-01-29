import clsx from 'clsx'
import { HiBars3 } from 'react-icons/hi2'
import MenuMobile from '../../pages/home/MenuMobile'

import { useState } from 'react'
import useTopScreen from '../../shared/hooks/useTopScreen'
import { Button } from './Button'

const Navbar = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isTopScreen, isScrollUp } = useTopScreen()

  return (
    <div
      className={clsx(
        'absolute top-0 z-50 w-full transition',
        (isScrollUp || MobileMenuOpen) && 'fixed',
      )}
    >
      <nav
        className={clsx(
          'flex justify-between items-center relative transition w-full',
          !isTopScreen && 'nav-inset-shadow',
        )}
      >
        {!isTopScreen && (
          <div className='absolute inset-0 backdrop-blur-[3px] -z-10'></div>
        )}

        <img
          src='/img/petcare-logo.webp'
          alt='PetCare Logo'
          width={100}
          height={100}
          className='sm:w-36'
        />

        {/* Desktop Nav Buttons */}
        <div className='hidden w-full justify-between items-center px-10 font-medium lg:flex '>
          <div className='flex gap-4 xl:gap-6'>
            <a href=''>INICIO</a>
            <a href=''>CÓMO FUNCIONA</a>
            <a href=''>SERVICIOS</a>
            <a href=''>TESTIMONIOS</a>
            <a href=''>BENEFICIOS</a>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <a href=''>CONTACTO</a>
            <Button>UNIRSE</Button>
          </div>
        </div>

        <div className='flex items-center justify-center min-w-25 lg:hidden'>
          <button onClick={() => setMobileMenuOpen(!MobileMenuOpen)}>
            <HiBars3 className='text-orange-600 size-12 sm:size-20' />
          </button>
        </div>
      </nav>

      {MobileMenuOpen && (
        <>
          <MenuMobile />

          <div
            className='bg-black/50 min-h-screen'
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        </>
      )}
    </div>
  )
}

export default Navbar
