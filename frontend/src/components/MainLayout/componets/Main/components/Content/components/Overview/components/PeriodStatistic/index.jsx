/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Loader from 'components/Loader'
import Item from './components/Item'
import usePeriodStatistic from './hooks/usePeriodStatistic'
import style from './index.module.sass'
import DateSelect from './components/DateSelect'

const PeriodStatistic = () => {
  const {
    getPeriodStatisticData,
    periodIncome,
    periodOutcome,
    periodBalance,
    totalBalance,
    percentage,
    isLoading,
  } = usePeriodStatistic()

  const datesOptions = [
    {
      value: {
        startDate: moment().subtract(1, 'months').format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD'),
      },
      label: 'последние 30 дней'
    },
    {
      value: {
        startDate: moment().subtract(3, 'months').format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD'),
      },
      label: 'последние 3 месяца'
    },
    {
      value: {
        startDate: null,
        endDate: null,
      },
      label: 'все время'
    },
  ]

  const [dates, setDates] = useState(datesOptions[0])

  useEffect(() => {
    getPeriodStatisticData({ startDate: dates.value.startDate, endDate: dates.value.endDate })
  }, [getPeriodStatisticData, dates])

  const items = [
    {
      className: style.totalBalance,
      amount: totalBalance,
      label: 'Баланс за все время:',
      periodBalance,
      percentage,
    },
    {
      className: style.income,
      amount: periodIncome,
      amountColor: '#1ffa0740',
      label: `Доход за ${dates.label}:`,
    },
    {
      className: style.outcome,
      amount: periodOutcome,
      amountColor: '#fa070740',
      label: `Расходы за ${dates.label}:`,
    }
  ]

  return (
    <div className={style.periodStatistic}>
      <div className={style.header}>
        <div className={style.title}>
          Статистика по периодам
        </div>
        <DateSelect dates={dates} setDates={setDates} datesOptions={datesOptions} />
      </div>
      <div className={style.content}>
        {isLoading ? <Loader className={style.loader} /> : items.map((item) => (
          <Item key={item.label} {...item} startDate={dates.value.startDate} endDate={dates.value.endDate} />
        ))}
      </div>
    </div>
  )
}

export default PeriodStatistic