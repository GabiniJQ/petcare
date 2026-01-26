import clsx from 'clsx'
import { HiBars3 } from 'react-icons/hi2'
import MenuMobile from '../../pages/home/MenuMobile'

import { useState } from 'react'
import useTopScreen from '../../shared/hooks/useTopScreen'

const Navbar = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isTopScreen } = useTopScreen()

  return (
    <div className='fixed top-0 z-50 w-full'>
      <nav
        className={clsx(
          'flex justify-between items-center relative transition',
          !isTopScreen && 'nav-inset-shadow',
        )}
      >
        {
          !isTopScreen && <div className='absolute inset-0 backdrop-blur-xs -z-10 '></div>
        }

        <img
          src='/img/petcare-logo.webp'
          alt='PetCare Logo'
          width={120}
          height={120}
        />

        <div className='flex items-center justify-center w-1/6'>
          <button onClick={() => setMobileMenuOpen(!MobileMenuOpen)}>
            <HiBars3 className='text-orange-600 size-12' />
          </button>
        </div>
      </nav>

      {MobileMenuOpen && <MenuMobile />}
    </div>
  )
}

export default Navbar
