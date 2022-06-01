import React from 'react'
import Item from './components/Item'
import style from './index.module.sass'
import CategoryIcon from './NavigationIcones/CategoryIcon'
import ExitIcon from './NavigationIcones/ExitIcon'
import GraphIcon from './NavigationIcones/GraphIcon'
import ProfileIcon from './NavigationIcones/ProfileIcon'
import ProfileInfoIcon from './NavigationIcones/ProfileInfoIcon'
import TableIcon from './NavigationIcones/TableIcon'

const Nav = () => (
  <nav className={style.nav}>
    <ul>
      <Item 
        name='Мой Профиль' 
        icon={<ProfileIcon />} 
        active />
      <Item 
        name='Мои катекории' 
        icon={<CategoryIcon />} />
      <Item 
        name='Мои данные' 
        icon={<ProfileInfoIcon />} />
      <Item 
        name='Выйти' 
        icon={<ExitIcon />} />
      <Item 
        name='Графики' 
        icon={<GraphIcon />} />
      <Item 
        name='Таблицы' 
        icon={<TableIcon />} />
    </ul>
  </nav>
)

export default Nav