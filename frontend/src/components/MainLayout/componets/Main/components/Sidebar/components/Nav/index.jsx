import React from 'react'
import PropTypes from 'prop-types'
import Item from './components/Item'
import style from './index.module.sass'
import DashboardIcon from './NavigationIcones/DashboardIcon'
import ProfileIcon from './NavigationIcones/ProfileIcon'

const Nav = ({ isSidebarOpened }) => (
  <nav className={style.nav}>
    <ul>
      <Item
        isSidebarOpened={isSidebarOpened}
        name='Главная'
        icon={<DashboardIcon />}
        link="/"
      />
      <Item
        isSidebarOpened={isSidebarOpened}
        name='Мой Профиль'
        icon={<ProfileIcon />}
        link="/profile"
      />
    </ul>
  </nav>
)

Nav.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired,
}

export default Nav