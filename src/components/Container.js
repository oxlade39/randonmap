import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { NumberParam, StringParam, useQueryParams, withDefault } from "use-query-params";
import { v4 as uuidv4 } from "uuid";
import { defaultContries, defaultUUID } from "../constants";
import Controls from "./Controls";
import RandomMap from "./RandomMap";
import SideMenu from "./SideMenu";

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
  const [query, setQuery] = useQueryParams({
    countryCount: withDefault(NumberParam, defaultContries),
    mapId: withDefault(StringParam, defaultUUID),
  });
  const [selected, setSelected] = React.useState([]);

  const updateControls = (controls) => {
    console.log('controls update to', controls);
    setQuery(
      {
        mapId: uuidv4(),
        countryCount: controls.countryCount,
      },
      "push"
    );
  };

  useEffect(() => {
    setQuery({
        mapId: uuidv4(),
        ...query
    });
  }, []);

  return (
    <Box className={classes.root}>
      <SideMenu countryCount={query.countryCount} selected={selected}>
        <Controls
          onUpdate={updateControls}
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
