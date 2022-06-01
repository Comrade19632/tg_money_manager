import { useCallback, useEffect, useState } from 'react'
import { debounce } from 'lodash'

const UPDATE_WIDTH_TIMEOUT = 300

const getWidth = () => window.innerWidth

export default () => {
  const [width, setWidth] = useState(getWidth)

  const updateWidth = useCallback(debounce(() => setWidth(getWidth), UPDATE_WIDTH_TIMEOUT), [setWidth])

  useEffect(() => {
    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  }, [updateWidth])

  return width
}
