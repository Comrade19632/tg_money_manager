import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import {login} from 'redux/auth/actions'

import DevLoginForm from './components/DevLoginForm'
import TelegramLoginButton from './components/TelegramLoginButton'

const Login = () => {
  const { 
    isAuthenticated,
  } = useSelector(state =>({
    isAuthenticated: state.auth.isAuthenticated,
  }))

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const dispatch = useDispatch()

  const handleLogin = (userData) => dispatch(login(userData))

  return (process.env.NODE_ENV === 'production') ? <TelegramLoginButton dataOnauth={handleLogin} /> : <DevLoginForm handleLogin={handleLogin}/>
}

export default Login
