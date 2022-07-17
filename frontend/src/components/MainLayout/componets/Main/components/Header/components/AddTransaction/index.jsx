import React from 'react'
import classNames from 'classnames'
import style from './index.module.sass'

const AddTransaction = () => (
  <div className={style.addTransaction}>
    <button className={classNames(style.button, style.income)} aria-label="add income" type='button'>
      +
    </button>
    <button className={classNames(style.button, style.outcome)} aria-label="add outcome" type='button'>
      -
    </button>
  </div>
)

export default AddTransaction