/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import Loader from 'components/Loader'
import useBudjet from './hooks/useBudjet'
import style from './index.module.sass'
import Item from './components/Item'

const Budjet = () => {
  const {
    getBudjetData,
    dayEstimatedBalance,
    dayRemainingMoney,
    date,
    periodRemainingMoney,
    error,
    isLoading,
  } = useBudjet()

  useEffect(() => {
    getBudjetData()
  }, [getBudjetData])

  const items = [
    {
      className: style.totalBalance,
      amount: dayRemainingMoney,
      label: `Баланс на ${date}:`,
    },
    {
      className: style.income,
      amount: dayEstimatedBalance,
      label: `Рассчитаный бюджет на ${date}:`,
    },
    {
      className: style.outcome,
      amount: periodRemainingMoney,
      label: 'Баланс на текущий месяц:',
    }
  ]

  const renderItems = () => {
    if (isLoading) return <Loader className={style.loader} />
    if (error) return error
    return items.map((item) => <Item key={item.label} {...item} />)
  }

  return (
    <div className={style.budjet}>
      <div className={style.header}>
        <div className={style.title}>
          Бюджет
        </div>
      </div>
      <div className={style.content}>
        {renderItems()}
      </div>
    </div>
  )
}

export default Budjet