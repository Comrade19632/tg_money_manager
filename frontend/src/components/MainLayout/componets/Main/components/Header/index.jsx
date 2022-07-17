import React from 'react'
import PropTypes from 'prop-types'
import style from './index.module.sass'
import MenuIcon from './components/MenuIcon'
import AddTransaction from './components/AddTransaction'

const Header = ({ isSidebarActive, setSidebarActive }) => (
  <div className={style.header} >
    <MenuIcon isSidebarActive={isSidebarActive} setSidebarActive={setSidebarActive} />
    <AddTransaction/>
  </div>
)

Header.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired,
  setSidebarActive: PropTypes.func.isRequired
}

export default Header