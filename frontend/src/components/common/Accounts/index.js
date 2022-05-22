import React from 'react'
import Grid from '@mui/material/Grid'
import { Button, CardActionArea } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import PropTypes from 'prop-types'

const Accounts = ({ accountsArray }) => (
  <Grid item xs={12} md={8} lg={9}>
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Button variant="contained" size="small" color="primary" aria-label="add">
        Добавить&nbsp;
        <AddCircleOutlinedIcon />
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
    </Paper>
  </Grid>
)

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
