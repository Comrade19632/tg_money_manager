import { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if ((window.getComputedStyle(ref.current).getPropertyValue('visibility') === 'visible')&& ref.current && !ref.current.contains(e.target)) {
      callback()
      console.log('loaded')
      console.log(ref.current)
      console.log(window.getComputedStyle(ref.current).getPropertyValue('visibility'))
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, { capture: true })

    return () => {
      document.removeEventListener('click', handleClick, { capture: true })
    }
  })
}

export default useOutsideClick