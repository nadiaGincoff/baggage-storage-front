import { useHistory } from "react-router-dom"
import Container from "@material-ui/core/Container"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import PassengerTable from "./PassengerTable"
import Title from "../TitleView"
import Button from "../controls/Button"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1em",
    padding: theme.spacing(2),
  },
  containerTitle: {
    width: "50%",
  },
  containerBtn: {
    width: "40%",
  },
}))

export default function Passengers() {
  const history = useHistory()
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Container disableGutters="true">
      <Paper className={classes.container}>
        <Container className={classes.containerTitle}>
          <Title title={`Passenger list`} />
        </Container>
        <Container className={classes.containerBtn}>
          <Button
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => {
              history.push("/new-passenger")
            }}
            size="small"
            text="Add passenger"
          />
        </Container>
      </Paper>
      <PassengerTable />
    </Container>
  )
}
