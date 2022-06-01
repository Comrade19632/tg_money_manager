import React from 'react'
import PropTypes from 'prop-types'

const  DeleteIcon = ({className, onClick}) => {
  const deleteHandler = () => {
    onClick()
  }
  return (
    <svg onClick={deleteHandler} width="1em" height="1em" viewBox="0 0 24 24" className={className}><path fill="currentColor" d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8zm3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12l2.293 2.293z"/></svg>
  )
}

DeleteIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

DeleteIcon.defaultProps = {
  className: null,
  onClick: ()=>{},
}

export default DeleteIcon
