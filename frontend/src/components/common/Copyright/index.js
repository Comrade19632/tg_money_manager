import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import PropTypes from 'prop-types'

const Copyright = ({sx}) => (
  <Typography 
    variant="body2" 
    color="text.secondary" 
    align="center" 
    sx={sx}>
    {'Copyright © '}
    <Link color="inherit" href="#">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
)

Copyright.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any) // eslint-disable-line react/forbid-prop-types
}

Copyright.defaultProps = {
  sx: null,
}

export default Copyright
