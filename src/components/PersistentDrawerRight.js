import { useState } from "react"
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import GroupSharpIcon from "@material-ui/icons/GroupSharp"
import ArchiveSharpIcon from "@material-ui/icons/ArchiveSharp"
import MenuIcon from "@material-ui/icons/Menu"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
}))

const options = {
  1: `Passengers`,
  2: `Storage`,
}

export default function PersistentDrawerRight({ open, handleDrawerClose }) {
  const [selectedOption, setSelectedOption] = useState(1)
  const classes = useStyles()
  const theme = useTheme()

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <MenuIcon /> : <GroupSharpIcon />}
          </IconButton>
        </div>
        <List>
          <Link to={"/passengers"}>
            <ListItem button key={options[1]} onClick={() => setSelectedOption(1)}>
              <ListItemIcon>
                <GroupSharpIcon />
              </ListItemIcon>
              <ListItemText primary={options[1]} />
            </ListItem>
          </Link>
          <Divider />
          <Link to={"/baggages"}>
            <ListItem button key={options[2]} onClick={() => setSelectedOption(2)}>
              <ListItemIcon>
                <ArchiveSharpIcon />
              </ListItemIcon>
              <ListItemText primary={options[2]} />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </Drawer>
    </div>
  )
}
