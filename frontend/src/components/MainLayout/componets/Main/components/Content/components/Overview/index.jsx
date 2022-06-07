import React from 'react'
import Budjet from './components/Budjet'
import PeriodStatistic from './components/PeriodStatistic'
import style from './index.module.sass'

const Overview = () => (
  <div className={style.overview}>
    <Budjet/>
    <PeriodStatistic/>
  </div>
)

export default Overview