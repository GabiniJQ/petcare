
const MenuMobile = () => {
  return (
    <div className='flex flex-col  absolute w-full text-primary bg-secondary border-y border-gray-200 shadow'>
      <a href='#home' className='flex items-center justify-center text-center h-14 border-b border-gray-200'>
        INICIO
      </a>

      <a href='#home' className='flex items-center justify-center text-center h-14 border-b border-gray-200'>
        SERVICIOS
      </a>

      <a href='#home' className='flex items-center justify-center text-center h-14 border-b border-gray-200'>
        TESTIMONIOS
      </a>

      <a href='#home' className='flex items-center justify-center text-center h-14 border-b border-gray-200'>
        BENEFICIOS
      </a>

      <a href='#home' className='flex items-center justify-center text-center h-14'>
        CONTACTO
      </a>
    </div>
  )
}

export default MenuMobile
