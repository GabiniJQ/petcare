import { NAVIGATION } from '../../shared/const/navigation'
import NavBtn from '../../shared/components/NavBtn'

const MenuMobile = () => {
  return (
    <div className='flex flex-col  absolute w-full text-black bg-secondary border-y border-gray-200 shadow'>
      <NavBtn className='mobile-nav-btn' target={NAVIGATION.HOME}>
        INICIO
      </NavBtn>

      <NavBtn className='mobile-nav-btn' target={NAVIGATION.HOW_WORKS}>
        CÓMO FUNCIONA
      </NavBtn>

      <NavBtn className='mobile-nav-btn' target={NAVIGATION.SERVICES}>
        SERVICIOS
      </NavBtn>

      <NavBtn className='mobile-nav-btn' target={NAVIGATION.TESTIMONIALS}>
        TESTIMONIOS
      </NavBtn>

      <NavBtn className='mobile-nav-btn' target={NAVIGATION.BENEFITS}>
        BENEFICIOS
      </NavBtn>

      <NavBtn className='mobile-nav-btn' target={NAVIGATION.CONTACT}>
        CONTACTO
      </NavBtn>
    </div>
  )
}

export default MenuMobile
