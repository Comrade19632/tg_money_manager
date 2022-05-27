import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Logo from './components/Logo'
import Nav from './components/Nav'
import style from './index.module.sass'


const Sidebar = ({ isSidebarActive, setSidebarActive }) => (
  <div
    onMouseEnter={() => setSidebarActive(!isSidebarActive)}
    onMouseLeave={() => setSidebarActive(!isSidebarActive)}
    className={classnames(style.sidebar, {
      [style.active]: isSidebarActive
    })}>
    <Logo isSidebarActive={isSidebarActive} />
    <Nav />
  </div>
)

Sidebar.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired,
  setSidebarActive: PropTypes.func.isRequired
}

export default Sidebar
