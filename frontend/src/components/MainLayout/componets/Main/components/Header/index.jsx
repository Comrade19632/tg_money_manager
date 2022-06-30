import React from 'react'
import PropTypes from 'prop-types'
import style from './index.module.sass'
import MenuIcon from './components/MenuIcon'

const Header = ({ isSidebarActive, setSidebarActive }) => (
  <div className={style.header} >
    <div className={style.sidebarSwitcher}>
      <MenuIcon isSidebarActive={isSidebarActive} setSidebarActive={setSidebarActive} />
    </div>
  </div>
)

Header.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired,
  setSidebarActive: PropTypes.func.isRequired
}

export default Header