import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import style from './index.module.sass'

const Main = () => {
  const [isSidebarActive, setSidebarActive] = useState(false)

  return (
    <div className={style.main}>
      <Sidebar isSidebarActive={isSidebarActive} setSidebarActive={setSidebarActive} />
      <div className={style.pageInner}>
        <Header isSidebarActive={isSidebarActive} setSidebarActive={setSidebarActive} />
        <Content />
      </div>
    </div>
  )
}
export default Main
