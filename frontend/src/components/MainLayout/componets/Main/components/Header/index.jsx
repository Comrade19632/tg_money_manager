import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from 'redux/auth/actions'
import style from './index.module.sass'

const Header = ({ isSidebarActive, setSidebarActive }) => {
  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  const dispatch = useDispatch()

  const logoutOnClick = () => dispatch(logout())

  const sidebarSwitcherOnClick = () => setSidebarActive(!isSidebarActive)

  return (
    <div className={style.header} >
      <button onClick={sidebarSwitcherOnClick} className={style.sidebarSwitcher} type='button'>
        Sidebar
      </button>
      <div>
        Hi, {user.telegram_id}
        <button onClick={logoutOnClick} type='button'>Logout?</button>
      </div>
    </div>
  )
}

Header.propTypes = {
  isSidebarActive: PropTypes.bool.isRequired,
  setSidebarActive: PropTypes.func.isRequired
}

export default Header