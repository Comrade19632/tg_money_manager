import { useCallback, useReducer } from 'react'

import { getBudjetData as getBudjetDataAction } from './actions'
import reducer, { initialState } from './reducer'

const useBudjet = () => {
  const [{
    dayEstimatedBalance,
    dayRemainingMoney,
    date,
    periodRemainingMoney,
    error,
    isLoading,
  }, localDispatch] = useReducer(reducer, initialState)

  const getBudjetData = useCallback(() => {
    getBudjetDataAction(localDispatch)
  }, [localDispatch])

  return {
    getBudjetData,
    dayEstimatedBalance,
    dayRemainingMoney,
    date,
    periodRemainingMoney,
    error,
    isLoading,
  }
}

export default useBudjet
