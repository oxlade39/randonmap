import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

import RandomMap from "./components/RandomMap";
import ExampleMap from './components/ExampleMap';
import { TextField, Input } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: "orange",
  },
});

const drawerWidth = 240;

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
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Controls({ setForm, form }) {
  console.log(`rendering controls with`, form);
  const [formValues, setFormValues] = React.useState({
    countryCount: 0,
    ...form,
  });

  const doSubmit = (e) => {
    e.preventDefault();
    setForm(formValues);
  };

  const updateFormValues = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form noValidate autoComplete="off" onSubmit={doSubmit}>
      <div>
        <TextField
          id="countryCount"
          name="countryCount"
          label="No. Countries"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          value={formValues.countryCount}
          onChange={updateFormValues}
        />
      </div>
      <div>
        <Input type="submit" label="Update" />
      </div>
    </form>
  );
}

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [countryCount, setCountryCount] = React.useState(1000);

  const toggleDraw = () => {
    setOpen(!open);
  };

  const updateControls = (form) => {
    setCountryCount(form.countryCount);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.root} height="100%">
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
            <IconButton onClick={toggleDraw}>
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>

          {open && (
            <Controls setForm={updateControls} form={{ countryCount }} />
          )}
        </Drawer>
        <Box className={classes.content}>
          <RandomMap countryCount={countryCount} />
        </Box>        
      </Box>
    </ThemeProvider>
  );
}

export default App;
