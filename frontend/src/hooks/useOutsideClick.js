import { useEffect } from 'react'

const useOutsideClick = (ref, callback, className = null, capture = false) => {
  const handleClick = e => {
    if ((className && ref.current.classList.contains(className) && ref.current && !ref.current.contains(e.target))
      || (!className && ref.current && !ref.current.contains(e.target))) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, { capture })

    return () => {
      document.removeEventListener('click', handleClick, { capture })
    }
  })
}

export default useOutsideClick