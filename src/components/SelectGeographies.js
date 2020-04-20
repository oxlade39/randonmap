import { useTheme } from "@material-ui/core/styles";
import React, { useEffect, useMemo } from "react";
import { Geography } from "react-simple-maps";

const select = (geographies, selectCount) => {
  // Shuffle array
  const shuffled = geographies.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffled
  return shuffled.slice(0, selectCount);
};

function SelectGeographies({ geographies, selectCount, setSelected }) {
  const theme = useTheme();
  const selected = useMemo(() => select(geographies, selectCount), [
    selectCount,
    geographies,
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
