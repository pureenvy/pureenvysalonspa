import { createMuiTheme } from '@material-ui/core'
import { lightGreen } from '@material-ui/core/colors'

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
  typography: {
    h1: { fontFamily: `'Shadows Into Light Two', cursive;` },
    h2: { fontFamily: `'Shadows Into Light Two', cursive;` },
    h3: { fontFamily: `'Shadows Into Light Two', cursive;` },
    h4: { fontFamily: `'Shadows Into Light Two', cursive;` },
    h5: { fontFamily: `'Shadows Into Light Two', cursive;` },
  },
})

export default theme
