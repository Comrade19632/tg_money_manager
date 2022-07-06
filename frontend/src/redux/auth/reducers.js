import {ACTION_TYPES} from './constants'

const initialState = {
  isAuthenticated: false,
  user: {},
}
  
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case ACTION_TYPES.LOGIN:
    return {
      ...state,
      isAuthenticated: true,
    }
  case ACTION_TYPES.SET_CURRENT_USER:
    return {
      ...state,
      user: action.payload,
    }
  case ACTION_TYPES.UNSET_CURRENT_USER:
    return initialState
  default:
    return state
  }
}
  
export default authReducer
  