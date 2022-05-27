import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import style from './index.module.sass'

const Main = () => (
  <div className={style.main}>
    <Sidebar/>
    <div className={style.pageInner}>
      <Header/>
      <Content/>
    </div>
  </div>
)
export default Main
