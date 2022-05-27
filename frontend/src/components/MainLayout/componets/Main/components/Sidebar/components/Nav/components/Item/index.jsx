import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import style from './index.module.sass'

const Item = ({ active }) => (
  <li className={classnames(style.item, {
    [style.active]: active,
  })}>Item</li>
)

Item.propTypes = {
  active: PropTypes.bool
}

Item.defaultProps = {
  active: true,
}

export default Item