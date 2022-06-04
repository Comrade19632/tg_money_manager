import React from 'react'
import PeriodStatistic from './components/PeriodStatistic'
import style from './index.module.sass'

const Overview = () => (
  <div className={style.overview}>
    <PeriodStatistic/>
  </div>
)

export default Overview