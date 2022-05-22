import MuiAppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerwidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerwidth,
    width: `calc(100% - ${drawerwidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

AppBar.propTypes = {
  theme: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  drawerwidth: PropTypes.number.isRequired
}

export default AppBar
