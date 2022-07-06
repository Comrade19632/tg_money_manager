import { useCallback, useReducer, useEffect } from 'react'

import { getTransactionsData as getTransactionsDataAction } from './actions'
import reducer, { initialState } from './reducer'

const useTransactions = () => {
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
