import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import authReducer from './reducers/authReducer'
import invitingReducer from './reducers/invitingReducer'

const reducers = combineReducers({
  auth: authReducer,
  inviting: invitingReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store

window.store = store 
