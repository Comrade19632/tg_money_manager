import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import { setAxiosAuthToken, toastOnError } from 'utils/Utils'
import { ACTION_TYPES } from './constants'

toast.configure()


export const setCurrentUser = (user) => (dispatch) => {
  localStorage.setItem('user', JSON.stringify(user))
  dispatch({
    type: ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  })
}

export const setToken = (token) => {
  setAxiosAuthToken(token)
  localStorage.setItem('token', token)
  return {
    type: ACTION_TYPES.SET_TOKEN,
    payload: token,
  }
}

export const unsetCurrentUser = () => (dispatch) => {
  setAxiosAuthToken('')
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  dispatch({
    type: ACTION_TYPES.UNSET_CURRENT_USER,
  })
}

export const logout = () => (dispatch) => {
  dispatch(unsetCurrentUser())
  toast.success('Logout successful.')
}

export const login = (userData) => (dispatch) => {
  axios
    .post('token/', userData)
    .then((response) => {
      const { access, user } = response.data
      dispatch(setToken(access))
      dispatch(setCurrentUser(user))
      toast.success('Login successful.')
    })
    .catch((error) => {
      dispatch(unsetCurrentUser())
      toastOnError(error)
    })
}
