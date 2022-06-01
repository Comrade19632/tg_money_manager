import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { login } from 'redux/auth/actions'

import DevLoginForm from './components/DevLoginForm'
import TelegramLoginButton from './components/TelegramLoginButton'
import style from './index.module.sass'

const Login = () => {

  const dispatch = useDispatch()
  
  const { 
    isAuthenticated,
  } = useSelector(state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }))

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const handleLogin = (userData) => dispatch(login(userData))

  return (
    <div className={style.container}>
      {(process.env.NODE_ENV === 'production') ? <TelegramLoginButton dataOnauth={handleLogin} /> : <DevLoginForm handleLogin={handleLogin} />}
    </div>
  )
}

export default Login
