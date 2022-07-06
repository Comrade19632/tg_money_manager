import { getSuccessType, getFailType } from 'common/api'
import axios from 'utils/axios'

export const ACTION_TYPES = {
  GET_TRANSACTIONS_DATA: 'GET_TRANSACTIONS_DATA',
}

export const getTransactionsData = async (
  dispatch, params = {}
) => {
  dispatch({
    type: ACTION_TYPES.GET_TRANSACTIONS_DATA,
  })

  const response = await axios.get('accountant/transactions/',
    { params: {...params} })

  if (response.status === 200) {
    dispatch({
      type: getSuccessType(ACTION_TYPES.GET_TRANSACTIONS_DATA),
      payload: response.data,
    })
  } else {
    dispatch({
      type: getFailType(ACTION_TYPES.GET_TRANSACTIONS_DATA),
    })
  }
}
