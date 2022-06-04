import { useCallback, useReducer, useEffect } from 'react'
import axios from 'axios'

import { getPeriodStatisticData as getPeriodStatisticDataAction } from './actions'
import reducer, { initialState } from './reducer'

const usePeriodStatistic = () => {
  useEffect(() => {
    if (window.location.origin === 'http://localhost:3000') {
      axios.defaults.baseURL = 'http://localhost/api/'
    } else {
      axios.defaults.baseURL = `${window.location.origin}/api/`
    }
  })

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
