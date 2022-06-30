import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'redux/auth/actions'

const Profile = () => {
  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  const dispatch = useDispatch()

  const logoutOnClick = () => dispatch(logout())

  return (
    <div>
      Hi, {user.telegram_id}
      <button onClick={logoutOnClick} type='button'>Logout?</button>
    </div>
  )
}

export default Profile
