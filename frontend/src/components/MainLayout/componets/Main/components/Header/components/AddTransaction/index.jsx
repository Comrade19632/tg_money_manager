import React from 'react'
import style from './index.module.sass'
import Button from './components/Button'
import { ModalTypes } from './components/Modal'

const AddTransaction = () => (
  <div className={style.addTransaction}>
    <Button modalType={ModalTypes.INCOME} className={style.income}>
      +
    </Button>
    <Button modalType={ModalTypes.OUTCOME} className={style.outcome}>
      -
    </Button>
  </div>
)

export default AddTransaction