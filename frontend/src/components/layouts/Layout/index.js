import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Header from 'components/layouts/Header'
import Footer from 'components/layouts/Footer'
import Deposits from 'components/common/Balance'
import Orders from 'components/common/Statistics'
import Menu from '../Menu'

const Layout = () => {

  const [isOpen, setOpen] = useState(false)
  const mdTheme = createTheme()
  const drawerwidth = 200
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
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Main Content */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Outlet />
                </Paper>
              </Grid>
              {/* Balance  */}
              <Deposits />
              {/* Statistics */}
              <Orders />
            </Grid>
          </Container>
        </Box>
      </Box>
      <CssBaseline />
      
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
