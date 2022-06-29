import React from 'react'
import PropTypes from 'prop-types'
import style from './index.module.sass'

const TableTransaction = ({
  amount,
  enumType,
  category,
  date,
  title,
  isCorrection,
  isMonthly,
}) => (
  <div className={style.flexTable} role="rowgroup">
    <div className={`${style.flexRow} ${style.amountCol}`} role="cell">
      <span>Сумма: </span>
      {amount}
    </div>
    <div className={`${style.flexRow} ${style.typeCol}`} role="cell">
      <span>Тип: </span>
      {(enumType === 1) ? '+' : '-'}
      {(isMonthly) ? ' М' : null}
      {(isCorrection) ? ' К' : null}
    </div>
    <div className={`${style.flexRow} ${style.categoryCol}`} role="cell">
      <span>Категория: </span>
      {(category) ? category.title : '-'}
    </div>
    <div className={`${style.flexRow} ${style.dateCol}`} role="cell">
      <span>Дата: </span>
      {date || '-'}
    </div>
    <div className={`${style.flexRow} ${style.titleCol}`} role="cell">
      <span>Название: </span>
      {title}
    </div>
  </div>
)

TableTransaction.propTypes = {
  enumType: PropTypes.number,
  category: PropTypes.object,
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number,
  isCorrection: PropTypes.bool,
  isMonthly: PropTypes.bool,
}

export default TableTransaction
