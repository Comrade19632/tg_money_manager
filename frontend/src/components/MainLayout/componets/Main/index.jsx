import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'redux/auth/actions'

const Main = () => {
  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  const dispatch = useDispatch()
  
  const onClick = () => dispatch(logout())

  return (
    <>
      <div>You are auth as {user.telegram_id}</div>
      <button onClick={onClick} type='button'>Logout</button>
    </>
  )
}

export default Main
