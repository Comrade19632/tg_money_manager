import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Copyright from 'components/common/Copyright'

const StickyFooter = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '20vh',
    }}>
    <CssBaseline />
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}>
      <Container maxWidth='sm'>
        <Typography 
          variant='body1'
          textAlign='center'>
          some text
        </Typography>
        <Copyright />
      </Container>
    </Box>
  </Box>
)

export default StickyFooter
