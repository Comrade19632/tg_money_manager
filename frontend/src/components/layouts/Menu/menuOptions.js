import React from 'react'
import { useNavigate } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import PublicIcon from '@mui/icons-material/Public'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import LogoutIcon from '@mui/icons-material/Logout'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'redux/actions/authentication/authAC'

export const MainListItems = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    state => state.auth.isAuthenticated
  )
  const navigateToSpam = () => navigate('/spam')
  const navigateToParsing = () => navigate('/inviting')
  const navigateToAccounts = () => navigate('/')
  const handleLogout = () => {
    if (!isAuthenticated) {
      return null
    }
    return dispatch(logout(navigate, '/login'))
  }

  return (
    <>
      <ListItemButton onClick={navigateToAccounts}>
        <ListItemIcon>
          <ContactPageIcon />
        </ListItemIcon>
        <ListItemText primary="Аккаунты" />
      </ListItemButton>

      <ListItemButton onClick={navigateToSpam}>
        <ListItemIcon>
          <PublicIcon />
        </ListItemIcon>
        <ListItemText primary="Продвижение" />
      </ListItemButton>

      <ListItemButton onClick={navigateToParsing}>
        <ListItemIcon>
          <GroupAddIcon />
        </ListItemIcon>
        <ListItemText primary="Инвайтинг" />
      </ListItemButton>

      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon/>
        </ListItemIcon>
        <ListItemText primary="Выход" />
      </ListItemButton>
    </>
  )
}

export const SecondaryListItems = () => {
  const isAuthenticated = useSelector(
    state => state.auth.isAuthenticated
  ) 
  if (!isAuthenticated) {
    return null
  }

  return (
    <>
      <ListSubheader component="div" inset>
        Информация
      </ListSubheader>

      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Подробности" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Контакты" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Связаться" />
      </ListItemButton>
    </>
  )
}
