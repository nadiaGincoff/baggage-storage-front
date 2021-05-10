import  {Button as MuiButton}  from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: 15,
    backgroundColor: "grey",
    borderRadius: 15,
    width: "100%",
  },
}))

export default function Button(props) {
  const theme = useTheme()
  const classes = useStyles(theme)

  const { text, size, color, backgroundColor, width, variant, onClick, icon, ...other  } = props

  return (
    <MuiButton
      className={classes.btn}
      onClick={onClick}
      type="submit"
      size={size || "large"}
      color={color || "primary"}
      variant={variant || "contained"}
      endIcon={icon}
      {...other}
    >
      {text}
    </MuiButton>
  )
}
