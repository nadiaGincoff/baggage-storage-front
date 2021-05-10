import Container from "@material-ui/core/Container"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import BaggageTable from "./BaggageTable"
import Title from "../TitleView"

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

export default function Baggages() {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Container disableGutters="true">
      <Paper className={classes.container}>
        <Container className={classes.containerTitle}>
          <Title title={`Baggage list`} />
        </Container>
        <Container className={classes.containerBtn} />
      </Paper>
      <BaggageTable />
    </Container>
  )
}
