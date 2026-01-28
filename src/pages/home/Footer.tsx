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
      <div className='grid grid-cols-3 gap-10'>
        <div className='flex flex-col justify-evenly items-center'>
          <img src='/img/petcare-logo-white.webp' alt='' />
          <div className='flex justify-between text-white w-full'>
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaYoutubeSquare />
            <FaSquareXTwitter />
          </div>
        </div>

        <div className='flex flex-col gap-4 text-2xs text-gray-300'>
          <a href='#' className='hover:text-white'>
            Sobre nosotros
          </a>
          <a href='#' className='hover:text-white'>
            Contáctanos
          </a>
          <a href='#' className='hover:text-white'>
            Preguntas frecuentes
          </a>
          <a href='#' className='hover:text-white'>
            Términos de Servicio
          </a>
          <a href='#' className='hover:text-white'>
            Política de Privacidad
          </a>
        </div>

        <div className='flex flex-col gap-4 text-2xs text-gray-300'>
          <a href='#' className='hover:text-white'>
            Eventos
          </a>
          <a href='#' className='hover:text-white'>
            Comunidad
          </a>
          <a href='#' className='hover:text-white'>
            Redes sociales
          </a>
          <a href='#' className='hover:text-white'>
            Noticias
          </a>
          <a href='#' className='hover:text-white'>
            Ayuda
          </a>
        </div>
      </div>

      <div className='flex flex-col text-2xs text-white gap-1'>
        <Separator />
        <p>Calle XX #00-00, Cartagena de Indias, Colombia.</p>
        <p>© 2026 Diseño y desarrollo por Jose Guardo.</p>
      </div>
    </footer>
  )
}

export default Footer
