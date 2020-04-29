import { Fab, List, ListItem, ListItemIcon } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Reload from '@material-ui/icons/Replay';
import Visibility from "@material-ui/icons/Visibility";
import clsx from "clsx";
import React from "react";
import { drawerWidth } from '../../constants';
import useMapControls from "./useMapControls";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      // width: `calc(100% - ${drawerWidth}px)`,
      // transition: theme.transitions.create(["width", "margin"], {
      //   easing: theme.transitions.easing.sharp,
      //   duration: theme.transitions.duration.enteringScreen,
      // }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    closedButtons: {
      minWidth: 0
    }
  }));

function Buttons({open, toggleDraw}) {
  const classes = useStyles();
  const { random } = useMapControls();
  if (open) {
    return (
      <Fab onClick={toggleDraw} size="small">
        <ChevronLeftIcon />
      </Fab>
    )
      
  } else {
    return (      
      <List className={classes.closedButtons}>
        <ListItem button onClick={toggleDraw}>
          <ListItemIcon>
            <Visibility />
          </ListItemIcon>          
        </ListItem>
        <ListItem button onClick={random}>
          <ListItemIcon>
            <Reload />
          </ListItemIcon>          
        </ListItem>
        <ListItem>                  
        </ListItem>      
      </List>
    )
  }
}

function SideMenu({
  children
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDraw = () => {
    setOpen(!open);
  };


  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <Buttons toggleDraw={toggleDraw} open={open} />
      </div>

      {open && children}
    </Drawer>
  );
}

export default SideMenu;
