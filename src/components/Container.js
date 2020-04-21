import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import Controls from "./Controls";
import RandomMap from "./RandomMap";
import SideMenu from "./SideMenu";
import useMapControls from './useMapControls';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Container() {
  const classes = useStyles();  
  const [selected, setSelected] = React.useState([]);

  const { query, update, random } = useMapControls();

  useEffect(() => {
    random();
  }, []);

  return (
    <Box className={classes.root}>
      <SideMenu countryCount={query.countryCount} selected={selected}>
        <Controls
          onUpdate={update}
          defaultValues={{
            ...query,
          }}
          selected={selected}
        />
      </SideMenu>
      <Box className={classes.content}>
        <RandomMap
          mapId={query.mapId}
          countryCount={query.countryCount}
          selected={selected}
          setSelected={setSelected}
        />
      </Box>
    </Box>
  );
}

export default Container;
