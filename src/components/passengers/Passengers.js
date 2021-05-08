import { Link } from "react-router-dom"

import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

import { makeStyles, useTheme } from "@material-ui/core/styles"

import PassengerTable from "./PassengerTable"

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "100vh",
    height: "auto",
    paddingBottom: "5vh",
    boxShadow: `0px 2px 4px -1px #0000`,
  },
  containerTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2em",
  },
  btn: {
    fontSize: 13,
    backgroundColor: "#f0b465",
    borderRadius: 15,
  },
}))

export default function Passengers() {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Container disableGutters="true" className={classes.container}>
      <Container className={classes.containerTitle}>
        <Typography
          variant="h5"
          color="primary"
          component="h2"
          className={classes.typography}
        >
          Listado de pasajeros
        </Typography>
        <Link to={"/new-passenger"}>
          <Button
            className={classes.btn}
            onClick={() => console.log(`you clicked meee!`)}
            type="submit"
            color="secundary"
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
          >
            Agregar pasajero
          </Button>
        </Link>
      </Container>
      <PassengerTable />
    </Container>
  )
}
