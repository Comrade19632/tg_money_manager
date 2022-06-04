import React from 'react'
import PropTypes from 'prop-types'
import style from './index.module.sass'

const Loader = ({className}) => (
  <div className={className}>
    <svg className={style.spinner} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle className={style.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
    </svg>
  </div>
)

Loader.propTypes = {
  className: PropTypes.string.isRequired,
}

export default Loader
