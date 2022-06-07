import { useCallback, useReducer, useEffect } from 'react'
import axios from 'axios'

import { getBudjetData as getBudjetDataAction } from './actions'
import reducer, { initialState } from './reducer'

const useBudjet = () => {
  useEffect(() => {
    if (window.location.origin === 'http://localhost:3000') {
      axios.defaults.baseURL = 'http://localhost/api/'
    } else {
      axios.defaults.baseURL = `${window.location.origin}/api/`
    }
  })

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
