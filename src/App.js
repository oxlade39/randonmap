import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import RandomMap from "./components/RandomMap";
import SideMenu from './components/SideMenu';
import { defaultContries } from './constants';
import theme from './theme';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

function App() {
  const classes = useStyles();
  const [countryCount, setCountryCount] = React.useState(defaultContries);
  const [selected, setSelected] = React.useState([]);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.root}>
        <SideMenu 
          countryCount={countryCount} 
          setCountryCount={setCountryCount}           
          selected={selected}
        />
        <Box className={classes.content}>
          <RandomMap 
            countryCount={countryCount} 
            selected={selected}
            setSelected={setSelected}
          />
        </Box>        
      </Box>
    </ThemeProvider>
  );
}

export default App;
