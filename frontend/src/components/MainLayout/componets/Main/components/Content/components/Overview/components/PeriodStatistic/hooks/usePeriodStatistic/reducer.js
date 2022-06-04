import { get } from 'lodash'

import { getSuccessType, getFailType } from 'common/api'
import { ACTION_TYPES } from './actions'

export const initialState = {
  periodIncome: 0,
  periodOutcome: 0,
  totalBalance: 0,
  periodBalance: 0,
  percentage: 0,
  isLoading: false,
}

export default (state, action) => {
  switch (action.type) {
  case ACTION_TYPES.GET_PERIOD_STATISTIC_DATA:
    return {
      ...state,
      isLoading: true,
    }
  case getSuccessType(ACTION_TYPES.GET_PERIOD_STATISTIC_DATA):
    return {
      ...state,
      isLoading: false,
      periodIncome: get(action, ['payload','period_income']),
      periodOutcome: get(action, ['payload', 'period_outcome']),
      periodBalance: get(action, ['payload', 'period_balance']),
      totalBalance: get(action, ['payload', 'total_balance']),
      percentage: get(action, ['payload', 'percentage']),
    }
  case getFailType(ACTION_TYPES.GET_PERIOD_STATISTIC_DATA):
    return {
      ...state,
      isLoading: false,
      error: 'Не удалось загрузить статитику для карточек',
    }
  default:
    return state
  }
}
