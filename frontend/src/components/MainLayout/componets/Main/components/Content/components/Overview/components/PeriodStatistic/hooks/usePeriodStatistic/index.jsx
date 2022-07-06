import { useCallback, useReducer } from 'react'

import { getPeriodStatisticData as getPeriodStatisticDataAction } from './actions'
import reducer, { initialState } from './reducer'

const usePeriodStatistic = () => {
  const [{
    periodIncome,
    periodOutcome,
    periodBalance,
    totalBalance,
    percentage,
    isLoading,
  }, localDispatch] = useReducer(reducer, initialState)

  const getPeriodStatisticData = useCallback((params = {}) => {
    getPeriodStatisticDataAction(localDispatch, params)
  }, [localDispatch])

  return {
    getPeriodStatisticData,
    periodIncome,
    periodOutcome,
    periodBalance,
    totalBalance,
    percentage,
    isLoading,
  }
}

export default usePeriodStatistic
