import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { makeStyles, useTheme } from "@material-ui/core/styles"
import Header from "./Header"
import PersistentDrawerRight from "./PersistentDrawerRight"
import Passengers from "./passengers/Passengers"
import CreatePassenger from "./passengers/CreatePassenger"
import Baggages from "./baggages/Baggages"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    height: "100vh",
  },
  content: {
    paddingTop: "15vh",
    padding: "1rem",
    width: "100%",
    alignContent: "left",
    justifyContent: "center",
    // flexGrow: 1,
    // margin: drawerWidth,
    // marginTop: drawerWidth,
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
            <Route exact path="/new-passenger" component={CreatePassenger} />
            <Route exact path="/baggages" component={Baggages} />
          </Switch>
        </main>
      </Router>
    </div>
  )
}
