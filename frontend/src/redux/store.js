import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
// eslint-disable-next-line 
import { isEmpty } from 'lodash'
import { login, setCurrentUser } from './auth/actions'
import authReducer from './auth/reducers'

const reducers = combineReducers({
  auth: authReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)))

if (!isEmpty(localStorage.getItem('accessToken')) && !isEmpty(localStorage.getItem('refreshToken'))) {
  store.dispatch(login(localStorage.getItem('accessToken'), localStorage.getItem('refreshToken')))
}
if (!isEmpty(localStorage.getItem('user'))) {
  const user = JSON.parse(localStorage.getItem('user'))
  store.dispatch(setCurrentUser(user, ''))
}

export default store