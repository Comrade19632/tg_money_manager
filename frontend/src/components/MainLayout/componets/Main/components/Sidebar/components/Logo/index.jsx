import React from 'react'
import style from './index.module.sass'
import logo from './logo-dark.png'

const Logo = () => (
  <a className={style.logo} href='/'>
    <img alt='logo' src={logo} />
  </a>
)

export default Logo