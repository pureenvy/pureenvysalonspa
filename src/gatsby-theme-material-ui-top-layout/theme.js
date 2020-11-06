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
    h1: { fontFamily: `'Liu Jian Mao Cao', cursive;` },
    h2: { fontFamily: `'Liu Jian Mao Cao', cursive;` },
    h3: { fontFamily: `'Liu Jian Mao Cao', cursive;` },
    h4: { fontFamily: `'Liu Jian Mao Cao', cursive;` },
    h5: { fontFamily: `'Liu Jian Mao Cao', cursive;` },
  }
})

export default theme
