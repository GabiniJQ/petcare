import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import Separator from './Separator'

const Footer = () => {
  return (
    <footer className='flex flex-col bg-blue-dark py-6 px-6 gap-6'>
      <div className='grid grid-cols-3 gap-10 items-center '>
        <div className='flex flex-col justify-evenly items-center'>
          <img src='/img/petcare-logo-white.webp' alt='PetCare logo blanco' className='w-1/3' />

          <div className='flex justify-between text-white w-full max-w-20 lg:max-w-1/3'>
            <FaFacebookSquare className='footer-icon lg:size-8'/>
            <FaInstagramSquare className='footer-icon lg:size-8'/>
            <FaYoutubeSquare className='footer-icon lg:size-8'/>
            <FaSquareXTwitter className='footer-icon lg:size-8'/>
          </div>
        </div>

        <div className='flex flex-col gap-4 text-2xs text-gray-300 lg:text-xs'>
          <a href='' className='hover:text-white w-fit'>
            Sobre nosotros
          </a>
          <a href='' className='hover:text-white w-fit'>
            Contáctanos
          </a>
          <a href='' className='hover:text-white w-fit'>
            Preguntas frecuentes
          </a>
          <a href='' className='hover:text-white w-fit'>
            Términos de Servicio
          </a>
          <a href='' className='hover:text-white w-fit'>
            Política de Privacidad
          </a>
        </div>

        <div className='flex flex-col gap-4 text-2xs text-gray-300 lg:text-xs'>
          <a href='' className='hover:text-white w-fit'>
            Eventos
          </a>
          <a href='' className='hover:text-white w-fit'>
            Comunidad
          </a>
          <a href='' className='hover:text-white w-fit'>
            Redes sociales
          </a>
          <a href='' className='hover:text-white w-fit'>
            Noticias
          </a>
          <a href='' className='hover:text-white w-fit'>
            Ayuda
          </a>
        </div>
      </div>

      <div className='flex flex-col text-2xs text-white gap-1 lg:text-xs'>
        <Separator />
        <div className='sm:flex sm:justify-between'>
          <p>Calle XX #00-00, Cartagena de Indias, Colombia.</p>
          <p>© 2026 Diseño y desarrollo por Jose Guardo.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
