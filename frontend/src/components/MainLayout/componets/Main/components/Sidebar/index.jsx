import React, {useRef} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import useMedia, { DEVICES } from 'hooks/useMedia'
import useOutsideClick from 'hooks/useOutsideClick'
import Logo from './components/Logo'
import Nav from './components/Nav'
import style from './index.module.sass'

const Sidebar = ({ isSidebarOpened, setSidebarOpened }) => {
  const device = useMedia()

  const onMouseEnter = () => {
    if (device === DEVICES.MOBILE) return
    setSidebarOpened(!isSidebarOpened)
  }

  const onMouseLeave = () => {
    if (device === DEVICES.MOBILE) return
    setSidebarOpened(!isSidebarOpened)
  }

  const ref = useRef()

  useOutsideClick(ref, () => {
    if (isSidebarOpened) setSidebarOpened(false)
  }, style.opened)

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classnames(style.sidebar, {
        [style.opened]: isSidebarOpened
      })}>
      <Logo isSidebarOpened={isSidebarOpened} />
      <Nav isSidebarOpened={isSidebarOpened} />
    </div>
  )
}
Sidebar.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired,
  setSidebarOpened: PropTypes.func.isRequired
}

export default Sidebar
