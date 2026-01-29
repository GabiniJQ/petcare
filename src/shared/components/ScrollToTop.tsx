import { useEffect, useState } from 'react'
import { CgChevronUp } from 'react-icons/cg'

const ScrollToTop = () => {
  const [isHalfPage, setIsHalfPage] = useState(window.scrollY > 2500)

  useEffect(() => {
    const checkScroll = () => {
      setIsHalfPage(window.scrollY > 2500)
    }

    window.addEventListener('scroll', checkScroll)

    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  if (isHalfPage)
    return (
      <div
        className='fixed bottom-20 right-5 bg-linear-primary text white font-bold p-3 rounded-full cursor-pointer'
        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <CgChevronUp className='size-4 2xl:size-6'/>
      </div>
    )
}

export default ScrollToTop
