import { useEffect, useMemo, useState } from 'react'

import useWidth from './useWidth'

export const DEVICES = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
}

const MIN_WIDTH_BREAKPOINTS = {
  0: DEVICES.MOBILE,
  760: DEVICES.TABLET,
  1020: DEVICES.DESKTOP,
}

const getDeviceWidth = (width) => Object.keys(MIN_WIDTH_BREAKPOINTS).sort(
  (current, next) => next - current,
).find(
  (minWidth) => width > minWidth,
)

const getDevice = (width) => MIN_WIDTH_BREAKPOINTS[getDeviceWidth(width)]

export default () => {
  const width = useWidth()
  const [device, setDevice] = useState(getDevice(width))

  useEffect(() => {
    const currentDevice = getDevice(width)
    if (currentDevice !== device) {
      setDevice(currentDevice)
    }
  }, [width, device, setDevice])

  return useMemo(() => device, [device])
}
