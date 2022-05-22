import {ACTION_TYPES} from './constants'

const initialState = {
  isAuthenticated: false,
  user: {},
  token: '',
}
  
  
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case ACTION_TYPES.SET_TOKEN:
    return {
      ...state,
      isAuthenticated: true,
      token: action.payload,
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
  