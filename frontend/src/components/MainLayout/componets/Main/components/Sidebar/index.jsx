import React, {useRef} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import useMedia, { DEVICES } from 'hooks/useMedia'
import useOutsideClick from 'hooks/useOutsideClick'
import Logo from './components/Logo'
import Nav from './components/Nav'
import style from './index.module.sass'

const Sidebar = ({ isSidebarActive, setSidebarActive }) => {
  const device = useMedia()

  const onMouseEnter = () => {
    if (device === DEVICES.MOBILE) return
    setSidebarActive(!isSidebarActive)
  }

  const onMouseLeave = () => {
    if (device === DEVICES.MOBILE) return
    setSidebarActive(!isSidebarActive)
  }

  const ref = useRef()

  useOutsideClick(ref, () => {
    if (isSidebarActive) setSidebarActive(false)
  })

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classnames(style.sidebar, {
        [style.active]: isSidebarActive
      })}>
      <Logo isSidebarActive={isSidebarActive} />
      <Nav isSidebarActive={isSidebarActive} />
    </div>
  )
}
Sidebar.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired,
  setSidebarActive: PropTypes.func.isRequired
}

export default Sidebar
