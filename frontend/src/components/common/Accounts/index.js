import React from 'react'
import { Button, CardActionArea } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import Card from '@mui/material/Card'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const Accounts = ({ accountsArray }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }
  return (
    <div>
      <Button fullWidth variant="contained" size="small" color="primary" aria-label="add">
        Добавить&nbsp;
      </Button>
      {accountsArray.map((account) => (
        <Card
          key={accountsArray.indexOf(account)}
          variant="outlined"
          sx={{margin: `${5}px`}}>
          <CardActionArea sx={{ padding: `${10}px` }}>
            <CheckCircleOutlineOutlinedIcon 
              sx={{ marginRight: '30px' }} />
            {account}
          </CardActionArea>
        </Card>
      ))}
    </div>
  )
}

Accounts.propTypes = {
  accountsArray: PropTypes.arrayOf(PropTypes.string)
}

Accounts.defaultProps = {
  accountsArray: [
    '752-019-4502',
    '41234123',
    '973-018-5562',
    '4321512512',
    '369-201-1098',
  ],
}

export default Accounts
