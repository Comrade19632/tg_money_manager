import React from 'react'
import Logo from './components/Logo'
import Nav from './components/Nav'
import style from './index.module.sass'


const Sidebar = () => (
  <div className={style.sidebar}>
    <Logo />
    <Nav />
  </div>
)

export default Sidebar
