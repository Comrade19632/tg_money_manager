import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import style from './index.module.sass'

const Item = ({ name, icon, link, isSidebarActive }) => (
  <li>
    <NavLink to={link} className={({isActive}) =>`${isActive ? style.active : ''} ${style.item}`}>
      {icon}
      <span className={classnames(style.name, {
        [style.activeSidebar]: isSidebarActive,
      })}>
        {name}
      </span>
    </NavLink>
  </li >
)

Item.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.element,
  isSidebarActive: PropTypes.bool.isRequired,
}

Item.defaultProps = {
  name: 'menu option',
  icon: null,
}

export default Item