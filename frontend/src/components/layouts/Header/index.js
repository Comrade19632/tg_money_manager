import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import TelegramIcon from '@mui/icons-material/Telegram'

import AppBar from 'components/layouts/AppBar'

const Header = ({ toggleDrawer, open, unreadMessages, drawerwidth}) => (
  <AppBar 
    position="absolute" 
    open={open} 
    drawerwidth={drawerwidth}>
    <Toolbar
      sx={{
        pr: '24px', // keep right padding when drawer closed
      }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: '36px',
          ...(open && { display: 'none' }),
        }}>
        <MenuIcon />
      </IconButton>
      <TelegramIcon fontSize='large'/>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}>
        Tele-bot
      </Typography>
      <IconButton color="inherit">
        <Badge badgeContent={unreadMessages} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Toolbar>
    {/* <Outlet /> */}
  </AppBar>
)

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  unreadMessages: PropTypes.number.isRequired,
  drawerwidth: PropTypes.number.isRequired
}

export default Header
