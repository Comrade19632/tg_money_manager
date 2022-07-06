import axios from 'utils/axios'
import { toast } from 'react-toastify'

export const setAxiosAuthToken = (token) => {
  if (typeof token !== 'undefined' && token) {
    // Apply for every request
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    // Delete auth header
    delete axios.defaults.headers.common.Authorization
  }
}

export const toastOnError = (error) => {
  if (error.response) {
    // known error
    toast.error(JSON.stringify(error.response.data))
  } else if (error.message) {
    toast.error(JSON.stringify(error.message))
  } else {
    toast.error(JSON.stringify(error))
  }
}