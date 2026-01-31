import { useEffect, useState } from 'react'
import useStore from '../../store/useStore'
import { NAVIGATION } from '../const/navigation'

const useTopScreen = () => {
  const [isTopScreen, setIsTopScreen] = useState(true)
  const [currentScroll, setCurrentScroll] = useState(window.scrollY)
  const [isScrollUp, setIsScrollUp] = useState(false)

  const { updateCurrentSection } = useStore()
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setIsTopScreen(true)
        updateCurrentSection(NAVIGATION.HOME)
      } else {
        setIsTopScreen(false)
      }
      
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
  }, [updateCurrentSection])

  return { isTopScreen, isScrollUp, currentScroll }
}

export default useTopScreen
