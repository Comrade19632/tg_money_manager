import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'redux/auth/actions'
import style from './index.module.sass'

const Header = () => {
  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  const dispatch = useDispatch()

  const onClick = () => dispatch(logout())

  return (
    <div className={style.header} >
      Hi, {user.telegram_id}
      <button onClick={onClick} type='button'>Logout?</button>
    </div>
  )
}

export default Header