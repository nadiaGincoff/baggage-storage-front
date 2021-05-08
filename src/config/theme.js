import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#f0b465",
    },
    tertiary: {
      main: "#ed878a",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#eeefd6",
    },
  },
  typography: {
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 650,
    fontWeightBold: 700,
  },
})

export default theme
