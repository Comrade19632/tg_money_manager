import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import * as axios from 'axios'


import PageNotFound from 'containers/PageNotFound'
import Layout from 'components/layouts/Layout'
import LoginPage from 'containers/LoginPage'
import SpamPage from 'containers/SpamPage'
import Accounts from 'components/common/Accounts'
import InvitingPage from 'containers/InvitingPage'

const App = () => {
  useEffect(() => {
    if (window.location.origin === 'http://localhost:3000/api/') {
      axios.defaults.baseURL = 'http://localhost/api/'
    } else {
      axios.defaults.baseURL = window.location.origin
    }
  })
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Accounts />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='spam' element={<SpamPage />} />
          <Route path='inviting' element={<InvitingPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
