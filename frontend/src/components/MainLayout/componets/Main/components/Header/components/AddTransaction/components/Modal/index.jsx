import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import style from './index.module.sass'

export const ModalTypes = {
  INCOME: 'income',
  OUTCOME: 'outcome'
}

const Modal = ({isModalOpened, refProp}) => (
  <div ref={refProp} className={classNames(style.modal, {
    [style.opened] : isModalOpened
  })}>Modal</div>
)

Modal.propTypes = {
  isModalOpened: PropTypes.bool,
  refProp: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

export default Modal