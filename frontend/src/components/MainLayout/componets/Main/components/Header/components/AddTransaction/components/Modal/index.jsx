import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useOutsideClick from 'hooks/useOutsideClick'
import style from './index.module.sass'
import RadioSlider from './components/RadioSilder.jsx'

export const ModalTypes = {
  INCOME: 'income',
  OUTCOME: 'outcome'
}

const Modal = ({ isModalOpened, setModalOpened }) => {

  const ref = useRef()

  useOutsideClick(ref, () => {
    if (isModalOpened) setModalOpened(false)
  }, style.opened, true)

  const radioChoices = ['test', '32131']

  const [currentRadioValue, setCurrentRadioValue] = useState(radioChoices[0])

  return (
    <div ref={ref} className={classNames(style.modal, {
      [style.opened]: isModalOpened
    })}>
      <RadioSlider radioChoices={radioChoices} currentRadioValue={currentRadioValue} setCurrentRadioValue={setCurrentRadioValue} />
    </div>
  )
}

Modal.propTypes = {
  isModalOpened: PropTypes.bool,
  setModalOpened: PropTypes.func,
}

export default Modal