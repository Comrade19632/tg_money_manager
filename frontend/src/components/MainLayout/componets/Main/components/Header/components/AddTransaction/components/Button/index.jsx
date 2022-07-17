import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useOutsideClick from 'hooks/useOutsideClick'
import style from '../../index.module.sass'
import Modal from '../Modal'

const Button = ({children, modalType, className}) => {

  const [isModalOpened, setModalOpened] = useState(false)

  const ref = useRef()

  useOutsideClick(ref, () => {
    if (isModalOpened) setModalOpened(false)
  })

  return (
    <>
      <button className={classNames(style.button, className)} onClick={() => setModalOpened(!isModalOpened)} aria-label={modalType} type='button'>
        {children}
      </button>
      <Modal refProp={ref} isModalOpened={isModalOpened} setModalOpened={setModalOpened} modalType={modalType} />
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  modalType: PropTypes.string,
  className: PropTypes.string
}

export default Button
