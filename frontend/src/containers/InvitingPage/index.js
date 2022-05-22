import React  from 'react'
import { Container, CssBaseline, FormControlLabel, Switch } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { getUserConfirmation, setDonorChatName, setUserChatName, startInviting } from 'redux/actions/inviting/invitingAC'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const InvitingPage = () => {
  const dispatch = useDispatch()

  const { 
    currentOrderID, 
    existingOrdersIDs,
    token,
    userChatLink,
    donorChatLink,
    isConfirmed,
    isAuthenticated,
  } = useSelector(state =>({
    currentOrderID: state.inviting.currentOrderID,
    existingOrdersIDs: state.inviting.existingOrdersIDs,
    token: state.auth.token,
    userChatLink:  state.inviting.userChatLink,
    donorChatLink:  state.inviting.donorChatLink,
    isConfirmed:  state.inviting.isConfirmed,
    isAuthenticated: state.auth.isAuthenticated,
  }))

  
  const onClick = (event) => {
    event.preventDefault()
    dispatch(startInviting(
      token, 
      userChatLink, 
      donorChatLink, 
      currentOrderID, 
      existingOrdersIDs, 
      isConfirmed,
    ))

  }

  const onUserNameChange = (event) => {
    const input = event.target.value
    dispatch(setUserChatName(input))
  }

  const onDonorNameChange = (event) => {
    dispatch(
      setDonorChatName(event.target.value)
    )
  }

  const handleCheck = () => {
    dispatch(getUserConfirmation(!isConfirmed))
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }
  return(
    <Container>
      <CssBaseline/>
      <Typography component="h1" variant="h5">
          Добавление в чат
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="donorChat"
          label="Ссылка на чат донор"
          name="donorChat"
          autoComplete="Парсить_этот_чат"
          autoFocus
          value={donorChatLink}
          onChange={onDonorNameChange}
        />
        <TextField
          value={userChatLink}
          margin="normal"
          required
          fullWidth
          id="userChat"
          label="Ссылка на ваш чат"
          name="userChat"
          autoComplete="добавить в этот чат"
          autoFocus
          onChange={onUserNameChange}
        />
        <CssBaseline/>
        <Box>
          <FormControlLabel
            control={<Switch
              checked={isConfirmed}
              onChange={handleCheck} value="confirm" color="primary" />}
            label='использовать данные предыдущих заказов'
          />
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onClick}>
          начать
        </Button>
      </Box>
    </Container>
  )
}

export default InvitingPage