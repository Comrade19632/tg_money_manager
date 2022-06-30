import React from 'react'
import PropTypes from 'prop-types'
import Item from './components/Item'
import style from './index.module.sass'
import DashboardIcon from './NavigationIcones/DashboardIcon'
import ProfileIcon from './NavigationIcones/ProfileIcon'

const Nav = ({ isSidebarActive }) => (
  <nav className={style.nav}>
    <ul>
      <Item
        isSidebarActive={isSidebarActive}
        name='Главная'
        icon={<DashboardIcon />}
        link="/"
      />
      <Item
        isSidebarActive={isSidebarActive}
        name='Мой Профиль'
        icon={<ProfileIcon />}
        link="/profile"
      />
    </ul>
  </nav>
)

Nav.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired,
}

export default Nav