import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'utils/axios'

import { setAxiosAuthToken, toastOnError } from 'utils/Utils'
import { ACTION_TYPES } from './constants'

toast.configure()

export const login = (accessToken, refreshToken) => {
  setAxiosAuthToken(accessToken)
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
  return {
    type: ACTION_TYPES.LOGIN,
  }
}

export const unsetCurrentUser = () => (dispatch) => {
  setAxiosAuthToken('')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('user')
  dispatch({
    type: ACTION_TYPES.UNSET_CURRENT_USER,
  })
}

export const setCurrentUser = () => (dispatch) => {
  axios
    .get('users/get-self/')
    .then((response) => {
      const user = response.data
      localStorage.setItem('user', JSON.stringify(user))
      dispatch({
        type: ACTION_TYPES.SET_CURRENT_USER,
        payload: user,
      })
    })
}

export const logout = () => (dispatch) => {
  dispatch(unsetCurrentUser())
  toast.success('Logout successful.')
}

export const loginViaWidjet = (userData) => (dispatch) => {
  axios
    .post('token/', userData)
    .then((response) => {
      const { access, refresh } = response.data
      dispatch(login(access, refresh))
      toast.success('Login successful.')
    })
    .catch((error) => {
      toastOnError(error)
    })
}

export const loginViaBot = (access, refresh) => (dispatch) => {
  dispatch(login(access, refresh))
  toast.success('Login successful.')
}
