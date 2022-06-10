import { useCallback, useReducer, useEffect } from 'react'
import axios from 'axios'

import { getTransactionsData as getTransactionsDataAction } from './actions'
import reducer, { initialState } from './reducer'

const useTransactions = () => {
  useEffect(() => {
    if (window.location.origin === 'http://localhost:3000') {
      axios.defaults.baseURL = 'http://localhost/api/'
    } else {
      axios.defaults.baseURL = `${window.location.origin}/api/`
    }
  })

  const [{
    isLoading,
    transactions,
    error,
  }, localDispatch] = useReducer(reducer, initialState)

  const getTransactionsData = useCallback((params = {}) => {
    getTransactionsDataAction(localDispatch, params)
  }, [localDispatch])

  return {
    getTransactionsData,
    transactions,
    error,
    isLoading,
  }
}

export default useTransactions
