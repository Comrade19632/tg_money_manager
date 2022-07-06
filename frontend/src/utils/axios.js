import axios from 'axios'

axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? `${window.location.origin}/api/` : 'http://localhost/api/'

export default axios