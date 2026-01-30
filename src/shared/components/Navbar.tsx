import clsx from 'clsx'
import { HiBars3 } from 'react-icons/hi2'
import MenuMobile from '../../pages/home/MenuMobile'

import { useState } from 'react'
import useTopScreen from '../../shared/hooks/useTopScreen'
import { Button } from './Button'
import { NAVIGATION } from '../const/navigation'
import NavBtn from './NavBtn'

const Navbar = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isTopScreen, isScrollUp } = useTopScreen()

  return (
    <header
      className={clsx(
        'absolute top-0 z-50 w-full transition',
        (isScrollUp || MobileMenuOpen) && 'fixed',
      )}
    >
      <nav
        className={clsx(
          'flex justify-between items-center relative transition w-full 2xl:px-40',
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
        />

        {/* Desktop Nav Buttons */}
        <div className='hidden w-full justify-between items-center px-10 text-sm font-medium lg:flex '>
          <div className='flex gap-4 xl:gap-6'>
            <NavBtn className='nav-btn' target={NAVIGATION.HOME}>
              INICIO
            </NavBtn>

            <NavBtn className='nav-btn' target={NAVIGATION.HOW_WORKS}>
              CÓMO FUNCIONA
            </NavBtn>

            <NavBtn className='nav-btn' target={NAVIGATION.SERVICES}>
              SERVICIOS
            </NavBtn>

            <NavBtn className='nav-btn' target={NAVIGATION.TESTIMONIALS}>
              TESTIMONIOS
            </NavBtn>

            <NavBtn className='nav-btn' target={NAVIGATION.BENEFITS}>
              BENEFICIOS
            </NavBtn>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <NavBtn className='nav-btn' target={NAVIGATION.CONTACT}>
              CONTACTO
            </NavBtn>
            <Button>UNIRSE</Button>
          </div>
        </div>

        <div className='flex items-center justify-center min-w-25 lg:hidden'>
          <button onClick={() => setMobileMenuOpen(!MobileMenuOpen)}>
            <HiBars3 className='text-orange-600 size-12' />
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
    </header>
  )
}

export default Navbar
