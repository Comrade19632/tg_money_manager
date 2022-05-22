import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const TelegramLoginButton = ({
  botName,
  buttonSize,
  className,
  cornerRadius,
  requestAccess,
  usePic,
  dataOnauth,
  dataAuthUrl,
  lang,
}) => {
  const instance = useRef(null)

  useEffect(() => {
    if (instance) {
      window.TelegramLoginWidget = {
        dataOnauth: (user) => {
          dataOnauth(user)
        },
      }

      const script = document.createElement('script')
      script.src = 'https://telegram.org/js/telegram-widget.js?14'
      script.setAttribute('data-telegram-login', botName)
      script.setAttribute('data-size', buttonSize)
      if (cornerRadius !== undefined) {
        script.setAttribute('data-radius', cornerRadius)
      }
      script.setAttribute('data-request-access', requestAccess)
      script.setAttribute('data-userpic', usePic)
      script.setAttribute('data-lang', lang)
      if (dataAuthUrl !== undefined) {
        script.setAttribute('data-auth-url', dataAuthUrl)
      } else {
        script.setAttribute(
          'data-onauth',
          'TelegramLoginWidget.dataOnauth(user)',
        )
      }
      script.async = true

      instance.current.appendChild(script)
    }
  }, [
    botName,
    buttonSize,
    cornerRadius,
    requestAccess,
    dataOnauth,
    dataAuthUrl,
    lang,
    usePic,
  ])

  return <div ref={instance} className={className} />
}

TelegramLoginButton.propTypes = {
  botName: PropTypes.string.isRequired,
  className: PropTypes.string,
  dataOnauth: PropTypes.func,
  dataAuthUrl: PropTypes.func,
  buttonSize: PropTypes.oneOf(['large', 'medium', 'small']),
  cornerRadius: PropTypes.number,
  requestAccess: PropTypes.string,
  usePic: PropTypes.bool,
  lang: PropTypes.string,
}

TelegramLoginButton.defaultProps = {
  buttonSize: 'large',
  dataOnauth: () => undefined,
  lang: 'ru',
  requestAccess: 'write',
  usePic: true,
  cornerRadius: 0,
  dataAuthUrl: '#',
  className: '',
}

export default TelegramLoginButton
