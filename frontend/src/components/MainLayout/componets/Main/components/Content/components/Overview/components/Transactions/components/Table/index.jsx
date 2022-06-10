import React, { useEffect } from 'react'

import Loader from 'components/Loader'
import TableHead from './TableHead'
import TableTransaction from './TableTransaction'

import style from './index.module.sass'
import useTransactions from '../../hooks/useTransactions'

const Table = () => {

  const {
    getTransactionsData,
    transactions,
    error,
    isLoading,
  } = useTransactions()

  useEffect(() => {
    getTransactionsData({ limit: 5 })
  }, [getTransactionsData])

  const renderItems = () => {
    if (isLoading) return <Loader className={style.loader} />
    if (error) return error
    return transactions.results.map((transaction) => (
      <TableTransaction
        key={transaction.id}
        amount={transaction.amount}
        enumType={transaction.enum_type}
        category={transaction.category}
        date={transaction.date}
        title={transaction.title}
        isCorrection={transaction.is_correction}
        isMonthly={transaction.is_monthly}
      />
    )
    )
  }

  return (
    <div className={style.table}>
      <div className={style.tableContainer} role="table">
        <TableHead />
        {renderItems()}
      </div>
    </div>
  )
}

export default Table
