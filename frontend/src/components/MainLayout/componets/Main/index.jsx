import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from 'redux/auth/actions'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import style from './index.module.sass'

const Main = () => {
  const [isSidebarOpened, setSidebarOpened] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentUser())
  }, [dispatch])

  return (
    <div className={style.main}>
      <Sidebar isSidebarOpened={isSidebarOpened} setSidebarOpened={setSidebarOpened} />
      <div className={style.pageInner}>
        <Header isSidebarOpened={isSidebarOpened} setSidebarOpened={setSidebarOpened} />
        <Content />
      </div>
    </div>
  )
}
export default Main
