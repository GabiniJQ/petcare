import { useEffect, useState } from 'react'

const useTopScreen = () => {
  const [isTopScreen, setIsTopScreen] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setIsTopScreen(window.scrollY === 0)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return { isTopScreen }
}

export default useTopScreen
