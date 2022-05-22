import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import { setAxiosAuthToken, toastOnError } from 'utils/Utils'
import { SET_TOKEN, SET_CURRENT_USER, UNSET_CURRENT_USER } from './authTypes'

axios.defaults.baseURL = 'http://localhost/'
toast.configure()

export const setCurrentUser = (user) => (dispatch) => {
  localStorage.setItem('user', JSON.stringify(user))
  dispatch({
    type: SET_CURRENT_USER,
    payload: user,
  })
}

export const setToken = (token) => {
  setAxiosAuthToken(token)
  localStorage.setItem('token', token)
  return {
    type: SET_TOKEN,
    payload: token,
  }
}

export const unsetCurrentUser = () => (dispatch) => {
  setAxiosAuthToken('')
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  dispatch({
    type: UNSET_CURRENT_USER,
  })
}

export const logout = (navigate, path) => (dispatch) => {
  dispatch(unsetCurrentUser())
  toast.success('Logout successful.')
  return navigate(path)
}

export const login = (userData, redirectTo, navigate) => (dispatch) => {
  axios
    .post('token/', userData)
    .then((response) => {
      const { access, user } = response.data
      dispatch(setToken(access))
      dispatch(setCurrentUser(user))
      if (redirectTo !== '') {
        navigate(redirectTo)
      }
      toast.success('Login successful.')
    })
    .catch((error) => {
      dispatch(unsetCurrentUser())
      toastOnError(error)
    })
}
