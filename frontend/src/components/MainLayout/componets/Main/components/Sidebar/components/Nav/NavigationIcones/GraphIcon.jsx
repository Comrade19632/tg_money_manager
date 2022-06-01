import React from 'react'
import PropTypes from 'prop-types'

const GraphIcon = ({className}) => (
  <svg width="1em" height="1em" viewBox="0 0 100 100" className={className}><path fill="currentColor" fillRule="evenodd" d="M7 24v69h85v-5H12V24Z" color="currentColor"/><path fill="currentColor" fillRule="evenodd" d="M68.219 33.463a2.5 2.5 0 0 0-1.787.816l-20.77 22.832l-11.156-7.238a2.5 2.5 0 0 0-3.461.742l-14.53 22.53V84H92l.07-17.402l-21.72-32.04a2.5 2.5 0 0 0-2.131-1.095z" color="currentColor"/><path fill="currentColor" d="M2.394 17.004v-2.71l7.813-7.622l-7.252.074V3.863h12.634v2.462l-7.9 7.709l8.346-.087v3.057z"/></svg>
)

GraphIcon.propTypes = {
  className: PropTypes.string,
}

GraphIcon.defaultProps ={
  className: null
}

export default GraphIcon
