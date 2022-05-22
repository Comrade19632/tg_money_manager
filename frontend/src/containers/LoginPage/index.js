import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { login } from 'redux/actions/authentication/authAC'
import SignIn from 'components/common/SignIn'

const LoginPage = () => {
  const [telegramID, setTelegramID] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const updateTelegramID = (e) => {
    setTelegramID(e.target.value)
  }

  const handleAuthentication = () => {
    const userData = {
      id: telegramID,
    }
    dispatch(login(userData, '/', navigate))
  }

  const handleTelegramResponse = (userData) => {
    dispatch(login(userData, '/'))
  }

  return (
    <SignIn
      telegramID={telegramID} 
      handleAuthentication={handleAuthentication}
      updateTelegramID={updateTelegramID}
      handleTelegramResponse={handleTelegramResponse}/>
  )
}

export default LoginPage
