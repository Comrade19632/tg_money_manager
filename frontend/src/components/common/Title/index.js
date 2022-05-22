import * as React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

const Title = ({children}) => (
  <Typography 
    component="h2" 
    variant="h6"
    color="primary" 
    gutterBottom>
    {children}
  </Typography>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title
