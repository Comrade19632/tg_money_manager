import { getSuccessType, getFailType } from 'common/api'
import axios from 'utils/axios'

export const ACTION_TYPES = {
  GET_BUDJET_DATA: 'GET_BUDJET_DATA',
}

export const getBudjetData = async (
  dispatch,
) => {
  dispatch({
    type: ACTION_TYPES.GET_BUDJET_DATA,
  })

  const response = await axios.get('accountant/transactions/overview-budjet/')

  if (response.status === 200) {
    dispatch({
      type: getSuccessType(ACTION_TYPES.GET_BUDJET_DATA),
      payload: response.data,
    })
  } else {
    dispatch({
      type: getFailType(ACTION_TYPES.GET_BUDJET_DATA),
    })
  }
}
