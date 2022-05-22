import * as React from 'react'
import { useSelector } from 'react-redux'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Title from '../Title'


const Deposits = ({ balance }) => {
  const onClick = (event) => {
    event.preventDefault()
  }

  const today = new Date().toLocaleDateString()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  if (!isAuthenticated) {
    return null
  }
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 240,
        }}>
        <Title>Баланс</Title>
        <Typography component="p" variant="h4">
          {balance}
          < CurrencyRubleIcon/>
        </Typography>
        <Typography
          color="text.secondary"
          sx={{flex: 1}}>
          {today}
        </Typography>
        <div>
          <Link 
            color="primary" 
            href="#" 
            onClick={onClick}>
            История зачислений
          </Link>
        </div>
      </Paper>
    </Grid>

  )
}

Deposits.propTypes = {
  balance: PropTypes.number
}

Deposits.defaultProps = {
  balance: 0,
}

export default Deposits
