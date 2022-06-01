import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import style from './index.module.sass'
import logo from './logo-dark.png'


const Logo = ({ isSidebarActive }) => (
  <a className={style.logo} href='/'>
    <img className={classNames({
      [style.active]: isSidebarActive
    })} alt='logo' src={logo} />
  </a>
)

Logo.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired
}

export default Logo