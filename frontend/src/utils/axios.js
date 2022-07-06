import axios from 'axios'
import { setAxiosAuthToken } from 'utils/Utils'

const baseURL = (process.env.NODE_ENV === 'production') ? `${window.location.origin}/api/` : 'http://localhost/api/'

const instance = axios.create({
  baseURL,
})

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

instance.interceptors.response.use((response) => response, (error) => {

  const originalRequest = error.config

  if (
    error.response.status === 401 &&
    originalRequest.url === `${baseURL}token/refresh/`
  ) {
    setAxiosAuthToken('')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    window.location.href = '/login'
    return Promise.reject(error)
  }

  // eslint-disable-next-line no-underscore-dangle
  if (error.response.status === 401 && !originalRequest._retry) {

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      }).then((access) => {
        originalRequest.headers.Authorization = `Bearer ${  access}`
        return instance(originalRequest)
      }).catch(err => Promise.reject(err))
    }

    // eslint-disable-next-line no-underscore-dangle
    originalRequest._retry = true
    isRefreshing = true

    const refreshToken = window.localStorage.getItem('refreshToken')
    return new Promise((resolve, reject) => {
      instance.post(`${baseURL}token/refresh/`, { refresh: refreshToken })
        .then(({ data }) => {
          const { access } = data
          setAxiosAuthToken(access)
          localStorage.setItem('accessToken', access)
          originalRequest.headers.Authorization = `Bearer ${  access}`
          processQueue(null, access)
          resolve(instance(originalRequest))
        })
        .catch((err) => {
          processQueue(err, null)
          reject(err)
        })
        .finally(() => { isRefreshing = false })
    })
  }

  return Promise.reject(error)
})

export default instance