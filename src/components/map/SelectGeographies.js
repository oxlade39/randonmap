import { useTheme } from "@material-ui/core/styles";
import React, { useEffect, useMemo } from "react";
import { Geography } from "react-simple-maps";
import seedrandom from 'seedrandom';

const select = (geographies, selectCount, mapId) => {
  const rng = seedrandom(mapId);
  // Shuffle array
  const shuffled = geographies
    .sort((left, right) => left.properties["NAME"] > right.properties["NAME"] ? 1 : -1)
    .sort(() => 0.5 - rng());
  // Get sub-array of first n elements after shuffled
  return shuffled.slice(0, selectCount);
};

function SelectGeographies({ geographies, selectCount, setSelected, mapId }) {
  const theme = useTheme();
  const selected = useMemo(() => select(geographies, selectCount, mapId), [
    selectCount,
    geographies,
    mapId
  ]);
  const selectedNames = selected.map((geo) => geo.properties["NAME"]);

  useEffect(() => {
    setSelected(selected);
  }, [selected, setSelected]);

  return geographies.map((geo) => {
    if (selectedNames.includes(geo.properties["NAME"])) {
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          style={{
            default: {
              fill: theme.palette.primary.main,
              stroke: theme.palette.secondary.main,
              strokeWidth: 1,
            },
          }}
        />
      );
    } else {
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          style={{
            default: {
              fill: theme.palette.secondary.main,
            },
          }}
        />
      );
    }
  });
}

export default SelectGeographies;
