import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import * as axios from 'axios'

import HomePage from 'containers/HomePage'
import PageNotFound from 'containers/PageNotFound'
import Layout from 'components/layouts/Layout'
import LoginPage from 'containers/LoginPage'

const App = () => {
  useEffect(() => {
    if (window.location.origin === 'http://localhost:3000') {
      axios.defaults.baseURL = 'http://localhost/'
    } else {
      axios.defaults.baseURL = window.location.origin
    }
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
