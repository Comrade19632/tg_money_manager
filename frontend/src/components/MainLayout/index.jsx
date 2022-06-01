import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import ProtectedRoute from 'components/ProtectedRoute'
import Main from './componets/Main'
import Login from './componets/Login'

const MainLayout = () => {

  useEffect(() => {
    if (window.location.origin === 'http://localhost:3000') {
      axios.defaults.baseURL = 'http://localhost/api/'
    } else {
      axios.defaults.baseURL = `${window.location.origin}/api/`
    }
  })

  return (
    <div>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route path='*' element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default MainLayout

