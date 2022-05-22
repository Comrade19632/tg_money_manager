import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import { toastOnError } from 'utils/Utils'
import API_LINK_FOR_TELEGRAM_BOTS from 'constants/apiConstants'

import { 
  DONOR_CHAT_NAME_INPUT, 
  STORE_ORDER_ID, 
  USER_CHAT_NAME_INPUT,
  STORE_EXISTING_ORDER_IDS,
  GET_USER_CONFIRMATION,
} from './invitingTypes'

// Utility Functions

export const formatRequestData = (token, userChatLink, donorChatLink) => {

  const requestHeaders = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  const postData = {
    'target_chat_link': userChatLink,
    'donor_chat_link': donorChatLink
  }

  const path = 'orders/invite/'
  const url = API_LINK_FOR_TELEGRAM_BOTS + path

  return { requestHeaders, postData, url }
}

export const getSimilarOrderIDs = (currentOrderID, existingOrdersIDs) => {  
  const currentOrderIndex = existingOrdersIDs.indexOf(currentOrderID)
  existingOrdersIDs.splice(currentOrderIndex, 1)
  return existingOrdersIDs
}

// Action Creators 

export const setUserChatName = (userChatLink) => ({
  type: USER_CHAT_NAME_INPUT,
  payload: userChatLink
})

export const setDonorChatName = (donorChatLink) => ({
  type: DONOR_CHAT_NAME_INPUT,
  payload: donorChatLink
})

export const storeOrderID = (response) => ({
  type: STORE_ORDER_ID,
  payload: response
})

export const storeExistingOrderIDs = (response) => ({
  type: STORE_EXISTING_ORDER_IDS,
  payload: response
})

export const getUserConfirmation = (isConfirmed) => ({
  type: GET_USER_CONFIRMATION,
  payload: isConfirmed
})

// Thunks

const invitationRequst = (
  isConfirmed, requestHeaders, currentOrderID, similarOrderIDs
)  => {

  if (isConfirmed) {

    const postData = {
      'similar_orders_ids': similarOrderIDs,
    }
    const path = `orders/invite/${currentOrderID}/merge-with-similar-orders/`
    const url = API_LINK_FOR_TELEGRAM_BOTS + path

    axios
      .post(url, postData,{headers: requestHeaders, json: postData} )
      .then(rsp => console.log(rsp))
      .catch(error => toastOnError(error))
  }

  const path = `orders/invite/${currentOrderID}/start/`
  const url = API_LINK_FOR_TELEGRAM_BOTS + path

  axios
    .get(url, {headers: requestHeaders})
    .then(rsp => console.log(rsp))
    .catch(error => toastOnError(error))
}

export const createOrderInDataBase = (
  url, postData, requestHeaders) => dispatch => {
  
  axios
    .post(url, postData, {headers: requestHeaders})
    .then(response => {
      dispatch(storeOrderID(response.data.id))
    })
    .catch(error => toastOnError(error))
}

export const getExistingOrders = (
  userChatLink, donorChatLink, requestHeaders
) => dispatch => {

  const path = `orders/invite?target_chat_link=${userChatLink}&donor_chat_link=${donorChatLink}`
  const url = API_LINK_FOR_TELEGRAM_BOTS + path

  axios
    .get(url, {header: requestHeaders})
    .then(response => {
      const existingOrders = []
      response.data.forEach(order => existingOrders.push(order.id))
      dispatch(storeExistingOrderIDs(existingOrders)
      )
    })
    .catch(error => toastOnError(error))
}

// Main Thunk

export const  startInviting = (
  token, 
  userChatLink, 
  donorChatLink, 
  currentOrderID, 
  existingOrdersIDs, 
  isConfirmed) => dispatch => {
  
  const { requestHeaders, postData, url } =  formatRequestData(
    token, userChatLink, donorChatLink,
  )
  const similarOrderIDs = getSimilarOrderIDs(
    currentOrderID, existingOrdersIDs)

  dispatch(createOrderInDataBase(url, postData, requestHeaders))
  dispatch(getExistingOrders(userChatLink, donorChatLink, requestHeaders))
  invitationRequst(isConfirmed, requestHeaders, currentOrderID, similarOrderIDs)
}
