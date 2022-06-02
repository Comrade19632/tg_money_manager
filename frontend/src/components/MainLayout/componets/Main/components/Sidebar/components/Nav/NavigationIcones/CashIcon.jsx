import React from 'react'
import PropTypes from 'prop-types'

const CashIcon = ({className}) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" className={className}><g fill="currentColor"><path d="M8 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"/><path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/></g></svg>
)

CashIcon.propTypes = {
  className: PropTypes.string,
}

CashIcon.defaultProps ={
  className: null
}

export default CashIcon
