import { getSuccessType, getFailType } from 'common/api'
import axios from 'utils/axios'

export const ACTION_TYPES = {
  GET_PERIOD_STATISTIC_DATA: 'GET_PERIOD_STATISTIC_DATA',
}

export const getPeriodStatisticData = async (
  dispatch, { startDate, endDate } = {}
) => {
  dispatch({
    type: ACTION_TYPES.GET_PERIOD_STATISTIC_DATA,
  })

  const response = await axios.get('accountant/transactions/overview-period-statistic/',
    { params: (startDate && endDate) ? { start_date: startDate, end_date: endDate } : null })

  if (response.status === 200) {
    dispatch({
      type: getSuccessType(ACTION_TYPES.GET_PERIOD_STATISTIC_DATA),
      payload: response.data,
    })
  } else {
    dispatch({
      type: getFailType(ACTION_TYPES.GET_PERIOD_STATISTIC_DATA),
    })
  }
}
