import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginViaBot } from 'redux/auth/actions'
import style from './index.module.sass'

const LoginViaBot = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)

    if (queryParams.has('access') && queryParams.has('refresh') && queryParams.has('user')) {
      dispatch(loginViaBot(queryParams.get('access'), JSON.parse(queryParams.get('user'))))
    }

  }, [dispatch, location.search])

  return (
    <div className={style.loginViaBot}>
      <div>
        Или войти с помощью <a href={(process.env.NODE_ENV === 'production') ? 'https://t.me/tgmm_xyz_bot?start' : 'https://t.me/tg_money_manager_bot_dev_bot?start' }>нашего телеграмм бота</a>.
        Напишите команду /start и перейдите по ссылке, которую отправит вам бот.
      </div>
      <div><span>*</span>Используйте этот способ, если не получается войти через виджет.</div>
    </div>
  )
}

export default LoginViaBot
