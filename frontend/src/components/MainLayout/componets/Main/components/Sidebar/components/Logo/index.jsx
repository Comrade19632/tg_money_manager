import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import style from './index.module.sass'
import logo from './logo-dark.png'

const Logo = ({ isSidebarOpened }) => (
  <a className={style.logo} href='/'>
    <img className={classNames({
      [style.active]: isSidebarOpened
    })} alt='logo' src={logo} />
  </a>
)

Logo.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired
}

export default Logo