import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import seedrandom from 'seedrandom';
import * as topojson from 'topojson-client';
import Controls from "./Controls";
import RandomMap from "./RandomMap";
import SideMenu from "./SideMenu";
import useMapControls from './useMapControls';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: 'row',
    height: '100%'
  },
  content: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: theme.spacing(3),
  },
}));

const select = (features = [], selectCount, mapId) => {
  const rng = seedrandom(mapId);
  // Shuffle array
  const shuffled = features
    .sort((left, right) => left.properties.name > right.properties.name ? 1 : -1)
    .sort(() => 0.5 - rng());
  // Get sub-array of first n elements after shuffled
  const items = shuffled.slice(0, selectCount);
  return items;
};

function MapContainer() {
  const classes = useStyles();  
  const [selected, setSelected] = React.useState([]);
  const [world, setWorld] = React.useState();
  const { query, update } = useMapControls();

  useEffect(() => {

    const getMap = async () => {
      const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
      const data = await response.json();
      setWorld(topojson.feature(data, data.objects.countries));
    }
    getMap();
  }, []);

  useEffect(() => {
    if (world) {
      const items = select(world.features, query.countryCount, query.mapId)
      setSelected(items);
    }
  }, [world, query, setSelected])

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
          selected={selected}
          world={world}
        />
      </Box>
    </Box>
  );
}

export default MapContainer;
