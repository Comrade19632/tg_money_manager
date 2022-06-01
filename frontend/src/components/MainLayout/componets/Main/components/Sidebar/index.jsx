import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import useMedia, { DEVICES } from 'hooks/use-media'
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

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classnames(style.sidebar, {
        [style.active]: isSidebarActive
      })}>
      <Logo isSidebarActive={isSidebarActive} />
      <Nav />
    </div>
  )
}
Sidebar.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired,
  setSidebarActive: PropTypes.func.isRequired
}

export default Sidebar
