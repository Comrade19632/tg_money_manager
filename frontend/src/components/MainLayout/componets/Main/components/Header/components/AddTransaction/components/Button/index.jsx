import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from '../../index.module.sass'
import Modal from '../Modal'

const Button = ({children, modalType, className}) => {

  const [isModalOpened, setModalOpened] = useState(false)

  return (
    <>
      <button className={classNames(style.button, className)} onClick={() => setModalOpened(!isModalOpened)} aria-label={modalType} type='button'>
        {children}
      </button>
      <Modal isModalOpened={isModalOpened} setModalOpened={setModalOpened} modalType={modalType} />
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  modalType: PropTypes.string,
  className: PropTypes.string
}

export default Button
