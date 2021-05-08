import clsx from "clsx"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

import PersistentDrawerRight from "./PersistentDrawerRight"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
}))

export default function Header({ open, handleDrawerOpen, handleDrawerClose }) {
  const classes = useStyles()
  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Aeropuerto Internacional Arturo Merino Benítez - SCL / Air-Nais
          </Typography>
        </Toolbar>
      </AppBar>
      <PersistentDrawerRight handleDrawerClose={handleDrawerClose} open={open} />
    </div>
  )
}
