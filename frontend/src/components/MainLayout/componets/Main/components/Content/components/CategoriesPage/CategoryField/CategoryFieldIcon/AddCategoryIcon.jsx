import React from 'react'
import PropTypes from 'prop-types'

const AddCategoryIcon = ({className}) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" className={className}><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>
)

AddCategoryIcon.propTypes = {
  className: PropTypes.string,
}

AddCategoryIcon.defaultProps = {
  className: null,
}

export default AddCategoryIcon
