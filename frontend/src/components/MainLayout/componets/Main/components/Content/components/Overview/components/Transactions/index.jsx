/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import Table from './components/Table'
import useTransactions from './hooks/useTransactions'
import style from './index.module.sass'

const Transactions = () => (
  <div className={style.transactions}>
    <div className={style.header}>
      <div className={style.title}>
          Последние транзакции
      </div>
    </div>
    <div className={style.content}>
      <Table />
    </div>
  </div>
)

export default Transactions