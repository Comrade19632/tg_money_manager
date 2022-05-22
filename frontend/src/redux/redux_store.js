import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import authReducer from './reducers/authReducer'

const reducers = combineReducers({
  auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store
