import { createMuiTheme } from '@material-ui/core'
import { deepPurple, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9a8dce',
      main: '#6a609d',
      dark: '#3d366e',
      contrastText: '#fff',
    },
    secondary: lightGreen,
  },
})

export default theme
