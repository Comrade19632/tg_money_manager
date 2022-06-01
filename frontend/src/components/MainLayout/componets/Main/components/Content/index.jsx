import React from 'react'
import { Route, Routes } from 'react-router-dom'
import style from './index.module.sass'
import Overview from './components/Overview'
import NotFound from './components/NotFound'


const Content = () => (
  <div className={style.content}>
    <Routes>
      <Route exact path='/' element={<Overview/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>
)

export default Content