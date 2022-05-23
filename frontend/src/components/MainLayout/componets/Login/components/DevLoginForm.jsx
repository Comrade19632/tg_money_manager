import React, {useState} from 'react'
import PropTypes from 'prop-types'

const DevLoginForm = ({handleLogin}) => {
  const [telegramId, setTelegramId] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const userData = {
      id: telegramId,
    }
    handleLogin(userData)
  }

  const onChange = (event) => {
    setTelegramId(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={telegramId} onChange={onChange} />
      <input type="submit" value="Отправить" />
    </form>
  )
}

DevLoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

export default DevLoginForm