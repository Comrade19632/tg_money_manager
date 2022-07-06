import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'utils/axios'

import { setAxiosAuthToken, toastOnError } from 'utils/Utils'
import { ACTION_TYPES } from './constants'

toast.configure()

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
    .catch((error) => {
      console.log(error)
      dispatch(unsetCurrentUser())
      toastOnError(error)
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
      const { access } = response.data
      dispatch(setToken(access))
      toast.success('Login successful.')
    })
    .catch((error) => {
      toastOnError(error)
    })
}

export const loginViaBot = (access) => (dispatch) => {
  dispatch(setToken(access))
  toast.success('Login successful.')
}
