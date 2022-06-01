import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import style from './index.module.sass'

const Item = ({ active, name, icon, }) => (
  <li className={classnames(style.item, {
    [style.active]: active,
  })}>
    {icon}
    {name}
  </li>
)

Item.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.element,
}

Item.defaultProps = {
  active: false,
  name: 'menu option',
  icon: null,
}

export default Item