import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import AddIcon from "@material-ui/icons/Add"

import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: 15,
    backgroundColor: "#f0b465",
    "&hover": {
      backgroundColor: "#ed878a",
    },
    borderRadius: 15,
  },
  title: {
    textDecoration: "none",
  },
  container: {
    boxShadow: "0 12.1px 7px rgba(0, 0, 0, 0.015)",
    borderRadius: 15,
    // alignContent: "center",
    // justifyContent: "center",
    maxWidth: "50vh",
    height: "70vh",
    paddingTop: "20vh",
    backgroundColor: "#edd98a",
  },
}))

export default function CreatePassanger() {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Container className={classes.container}>
      <Typography
        variant="h6"
        color="primary"
        component="h2"
        gutterBottom
        className={classes.title}
      >
        Agregar pasajero
      </Typography>
      <Button
        className={classes.btn}
        onClick={() => console.log(`you clicked meee!`)}
        type="submit"
        color="secundary"
        variant="contained"
        endIcon={<AddIcon />}
      >
        Agregar
      </Button>
    </Container>
  )
}
