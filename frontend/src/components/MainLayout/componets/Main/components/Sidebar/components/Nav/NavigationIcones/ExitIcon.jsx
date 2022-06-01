import React from 'react'
import PropTypes from 'prop-types'

const ExitIcon = ({className}) => (
  <svg width="1em" height="1em" viewBox="0 0 512 512" className={className}><path fill="currentColor" d="M336 376V272H191a16 16 0 0 1 0-32h145V136a56.06 56.06 0 0 0-56-56H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h192a56.06 56.06 0 0 0 56-56Zm89.37-104l-52.68 52.69a16 16 0 0 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62l-80-80a16 16 0 0 0-22.62 22.62L425.37 240H336v32Z"/></svg>
)

ExitIcon.propTypes = {
  className: PropTypes.string,
}

ExitIcon.defaultProps ={
  className: null
}

export default ExitIcon
