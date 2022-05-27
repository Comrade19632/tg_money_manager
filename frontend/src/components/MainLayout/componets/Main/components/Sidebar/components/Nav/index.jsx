import React from 'react'
import Item from './components/Item'
import style from './index.module.sass'

const Nav = () => (
  <nav className={style.nav}>
    <ul>
      <Item active />
      <Item />
      <Item />
      <Item />
    </ul>
  </nav>
)

export default Nav