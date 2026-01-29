import { useEffect, useState } from 'react'

const useTopScreen = () => {
  const [isTopScreen, setIsTopScreen] = useState(true)
  const [currentScroll, setCurrentScroll] = useState(window.scrollY)
  const [isScrollUp, setIsScrollUp] = useState(false)
  
  useEffect(() => {
    const onScroll = () => {
      
      setIsTopScreen(window.scrollY === 0)
      setCurrentScroll((prevScroll) => {
        if (prevScroll > window.scrollY && window.scrollY !== 0) {
          setIsScrollUp(true)
        } else {
          setIsScrollUp(false)
        }
        return window.scrollY
      })
      
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return { isTopScreen, isScrollUp, currentScroll }
}

export default useTopScreen
