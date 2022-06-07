import { get } from 'lodash'

import { getSuccessType, getFailType } from 'common/api'
import { ACTION_TYPES } from './actions'

export const initialState = {
  dayEstimatedBalance: 0,
  dayRemainingMoney: 0,
  date: '',
  periodRemainingMoney: 0,
  error: '',
  isLoading: false,
}

export default (state, action) => {
  switch (action.type) {
  case ACTION_TYPES.GET_BUDJET_DATA:
    return {
      ...state,
      isLoading: true,
    }
  case getSuccessType(ACTION_TYPES.GET_BUDJET_DATA):
    return {
      ...state,
      isLoading: false,
      dayEstimatedBalance: get(action, ['payload','day_estimated_balance']),
      dayRemainingMoney: get(action, ['payload', 'day_remaining_money']),
      date: get(action, ['payload', 'date']),
      periodRemainingMoney: get(action, ['payload', 'period_remaining_money']),
      error: get(action, ['payload', 'error']),
    }
  case getFailType(ACTION_TYPES.GET_BUDJET_DATA):
    return {
      ...state,
      isLoading: false,
      error: 'Не удалось загрузить статитику для карточек',
    }
  default:
    return state
  }
}
