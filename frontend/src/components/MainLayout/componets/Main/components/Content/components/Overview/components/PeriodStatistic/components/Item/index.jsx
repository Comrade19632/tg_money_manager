import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './index.module.sass'

const Item = ({
  amount,
  className,
  label,
  amountColor,
  startDate,
  endDate,
  periodBalance,
  percentage,
}) => (
  <div className={className}>
    <div className={classNames(style.item)}>
      <div className={style.label}>
        {label}
      </div>
      <div className={style.counter} style={{color: amountColor}}>
        {amount} р.
      </div>
      <div className={style.indicator}>
        {(periodBalance) ? (
          <div className={(periodBalance < 0) ? style.negative : style.positive}>
            {periodBalance} ({percentage}%)
          </div>
        ) : null}
        {(startDate && endDate) ? (<span>С {startDate} по {endDate}</span>) : null}
      </div>
    </div>
  </div>
)

Item.propTypes = {
  amount: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  amountColor: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  periodBalance: PropTypes.number,
  percentage: PropTypes.number,
}

export default Item