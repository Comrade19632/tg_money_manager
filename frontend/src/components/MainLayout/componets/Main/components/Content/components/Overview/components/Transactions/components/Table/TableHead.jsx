import React from 'react'
import classNames from 'classnames'
import style from './index.module.sass'

const TableHead = () => (
  <div className={classNames(style.flexTable, style.header)} role="rowgroup">
    <div className={classNames(style.flexRow, style.amountCol)} role="columnheader">Сумма, р.</div>
    <div className={classNames(style.flexRow, style.typeCol)} role="columnheader">Тип</div>
    <div className={classNames(style.flexRow, style.categoryCol)} role="columnheader">Категория</div>
    <div className={classNames(style.flexRow, style.dateCol)} role="columnheader">Дата</div>
    <div className={classNames(style.flexRow, style.titleCol)} role="columnheader">Название</div>
  </div>
)

export default TableHead
