import { Container, CssBaseline } from '@mui/material'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const SpamPage = () => {
  const onClick = () => {
    alert('clicking')
  }
  const isAuthenticated = useSelector(
    state => state.auth.isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }
  return(
    <Container>
      <CssBaseline/>
      <Typography component="h1" variant="h5">
          Продвижение
      </Typography>
      <Box
        component="form"
        onSubmit={() => alert('submitting')}
        noValidate
        sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="telegramID"
          label="@Спамить_сюда"
          name="telegramID"
          autoComplete="@Спамить_сюда"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="telegramID"
          label="Пост"
          name="telegramID"
          autoComplete="Пост"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onClick}>
          начать парсинг
        </Button>
      </Box>
    </Container>
  ) 
}

export default SpamPage
