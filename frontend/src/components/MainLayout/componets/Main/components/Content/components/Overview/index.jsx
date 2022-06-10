import React from 'react'
import Budjet from './components/Budjet'
import PeriodStatistic from './components/PeriodStatistic'
import Transactions from './components/Transactions'
import style from './index.module.sass'

const Overview = () => (
  <div className={style.overview}>
    <Budjet/>
    <PeriodStatistic/>
    <Transactions/>
  </div>
)

export default Overview