import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Header from 'components/layouts/Header'
import Footer from 'components/layouts/Footer'
import Menu from '../Menu'

const Layout = () => {

  const [isOpen, setOpen] = useState(false)
  const mdTheme = createTheme()
  const drawerwidth = 240
  const unreadMessages = 3

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Menu 
          open={isOpen}
          setOpen={setOpen}
          drawerwidth={drawerwidth}/>
        <Header 
          unreadMessages={unreadMessages}
          open={isOpen}
          toggleDrawer={setOpen}
          drawerwidth={drawerwidth}/>
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
