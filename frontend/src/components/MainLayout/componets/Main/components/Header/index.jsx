import React from 'react'
import PropTypes from 'prop-types'
import style from './index.module.sass'
import MenuIcon from './components/MenuIcon'
import AddTransaction from './components/AddTransaction'

const Header = ({ isSidebarOpened, setSidebarOpened }) => (
  <div className={style.header} >
    <MenuIcon isSidebarOpened={isSidebarOpened} setSidebarOpened={setSidebarOpened} />
    <AddTransaction/>
  </div>
)

Header.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired,
  setSidebarOpened: PropTypes.func.isRequired
}

export default Header