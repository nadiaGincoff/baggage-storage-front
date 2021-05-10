import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { makeStyles, useTheme } from "@material-ui/core/styles"
import Header from "./Header"
import PersistentDrawerRight from "./PersistentDrawerRight"
import Passengers from "./passengers/Passengers"
import PassengerForm from "./passengers/PassengerForm"
import Baggages from "./baggages/Baggages"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingTop: "15vh",
    padding: "1rem",
    width: "100%",
    borderRadius: 15,
    maxWidth: "100vh",
    height: "100vh",
    paddingBottom: "5vh",
    boxShadow: `0px 2px 4px -1px #0000`,
  },
}))

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Router>
        <Header
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <PersistentDrawerRight
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={Passengers} />
            <Route exact path="/passengers" component={Passengers} />
            <Route exact path="/new-passenger" component={PassengerForm} />
            <Route exact path="/get-passenger/:id" component={PassengerForm} />
            <Route exact path="/baggages" component={Baggages} />
          </Switch>
        </main>
      </Router>
    </div>
  )
}
