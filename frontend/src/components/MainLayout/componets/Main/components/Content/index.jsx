import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'redux/auth/actions'
import style from './index.module.sass'

const Content = () => {
  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  const dispatch = useDispatch()

  const onClick = () => dispatch(logout())

  return (
    <div className={style.content}>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
    </div>
  )
}

export default Content