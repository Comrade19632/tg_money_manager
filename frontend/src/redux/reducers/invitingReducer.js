import {
  DONOR_CHAT_NAME_INPUT,
  USER_CHAT_NAME_INPUT,
  STORE_ORDER_ID,
  STORE_EXISTING_ORDER_IDS,
  GET_USER_CONFIRMATION,
} from 'redux/actions/inviting/invitingTypes'


const initialState = {
  donorChatLink: '',
  userChatLink: '',
  currentOrderID: [],
  existingOrdersIDs: [],
  isConfirmed: false
}

const initialAction = {
  type: '',
  payload: '',
}

const invitingReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
  case DONOR_CHAT_NAME_INPUT:
    return {
      ...state,
      donorChatLink: action.payload,
    }
  case USER_CHAT_NAME_INPUT:
    return {
      ...state,
      userChatLink: action.payload,
    }
  case STORE_ORDER_ID:
    return {
      ...state,
      currentOrderID: action.payload
    }
  case STORE_EXISTING_ORDER_IDS:
    return {
      ...state,
      existingOrdersIDs: action.payload
    }
  case GET_USER_CONFIRMATION:
    return {
      ...state,
      isConfirmed: action.payload
    }
  default:
    return state
  }
}

export default invitingReducer