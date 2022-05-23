import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { PropTypes } from 'prop-types'

const ProtectedRoute = ({ children }) => {
  const { 
    isAuthenticated,
  } = useSelector(state =>({
    isAuthenticated: state.auth.isAuthenticated,
  }))

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProtectedRoute