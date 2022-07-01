import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { loginViaWidjet } from 'redux/auth/actions'

import DevLoginForm from './components/DevLoginForm'
import TelegramLoginButton from './components/TelegramLoginButton'
import style from './index.module.sass'
import LoginViaBot from './components/LoginViaBot'

const Login = () => {
  const particlesInit = async (main) => {

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }

  const dispatch = useDispatch()

  const {
    isAuthenticated,
  } = useSelector(state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }))

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const handleLogin = (userData) => dispatch(loginViaWidjet(userData))

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }} />
      <div className={style.container}>
        {(process.env.NODE_ENV === 'production') ? <TelegramLoginButton dataOnauth={handleLogin} /> : <DevLoginForm handleLogin={handleLogin} />}
        <LoginViaBot/>
      </div>
    </>
  )
}

export default Login
