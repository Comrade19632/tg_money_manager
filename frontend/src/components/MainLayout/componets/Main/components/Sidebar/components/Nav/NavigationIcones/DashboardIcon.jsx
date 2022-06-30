import React from 'react'
import PropTypes from 'prop-types'

const DashboardIcon = ({className}) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" className={className}><path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4z" fill="currentColor"/></svg>
)

DashboardIcon.propTypes = {
  className: PropTypes.string,
}

DashboardIcon.defaultProps ={
  className: null
}

export default DashboardIcon
