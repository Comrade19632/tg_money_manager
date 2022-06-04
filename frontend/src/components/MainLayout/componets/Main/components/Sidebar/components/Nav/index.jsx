import React from 'react'
import { Link } from 'react-router-dom'

import Item from './components/Item'
import style from './index.module.sass'
import CategoryIcon from './NavigationIcones/CategoryIcon'
import ExitIcon from './NavigationIcones/ExitIcon'
import GraphIcon from './NavigationIcones/GraphIcon'
import ProfileIcon from './NavigationIcones/ProfileIcon'
import ProfileInfoIcon from './NavigationIcones/ProfileInfoIcon'
import TableIcon from './NavigationIcones/TableIcon'

const Nav = ({isSidebarActive}) => (
  <nav className={style.nav}>
    <ul>
      <Item 
        isSidebarActive={isSidebarActive}
        name='Мой Профиль' 
        icon={<ProfileIcon />} 
        active />
      <Link to='/categories'>
        <Item
          isSidebarActive={isSidebarActive}
          name='Мои катекории' 
          icon={<CategoryIcon />} />
      </Link>
      <Item
        isSidebarActive={isSidebarActive}
        name='Мои данные' 
        icon={<ProfileInfoIcon />} />
      <Item
        isSidebarActive={isSidebarActive}
        name='Выйти' 
        icon={<ExitIcon />} />
      <Item
        isSidebarActive={isSidebarActive}
        name='Графики' 
        icon={<GraphIcon />} />
      <Item
        isSidebarActive={isSidebarActive}
        name='Таблицы' 
        icon={<TableIcon />} />
    </ul>
  </nav>
)

Nav.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired,
}

export default Nav