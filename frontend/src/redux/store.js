import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
// eslint-disable-next-line 
import { isEmpty } from 'lodash'
import { setToken, setCurrentUser } from './auth/actions'
import authReducer from './auth/reducers'
import categoryManagementReducer from './categoryManagement/reducer'

const reducers = combineReducers({
  auth: authReducer,
  categoryManagement: categoryManagementReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)))

if (!isEmpty(localStorage.getItem('token'))) {
  store.dispatch(setToken(localStorage.getItem('token')))
}
if (!isEmpty(localStorage.getItem('user'))) {
  const user = JSON.parse(localStorage.getItem('user'))
  store.dispatch(setCurrentUser(user, ''))
}

export default store