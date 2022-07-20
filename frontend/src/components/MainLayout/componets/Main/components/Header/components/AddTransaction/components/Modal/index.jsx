import React, {useState} from 'react'
import {uniqueId} from 'lodash'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import style from './index.module.sass'
import RadioSlider from './components/RadioSilder.jsx'

export const ModalTypes = {
  INCOME: 'income',
  OUTCOME: 'outcome'
}

const Modal = ({ isModalOpened, refProp }) => {

  const radioChoices = [{label: 'test', id: uniqueId('test_')}, {label: '312', id: uniqueId('312_')}]

  const [currentRadioValue, setCurrentRadioValue] = useState(radioChoices[0].label)

  return (
    <div ref={refProp} className={classNames(style.modal, {
      [style.opened]: isModalOpened
    })}>
      <RadioSlider radioChoices={radioChoices} currentRadioValue={currentRadioValue} setCurrentRadioValue={setCurrentRadioValue}/>
    </div>
  )
}

Modal.propTypes = {
  isModalOpened: PropTypes.bool,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

export default Modal