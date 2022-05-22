import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { loginReducer } from 'redux/reducers/authReducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: loginReducer,
  })

export default createRootReducer
